import {api} from './axios'
export const fetchAllTypes = async ()=>{
    const types = await api.get('type/')
    return types.data
}
