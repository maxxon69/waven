import useSWR from "swr";
import {fetchOneItem} from "@/shared/api/item.api";
import {findItemCharacteristics} from "@/shared/api/item-characteristic.api";

export const useFindFullItem = (id) => {
    const {data, isLoading, error} = useSWR(`item:${id}`, () => fetchOneItem(id))
    const {
        data: characteristics,
        isLoading: isLoadingCharacteristics,
        error: errorCharacteristics
    } = useSWR(`characteristics:${id}`, () => findItemCharacteristics(id))

    const isAllLoaded = !isLoading && !isLoadingCharacteristics
    const notErrors = !error && !errorCharacteristics
    const isSuccess = isAllLoaded && notErrors
    const errors = {error, errorCharacteristics}
    return {data, characteristics, isSuccess, errors}
}
