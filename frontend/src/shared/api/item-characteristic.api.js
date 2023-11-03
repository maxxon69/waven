import {api} from './axios'

export const fetchAllItemCharacteristics = async (params) => {
    const types = await api.get('item-characteristic/', {params})
    return types.data
}

export const findItemCharacteristics = async (id, templates=false) => {
    console.log({id})
    const type = await api.get(`item-characteristic/find-by-item/${id}`, {params:{templates}})
    return type.data
}

export const fetchOneItemCharacteristic = async (id) => {
    const types = await api.get(`item-characteristic/${id}`)
    return types.data
}

export const createItemCharacteristic = async data => {
    const type = await api.post('item-characteristic/', data)
    return type.data
}
export const createManyItemCharacteristic = async data => {
    console.log({data})
    const type = await api.post('item-characteristic/many', data)
    return type.data
}


export const deleteManyItemCharacteristic = async data => {
    console.log({data})
    const type = await api.post('item-characteristic/delete/many', data)
    return type.data
}


export const updateManyItemCharacteristic = async data => {
    console.log({data})
    const type = await api.put('item-characteristic/many', data)
    return type.data
}

