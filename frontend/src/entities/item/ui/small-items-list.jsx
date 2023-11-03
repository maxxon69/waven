import React from 'react';
import {fetchAllItems} from "@/shared/api/item.api";
import SmallItem from "@/entities/item/ui/small-item";

const SmallItemsList = async ({searchParams}) => {
    const items = await fetchAllItems(searchParams)
    return (
            <ul className={'flex item-center flex-wrap gap-2 self-center'}>
                {
                    items?.map(item => <SmallItem key={item._id} data={item}/>)
                }
            </ul>

    );
};

export default SmallItemsList;
