const statusStyles: Record<string, string> = {
  // job statuses
  open: "bg-pacific-50 text-pacific-700 border-pacific-200",
  needs_quote: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  quote_pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  in_progress: "bg-olive-50 text-olive-800 border-olive-200",
  completed: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
  cancelled: "bg-muted text-muted-foreground border-border",
  // quote / job-request statuses
  draft: "bg-muted text-muted-foreground border-border",
  sent: "bg-pacific-50 text-pacific-700 border-pacific-200",
  viewed: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  approved: "bg-olive-50 text-olive-800 border-olive-200",
  rejected: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
  quote_rejected: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
  // invoice statuses
  paid: "bg-olive-50 text-olive-800 border-olive-200",
  overdue: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
  pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  // payment statuses
  succeeded: "bg-olive-50 text-olive-800 border-olive-200",
  processed: "bg-olive-50 text-olive-800 border-olive-200",
  failed: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
  refunded: "bg-pacific-50 text-pacific-700 border-pacific-200",
  // person statuses
  active: "bg-olive-50 text-olive-800 border-olive-200",
  inactive: "bg-pacific-50 text-pacific-700 border-pacific-200",
};

const StatusBadge = ({
  status,
  className = "",
}: {
  status: string;
  className?: string;
}) => (
  <span
    className={`rounded-full px-3 py-1 text-xs font-medium border capitalize ${
      statusStyles[status] ?? "bg-muted text-muted-foreground border-border"
    } ${className}`}
  >
    {status.replace(/_/g, " ")}
  </span>
);

export default StatusBadge;
