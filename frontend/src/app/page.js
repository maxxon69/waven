import TypesFilter from '@/features/types/ui/filter'
import RarityFilter from "@/features/rarity/ui/filter";
import UIButton from "@/shared/uikit/UIButton";
import Link from 'next/link'
import SmallItemsList from "@/entities/item/ui/small-items-list";

export default function Home({searchParams}) {
    console.log(searchParams)
    return (
        <>
            <div className={'flex w-full max-w-2xl mx-auto mt-4'}>
                <ul className={'flex flex-col gap-2'}>
                    <li>
                        <Link href={'/items/new'}>
                            <UIButton>
                                add item
                            </UIButton>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/templates?language=en'}>
                            <UIButton>
                                templates
                            </UIButton>
                        </Link>
                    </li>
                </ul>
                <div className={'ml-14 flex flex-col '}>
                    <TypesFilter/>
                    <RarityFilter/>
                </div>

            </div>
            <SmallItemsList searchParams={searchParams}/>
        </>

    )
}
