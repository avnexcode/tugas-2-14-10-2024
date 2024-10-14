import { Button } from "@/components/ui/button"
import { SurahType } from "@/types/al-quran"
import { DialogClose } from "@radix-ui/react-dialog"
import AlQuranDialogDetailInner from "./AlQuranDialogDetailInner"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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
                        <AlQuranDialogDetailInner surah={props.surah}/>
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
