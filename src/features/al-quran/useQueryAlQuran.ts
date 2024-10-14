import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryAlQuran = () => useQuery({
    queryKey: ['alquran'],
    queryFn: async () => {
        const response = await axiosInstance.get('/al-quran?limit=15')
        return response.data.data
    }
})