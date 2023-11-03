import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const useCustomSearchParams = (name)=>{
    const searchParams = useSearchParams();
    const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
    const router = useRouter();
    const pathname = usePathname();

    const setSearchParam = (value) => {
        if (!value) {
            queryParams.delete(name);
        } else {
            queryParams.set(name, value);
        }
        const search = queryParams.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    };
    return {queryParams, setSearchParam}
}
