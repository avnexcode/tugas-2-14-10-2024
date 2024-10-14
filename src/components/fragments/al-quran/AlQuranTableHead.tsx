import { TableHead, TableRow } from '@/components/ui/table'
import React from 'react'

export function AlQuranTableHead() {
    return (
        <TableRow>
            <TableHead className="text-left">Surah Number</TableHead>
            <TableHead>Surah Name</TableHead>
            <TableHead>Ayahs</TableHead>
            <TableHead>Revelation</TableHead>
            <TableHead className="text-right">Action</TableHead>
        </TableRow>
    )
}
