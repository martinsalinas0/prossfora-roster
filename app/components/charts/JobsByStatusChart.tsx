const statusMeta: Record<string, { label: string; barClassName: string }> = {
  open: { label: "Open", barClassName: "bg-pacific-500" },
  needs_quote: { label: "Needs quote", barClassName: "bg-yarrow-400" },
  quote_pending: { label: "Quote pending", barClassName: "bg-yarrow-500" },
  quote_rejected: { label: "Quote rejected", barClassName: "bg-yarrow-700" },
  approved: { label: "Approved", barClassName: "bg-olive-400" },
  in_progress: { label: "In progress", barClassName: "bg-olive-600" },
  completed: { label: "Completed", barClassName: "bg-cerulean-500" },
  paid: { label: "Paid", barClassName: "bg-olive-800" },
  cancelled: { label: "Cancelled", barClassName: "bg-pacific-200" },
};

const JobsByStatusChart = ({ jobs }: { jobs: { status: string }[] }) => {
  const counts = jobs.reduce<Record<string, number>>((acc, job) => {
    acc[job.status] = (acc[job.status] ?? 0) + 1;
    return acc;
  }, {});

  const rows = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .map(([status, count]) => ({
      status,
      count,
      ...(statusMeta[status] ?? {
        label: status.replace(/_/g, " "),
        barClassName: "bg-muted-foreground",
      }),
    }));

  const max = Math.max(...rows.map((r) => r.count), 1);

  return (
    <div className="flex flex-col gap-2.5 px-5 py-4 flex-1 justify-center">
      {rows.map((row) => (
        <div key={row.status} className="flex items-center gap-3 text-xs">
          <span className="w-28 shrink-0 text-pacific-600 capitalize truncate">
            {row.label}
          </span>
          <div className="flex-1 h-3.5 rounded-sm bg-muted overflow-hidden">
            <div
              title={`${row.label}: ${row.count}`}
              className={`h-full rounded-sm ${row.barClassName}`}
              style={{ width: `${(row.count / max) * 100}%` }}
            />
          </div>
          <span className="w-5 shrink-0 text-right font-semibold text-cerulean-800">
            {row.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default JobsByStatusChart;
