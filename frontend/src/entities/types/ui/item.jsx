import Image from 'next/image'
import {clsx} from "clsx";

const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API
const TypeItem = ({data, active}) => {
    const className = clsx('cursor-pointer w-[55px] h-[55px] border-white bg-dark p-0.5 rounded border-2', !active && 'opacity-20')
    return (
        <Image src={`${NEXT_PUBLIC_API}${data.img}`} width={48} height={48} className={className}
               alt={data.text.en.name}/>
    );
};

export default TypeItem;
