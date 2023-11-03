import {api} from './axios'
export const fetchAllSeasons = async ()=>{
    const types = await api.get('season/')
    return types.data
}
