import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import {findItemCharacteristics} from "@/shared/api/item-characteristic.api";
import ItemHover from "@/entities/item/ui/item-hover";

const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API

const SmallItem = async ({data}) => {
    const characteristics = await findItemCharacteristics(data._id, true)
    return (
        <li className={'relative group'}>
            <Link href={`/items/${data._id}`}>
                <Image className={'object-cover max-w-[65px] max-h-[65px]  min-w-[65px] min-h-[65px] '} width={65}
                       height={65}
                       alt={data.text.en.name} src={`${NEXT_PUBLIC_API}/images/items/${data.image}`}/>

            </Link>
            <ItemHover data={data} characteristics={characteristics}/>
        </li>

    )
        ;
};

export default SmallItem;
