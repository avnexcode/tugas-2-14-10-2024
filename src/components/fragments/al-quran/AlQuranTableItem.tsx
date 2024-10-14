import { TableCell, TableRow } from '@/components/ui/table'
import { SurahType } from '@/types/al-quran'
import React from 'react'
import { AlQuranDialogDetail } from './AlQuranDialogDetail'

type AlQuranTableItemProps = {
    surah: SurahType
}

export function AlQuranTableItem(props: AlQuranTableItemProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">{props.surah.surah_number}</TableCell>
            <TableCell className="font-medium">{props.surah.surah_name}</TableCell>
            <TableCell className="font-medium">{props.surah.number_of_ayahs}</TableCell>
            <TableCell className="font-medium">{props.surah.revelation_type}</TableCell>
            <TableCell className="text-right">
                <AlQuranDialogDetail surah={props.surah}/>
            </TableCell>
        </TableRow>
    )
}
