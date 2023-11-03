'use client'
import { useState} from 'react';
import {fetchAllTemplates} from "@/shared/api/template.api";
import useSWR from "swr";
import UiSelect from "@/shared/uikit/UISelect/UISelect";
import {useController, useForm} from "react-hook-form";
import TemplateForm from "@/widgets/templates/ui/template-form";
import UIButton from "@/shared/uikit/UIButton";
import Link from "next/link";

const Page = () => {
    const {getValues, control, setValue} = useForm()
    const {field} = useController({name: 'name', control});
    const [selected, setSelected] = useState(null)
    const {data: templates, isLoading, error, mutate} = useSWR('templates', fetchAllTemplates,
        {
            onSuccess: data => {
                if (!selected) {
                    setSelected(data[0])
                    console.log(1, data)
                    setValue('name', data[0]._id)
                }
            }
        })
    const onChange = value => {
        field.onChange(value)
        const template = templates.find(template => template._id === value.target.value)
        setSelected(template)
    }
    if (error) {
        console.log({error})
        return 'error'
    }

    if (isLoading) return 'wait'
    return (
        <div className={'max-w-md mx-auto w-full flex flex-col gap-4'}>

            <UiSelect label={'Templates'} selectProps={{...field, onChange}}
                      options={templates.map(t => ({value: t._id, label: t.text.en.name}))}/>
            {
                getValues('name') ?
                    <TemplateForm type={'update'}
                                  defaultValues={selected} mutate={mutate}/> : null
            }
            <Link className={'self-end'} href={'/templates/new?language=en'}>
                <UIButton>
                   Create New Template
                </UIButton>
            </Link>
        </div>
    );
};


export default Page;
