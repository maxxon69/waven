import {api} from './axios'

export const fetchAllItems = async (params) => {
    const types = await api.get('item/', {params})
    return types.data
}

export const fetchOneItem = async (id) => {
    const types = await api.get(`item/${id}`)
    return types.data
}

export const createItem = async data => {
    const type = await api.post('item/', data)
    return type.data
}

export const updateItem = async data => {
    const type = await api.put('item/', data)
    return type.data
}
