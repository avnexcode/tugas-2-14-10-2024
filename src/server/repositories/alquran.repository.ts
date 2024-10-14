import alquran from '../../../public/data/al-quran.json'

export const findAll = async (filters: { name?: string, revelation?: string }, page: number = 1, limit: number = 10) => {
    let filteredData = alquran;

    if (filters.name) {
        filteredData = filteredData.filter(surah => 
            surah.surah_name.toLowerCase().includes(filters.name!.toLowerCase())
        );
    }
    if (filters.revelation) {
        filteredData = filteredData.filter(surah => 
            surah.revelation_type.toLowerCase() === filters.revelation?.toLowerCase()
        );
    }

    const totalFilteredSurahs = filteredData.length;
    // const totalFilteredAyahs = filteredData.reduce((total, surah) => total + surah.number_of_ayahs, 0);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    const total_ayahs = alquran.reduce((total, surah) => total + surah.number_of_ayahs, 0)
    const total_surahs = alquran.length

    return {
        data: paginatedData,
        meta: {
            page: page,
            limit: limit,
            total_surahs,
            total_ayahs,
            total_pages: Math.ceil(totalFilteredSurahs / limit)
        }
    }
}