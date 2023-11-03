'use client'
import TypeItem from "@/entities/types/ui/item";
import {fetchAllTypes} from "@/shared/api/types.api";
import useSWR from "swr";
import {useCustomSearchParams} from "@/shared/hooks/useCustomSearchParams";

const Filter =  () => {
    const {data: types, error, isLoading} = useSWR('types', fetchAllTypes)

  const {queryParams, setSearchParam} = useCustomSearchParams('type')
    if(error || isLoading) return 'wait'
    return (
        <ul className={'flex items-center gap-2 self-center'}>{
            types.map(type =>
                <li key={type._id} onClick={() => setSearchParam(type._id)}>
                    <TypeItem active={queryParams.get('type')?.toString() === type._id} data={type}/>
                </li>)
        }
        </ul>
    );
};

export default Filter;
