import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { DateTime } from "luxon";

export const streamColumns: ColumnDef<IStream>[] = [
  {
    accessorKey: "dateStreamed",
    cell: ({ row }) => {
      const date = DateTime.fromISO(row.original.dateStreamed as string);
      return (
        <div className="flex items-center justify-center font-medium">
          {date.toRelative({ base: DateTime.now() })}
        </div>
      );
    },
    header: ({ column }) => {
      const iconMap = {
        desc: <ArrowUp className="w-4 h-4 text-primary" />,
        asc: <ArrowDown className="w-4 h-4 text-primary" />,
        default: <ArrowUpDown className="w-4 h-4 opacity-50" />,
      };
      const icon =
        iconMap[column.getIsSorted() as keyof typeof iconMap] ??
        iconMap.default;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted"
        >
          Date Streamed
          {icon}
        </Button>
      );
    },
  },
  {
    accessorKey: "songName",
    header: "Song Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("songName")}</div>
    ),
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "streamCount",
    header: "Stream Count",
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
];
