import { TableCell, TableRow } from "@/components/ui/table";
import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  colSpan: number;
  message: string;
  icon?: LucideIcon;
};

export function EmptyState({ colSpan, message, icon: Icon }: EmptyStateProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="py-10 text-center text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          {Icon && <Icon className="h-8 w-8 opacity-40" />}
          <span>{message}</span>
        </div>
      </TableCell>
    </TableRow>
  );
}
