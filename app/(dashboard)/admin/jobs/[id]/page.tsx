import { jobsData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusStyles: Record<string, string> = {
  open: "bg-pacific-50 text-pacific-700 border-pacific-200",
  needs_quote: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  quote_pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  in_progress: "bg-olive-50 text-olive-800 border-olive-200",
  completed: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
  cancelled: "bg-muted text-muted-foreground border-border",
};

const JobDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/jobs"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to jobs
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-cerulean">{job.title}</h1>
              <p className="mt-1 text-pacific-600">{job.jobId}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  statusStyles[job.status] ??
                  "bg-muted text-muted-foreground border-border"
                }`}
              >
                {job.status.replace(/_/g, " ")}
              </span>
              <span className="rounded-full bg-yarrow-50 px-3 py-1 text-xs font-medium text-yarrow-700 border border-yarrow-200 capitalize">
                {job.priority}
              </span>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-cerulean-800">
            {job.description}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Details</h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Customer
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.customer}
            </dd>
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Contractor
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.contractor ?? "Unassigned"}
            </dd>
          </div>

          <div className="sm:col-span-2 border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Address
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">{job.address}</dd>
          </div>

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Scheduled
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.scheduledDate
                ? `${job.scheduledDate}${
                    job.scheduledTime ? ` at ${job.scheduledTime}` : ""
                  }`
                : "Not scheduled"}
            </dd>
          </div>

          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Completed
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.completedDate ?? "—"}
            </dd>
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Pay Type
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800 capitalize">
              {job.payType ?? "—"}
            </dd>
          </div>

          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Hours Worked
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.hoursWorked ?? "—"}
            </dd>
          </div>

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Created
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.createdDate} · {job.createdBy}
            </dd>
          </div>

          {job.cancellationReason && (
            <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Cancellation Reason
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {job.cancellationReason}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default JobDetailPage;
