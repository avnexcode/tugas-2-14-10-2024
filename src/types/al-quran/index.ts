import { z } from 'zod'

export const surahSchema = z.object({
    surah_number: z.number(),
    surah_name: z.string(),
    english_name: z.string(),
    revelation_type: z.enum(['Meccan', 'Medinan']),
    number_of_ayahs: z.number(),
    order_of_revelation: z.number(),
    meaning: z.string(),
});

export type SurahType = z.infer<typeof surahSchema>