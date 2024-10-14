import { SurahType } from '@/types/al-quran'
import React from 'react'

type AlQuranDialogDetailInnerProps = {
    surah: SurahType
}

export default function AlQuranDialogDetailInner(props: AlQuranDialogDetailInnerProps) {
    return (
        <>
            <p><span className="font-bold">Nomor Surah:</span> {props.surah.surah_number}</p>
            <p><span className="font-bold">Nama Inggris:</span> {props.surah.english_name}</p>
            <p><span className="font-bold">Jenis Wahyu:</span> {props.surah.revelation_type}</p>
            <p><span className="font-bold">Jumlah Ayat:</span> {props.surah.number_of_ayahs}</p>
            <p><span className="font-bold">Urutan Wahyu:</span> {props.surah.order_of_revelation}</p>
            <p><span className="font-bold">Arti:</span> {props.surah.meaning}</p>
        </>
    )
}
