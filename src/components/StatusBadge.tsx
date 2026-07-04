import { cn } from "@/lib/utils";
import { translateStatus, useI18n } from "@/lib/i18n";

type Status =
  | "Active"
  | "Expiring soon"
  | "Expired"
  | "Unpaid"
  | "Paid"
  | "Late"
  | "Monthly"
  | "Annual"
  | "Paused"
  | "Ended"
  | "Archived"
  | "Operational"
  | "Maintenance"
  | "Out of service";

const styles: Record<Status, string> = {
  Active: "bg-accent-green/15 text-accent-green",
  "Expiring soon": "bg-accent-yellow/20 text-accent-yellow",
  Expired: "bg-accent-red/15 text-accent-red",
  Unpaid: "bg-accent-red/15 text-accent-red",
  Paid: "bg-accent-green/15 text-accent-green",
  Late: "bg-accent-red/15 text-accent-red",
  Monthly: "bg-accent-blue/15 text-accent-blue",
  Annual: "bg-accent-green/15 text-accent-green",
  Paused: "bg-slate-100 text-slate-700 dark:bg-slate-500/15 dark:text-slate-400",
  Ended: "bg-slate-100 text-slate-700 dark:bg-slate-500/15 dark:text-slate-400",
  Archived: "bg-slate-100 text-slate-700 dark:bg-slate-500/15 dark:text-slate-400",
  Operational: "bg-accent-green/15 text-accent-green",
  Maintenance: "bg-accent-yellow/20 text-accent-yellow",
  "Out of service": "bg-accent-red/15 text-accent-red",
};

export function StatusBadge({ status }: { status: Status | string }) {
  const { locale } = useI18n();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        styles[status as Status] ?? "bg-slate-100 text-slate-700",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {translateStatus(status, locale)}
    </span>
  );
}
