import {api} from './axios'
export const fetchAllRarity = async ()=>{
    const response = await api.get('rarity/')
    return response.data
}
