'use client'
import {
    Table,
    TableBody,
    TableHeader,
} from "@/components/ui/table"
import { SurahType } from "@/types/al-quran"
import { useQueryAlQuran } from "@/features/al-quran"
import { AlQuranTableCaption } from "./AlQuranTableCaption"
import { AlQuranTableHead } from "./AlQuranTableHead"
import { AlQuranTableItem } from "./AlQuranTableItem"
import { AlQuranSkeleton } from "@/components/elements/al-quran"
import { RenderElements } from "@/utils"

export function AlQuranTable() {

    const { data: alQuranData, isLoading: alQuranLoading } = useQueryAlQuran()
    const surahs = alQuranData?.data

    return (
        <Table>
            <AlQuranTableCaption />
            <TableHeader>
                <AlQuranTableHead />
            </TableHeader>
            <TableBody>
                {alQuranLoading && <AlQuranSkeleton />}
                {!alQuranLoading && alQuranData && (
                    <RenderElements of={surahs} render={(surah: SurahType) => <AlQuranTableItem key={surah.surah_number} surah={surah} />} />
                )}
            </TableBody>
        </Table>

    )
}
