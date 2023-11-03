import React from 'react';
import {substituteValues} from "@/shared/utils/templates.utils";
import {sanitize} from "isomorphic-dompurify";
import Image from "next/image";
import {bonusImages} from "@/shared/utils/bonuses";

const ItemHover = ({data, characteristics}) => {
    return (
        <div className={'group-hover:block hidden top-[66px] p-1 absolute w-72 bg-white rounded-lg'}>
            <h3 className={'text-center italic font-bold text-lg'}>{data.text.en.name}</h3>
            <ul className={'flex flex-col items-center bg-dark px-3 py-2 gap-1'}>
                {characteristics.map((c, i) => {
                        const text = substituteValues(
                            {template: c.template.text.en.html, values: {value: c.value}}
                        )
                        const html = sanitize(text)
                        return (

                            <li key={i} className={'relative bg-darkgray text-white w-full py-2 px-3 rounded-sm text-sm'}
                            >
                                <Image alt={c.bonus} className={'absolute left-[-6px] top-[50%] translate-y-[-50%] inline'}
                                       src={bonusImages[c.bonus]} width={14}/>
                                {c.deck && <div className={''}>Deck ({c.deck})</div>}
                                <span dangerouslySetInnerHTML={{__html: html}}></span>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>

    );
};

export default ItemHover;
