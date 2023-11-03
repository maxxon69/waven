'use client'
import React, {useEffect, useState} from 'react';
import UiSelect from "@/shared/uikit/UISelect/UISelect";
import UIButton from "@/shared/uikit/UIButton";
import UiTextField from "@/shared/uikit/UITextField";
import UiCheckbox from "@/shared/uikit/UICheckbox";

const bonusOptions = [{value: 'default', label: 'Default Bonus'}, {value: 'rune', label: 'Rune Bonus'}]
const valueType = [{value: 'fixed', label: 'Fixed'}, {value: 'per_lvl', label: 'Value Per Level'}]
const Label = ({children}) => {
    return <label className={'italic text-gray text-sm'} htmlFor="">{children}</label>
}



const TemplateItem = ({register, templates, watch, i = 0, remove, control}) => {
    const bonus = watch(`characteristics.${i}.bonus`, 'default')
    const isDeck = watch(`characteristics.${i}.isDeck`, 'default')
    const rune_cost = watch(`characteristics.${i}.rune_cost`, null)
    console.log({rune_cost})
    return (
        <li className={'w-52 h-fit border border-white rounded p-2 flex flex-col gap-1 bg-dark'}>
            <Label>Type</Label>
            <UiSelect options={bonusOptions}
                      selectProps={{...register(`characteristics.${i}.bonus`)}}/>
            <UiCheckbox control={control} name={`characteristics.${i}.isDeck`} label={'Deck'}/>
            {isDeck && <UiTextField inputProps={{...register(`characteristics.${i}.deck`)}}/>}

            {
                bonus === 'rune' &&
                <>
                    <Label>Rune cost</Label>
                    <UiTextField inputProps={{...register(`characteristics.${i}.rune_cost`)}}/>
                </>

            }
            <Label>Type Characteristic</Label>

            <UiSelect options={valueType}
                      selectProps={{...register(`characteristics.${i}.value_type`)}}/>
            <UiSelect options={templates} selectProps={{...register(`characteristics.${i}.template`)}}/>
            <UiTextField type={'number'} inputProps={{
                ...register(`characteristics.${i}.value`),
                placeholder: 'Value...',
                type: 'number'
            }}/>

            <UIButton onClick={() => remove(i)}>Delete</UIButton>
        </li>
    );
};

export default TemplateItem;
