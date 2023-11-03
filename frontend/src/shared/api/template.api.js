import {api} from './axios'

export const fetchAllTemplates = async () => {

    const types = await api.get('textTemplate/', )
    return types.data
}

export const createTemplate = async data => {
    const type = await api.post('textTemplate/', data)
    return type.data
}
export const updateTemplate = async data => {
    const type = await api.put('textTemplate/', data)
    return type.data
}
