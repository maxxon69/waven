'use client'
import React from 'react';
import useSWR from "swr";
import {fetchOneItem} from "@/shared/api/item.api";
import ItemForm from "@/widgets/item/ui/form";
import {findItemCharacteristics} from "@/shared/api/item-characteristic.api";
import {useFindFullItem} from "@/entities/item/hooks/useFindFullItem";

const Page = ({params: {id}}) => {
    const {data, characteristics, isSuccess} = useFindFullItem(id)
    if (!isSuccess) return 'wait'

    return (
        <ItemForm defaultValues={{...data, characteristics:characteristics.map(c=>({...c,is:'old'}))}} type={'update'}/>
    );
};

export default Page;
