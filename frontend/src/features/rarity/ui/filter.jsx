'use client'
import TypeItem from "@/entities/rarity/ui/item";
import {fetchAllRarity} from "@/shared/api/rarity.api";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import useSWR from "swr";
import {useCustomSearchParams} from "@/shared/hooks/useCustomSearchParams";

const RarityFilter = () => {
    const {data: rarities, error, isLoading} = useSWR('rarity', fetchAllRarity)

    const {queryParams, setSearchParam} = useCustomSearchParams('rarity')

    if (error || isLoading) return 'wait'
    return (
        <ul className={'mt-4 flex items-center gap-2 self-center'}>{
            rarities.map(rarity =>
                <li key={rarity._id} onClick={() => setSearchParam(rarity._id)}>
                    <TypeItem active={queryParams.get('rarity')?.toString() === rarity._id} data={rarity}/>
                </li>)
        }
        </ul>
    );
};

export default RarityFilter;
