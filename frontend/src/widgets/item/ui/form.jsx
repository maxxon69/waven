'use client'
import {useFieldArray, useForm} from "react-hook-form";
import FileUpload from "@/shared/ui/FileUpload";
import LanguageInputs from "@/shared/ui/LanguageInputs";
import UiSelect from "@/shared/uikit/UISelect/UISelect";
import {createItem, updateItem} from "@/shared/api/item.api";
import UIButton from "@/shared/uikit/UIButton";
import {useAllItemFilters} from "@/entities/item/hooks/useAllItemFilters";
import {useEffect, useMemo} from "react";
import TemplateItem from "@/entities/template/ui/template-item";
import {
    createManyItemCharacteristic,
    deleteManyItemCharacteristic,
    updateManyItemCharacteristic
} from "@/shared/api/item-characteristic.api";
import {toast} from "react-toastify";

const ItemForm = ({type = 'create', defaultValues}) => {

    const {register, control, handleSubmit, getValues, reset, watch} = useForm({
        defaultValues: useMemo(() => {
            return defaultValues ? defaultValues : {};
        }, [defaultValues])
    })
    const {fields: characteristics, append, update, remove} = useFieldArray({
        control,
        name: "characteristics",
        shouldUnregister: false

    });
    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues]);

    const addNewCharacteristic = () =>
        append({
            bonus: 'default',
            is: 'new'
        })

    const {seasons, types, rarities, templates, isSuccess} = useAllItemFilters()

    const onSubmit = async data => {
        let result
        let characteristics
        const formData = new FormData()
        formData.append('text', JSON.stringify(data.text))
        formData.append('season', data.season)
        formData.append('type', data.type)
        formData.append('rarity', data.rarity)
        if (typeof data.image !== "string") {
            formData.append('image', data.image)
        }
        if (type === 'create') {
            result = await createItem(formData)
            characteristics = await createManyItemCharacteristic({id: result._id, data: data.characteristics})

        }
        if (type === 'update') {
            formData.append('id', data._id)
            result = await updateItem(formData)
            const currentCharacteristics = data.characteristics
            console.log({currentCharacteristics})
            const currentCharacteristicsIds = currentCharacteristics.map(c => c?._id)
            const toDeleteIds = defaultValues.characteristics.filter(c => !currentCharacteristicsIds.includes(c._id)).map(c => c._id)
            const toUpdate = currentCharacteristics.filter(c => c?.is === 'old')
            const toCreate = currentCharacteristics.filter(c => c?.is === 'new')

            if (toDeleteIds.length) await deleteManyItemCharacteristic({ids: toDeleteIds})
            if (toUpdate.length) await updateManyItemCharacteristic({data: toUpdate})

            if (toCreate.length) await createManyItemCharacteristic({id: data._id, data: toCreate})
        }

        console.log({type, result, characteristics})
        toast(`🦄 Item ${type}d!`, {
            position: "bottom-right",
            autoClose: 5000,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    console.log({characteristics})
    if (!isSuccess) return null
    return (

        <>
            <form className={'flex grow gap-8'} onSubmit={handleSubmit(onSubmit)}>
                <div className={'flex flex-col gap-2 w-32'}>
                    <FileUpload type={type} getValues={getValues} control={control}/>
                    <LanguageInputs register={register} label={'Name'}/>
                    <UiSelect selectProps={{className: 'w-24', ...register('season')}} label={'Seasons'}
                              options={seasons.map(season => ({value: season._id, label: season.text.en.name}))}/>
                    <UiSelect selectProps={{className: 'w-24', ...register('type')}} label={'Type'}
                              options={types.map(type => ({value: type._id, label: type.text.en.name}))}/>
                    <UiSelect selectProps={{className: 'w-24', ...register('rarity')}} label={'Rarity'}
                              options={rarities.map(rarity => ({value: rarity._id, label: rarity.text.en.name}))}/>
                    <UIButton type={'submit'}>{
                        {
                            create: 'Create', update: 'Save'
                        }[type]
                    }</UIButton>
                </div>
                <div className={'flex flex-wrap gap-4 grow'}>
                    {
                        characteristics.map((characteristic, i) => (
                            <TemplateItem
                                control={control}
                                watch={watch}
                                key={characteristic.id} i={i} register={register} remove={remove}
                                templates={templates.map(t => ({value: t._id, label: t.text.en.name}))}/>

                        ))

                    }
                    <UIButton type={'button'} className={'h-fit'} onClick={addNewCharacteristic}>+</UIButton>
                </div>

            </form>

        </>


    );
};

export default ItemForm;
