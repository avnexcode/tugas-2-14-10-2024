import * as Repository from '../repositories/alquran.repository'

export const getAll = async (filters: { name?: string, revelation?: string }, page = 1, limit = 10) => {
    const data = await Repository.findMany(filters, page, limit)
    return data
}

export const getByID = async(id: string) => {
    const data = await Repository.findOne(id)
    return data
}