import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SurahType } from "@/types/al-quran"
import { DialogClose } from "@radix-ui/react-dialog"

type AlQuranDialogDetailProps = {
    surah: SurahType
}

export function AlQuranDialogDetail(props: AlQuranDialogDetailProps) {
    return (
        <Dialog>
            <DialogTrigger>
                Detail
            </DialogTrigger>
            <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-gray-800">
                        Detail Surah <span className="text-green-500">{props.surah.surah_name}</span>
                    </DialogTitle>
                    <DialogDescription className="pt-6 space-y-6 text-gray-600">
                        <p><span className="font-bold">Nomor Surah:</span> {props.surah.surah_number}</p>
                        <p><span className="font-bold">Nama Inggris:</span> {props.surah.english_name}</p>
                        <p><span className="font-bold">Jenis Wahyu:</span> {props.surah.revelation_type}</p>
                        <p><span className="font-bold">Jumlah Ayat:</span> {props.surah.number_of_ayahs}</p>
                        <p><span className="font-bold">Urutan Wahyu:</span> {props.surah.order_of_revelation}</p>
                        <p><span className="font-bold">Arti:</span> {props.surah.meaning}</p>
                    </DialogDescription>
                    <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" size={'sm'} variant="default" className='text-black'>Close</Button>
                    </DialogClose>
                </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
