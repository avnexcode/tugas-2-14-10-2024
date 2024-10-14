import { Skeleton } from "../../ui/skeleton";
import { TableRow, TableCell } from "@/components/ui/table";
export function AlQuranSkeleton() {
  return (
    <TableRow>
      <TableCell colSpan={5}>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
    </TableRow>
  )
}
