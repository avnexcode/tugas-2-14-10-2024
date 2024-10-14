import * as repository from '../repositories/alquran.repository'
export const getAll = async (filters: { name?: string, revelation?: string }, page = 1, limit = 10) => {
    const data = await repository.findAll(filters, page, limit)
    return data
}