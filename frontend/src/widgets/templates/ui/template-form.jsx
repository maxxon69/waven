'use client'
import React, {useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form";
import LanguageInputs from "@/shared/ui/LanguageInputs";
import LanguageTextAreas from "@/shared/ui/LanguageTextAreas";
import UIButton from "@/shared/uikit/UIButton";
import {createTemplate, updateTemplate} from "@/shared/api/template.api";
import {toast} from "react-toastify";

const TemplateForm = (props) => {
    const {type = 'create', defaultValues, mutate} = props
    const {register, handleSubmit, reset} = useForm({
        defaultValues: useMemo(() => {
            return defaultValues ? defaultValues : {};
        }, [defaultValues])
    })
    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues]);
    const onSubmit = async data => {
        let result
        if (type === 'create') {
            result = await createTemplate(data)
            reset()
        }
        if (type === 'update') {
            result = await updateTemplate({id: defaultValues._id, data})
            mutate && mutate()
        }
        toast(`🦄 Template ${type}d!`, {
            position: "bottom-right",
            autoClose: 5000,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        console.log(type, result)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex gap-8'}>

                <LanguageInputs label={'Name'} register={register}/>
                <LanguageTextAreas register={register} label={'Texts'}/>
            </div>
            <UIButton className={'mt-4 self-center'} type={'submit'}>{
                {
                    create: 'Create', update: 'Save'
                }[type]
            }</UIButton>
        </form>
    );
};

export default TemplateForm;
