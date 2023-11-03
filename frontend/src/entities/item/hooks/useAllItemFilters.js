import useSWR from "swr";
import {fetchAllSeasons} from "@/shared/api/seasons.api";
import {fetchAllTypes} from "@/shared/api/types.api";
import {fetchAllRarity} from "@/shared/api/rarity.api";
import {fetchAllTemplates} from "@/shared/api/template.api";

export const useAllItemFilters = () => {
    const {data: seasons, error: errorSeasons, isLoading: isLoadingSeasons} = useSWR('seasons', fetchAllSeasons)
    const {
        data: templates,
        error: errorTemplates,
        isLoading: isLoadingTemplates
    } = useSWR('templates', fetchAllTemplates)
    const {data: types, error: errorTypes, isLoading: isLoadingTypes} = useSWR('types', fetchAllTypes)
    const {data: rarities, error: errorRarities, isLoading: isLoadingRarities} = useSWR('rarities', fetchAllRarity)
    const errors = {errorSeasons, errorRarities, errorTypes, errorTemplates}
    const isAllLoaded = !isLoadingSeasons && !isLoadingTypes && !isLoadingRarities && !isLoadingTemplates
    const isNotErrors = !errorSeasons && !errorRarities && !errorTypes
    const isSuccess = isAllLoaded && isNotErrors
    return {seasons, templates, types, rarities, errors, isSuccess}

}
