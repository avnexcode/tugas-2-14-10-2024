import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryAlQuranID = (id: string) => useQuery({
    queryKey: ['al-quran'],
    queryFn: async () => {
        const response = await axiosInstance.get(`/al-quran/${id}`)
        return response.data.data
    }
})