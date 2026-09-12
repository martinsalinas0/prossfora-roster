import Link from "next/link";
import { notFound } from "next/navigation";
import {
  jobsData,
  quotesData,
  customerInvoicesData,
} from "@/lib/data/mockData";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) notFound();

  const quote = quotesData.find((q) => q.jobId === job.jobId);
  const invoice = customerInvoicesData.find((i) => i.jobId === job.jobId);

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/jobs"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to jobs
      </Link>

      {/* HEADER */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-cerulean">{job.title}</h1>
              <p className="mt-2 text-sm text-pacific-600">{job.description}</p>
            </div>

            <span className="shrink-0 rounded-full bg-yarrow-50 px-3 py-1 text-xs font-medium text-yarrow-700 border border-yarrow-200">
              {job.jobId}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cerulean-50 px-3 py-1 text-xs font-medium text-cerulean-700 border border-cerulean-200 capitalize">
              {job.status.replace("_", " ")}
            </span>
            <span className="rounded-full bg-olive-50 px-3 py-1 text-xs font-medium text-olive-800 border border-olive-200 capitalize">
              {job.priority}
            </span>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Job Details</h2>
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

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Status
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800 capitalize">
              {job.status.replace("_", " ")}
            </dd>
          </div>

          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Scheduled
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.scheduledDate ?? "Not scheduled"}
            </dd>
          </div>
        </dl>
      </div>

      {/* MONEY */}
      {(quote || invoice) && (
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-olive-50/60 px-6 py-4">
            <h2 className="font-semibold text-cerulean">Billing</h2>
          </div>

          <div className="divide-y divide-border">
            {quote && (
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-pacific-500">
                    Quote
                  </p>
                  <p className="mt-1 font-medium text-cerulean-800">
                    {quote.quoteNumber}
                  </p>
                </div>
                <p className="text-xl font-bold text-yarrow-700">
                  ${quote.total}
                </p>
              </div>
            )}

            {invoice && (
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-pacific-500">
                    Invoice
                  </p>
                  <p className="mt-1 font-medium text-cerulean-800">
                    {invoice.invoiceNumber}
                  </p>
                </div>
                <span className="rounded-full bg-pacific-50 px-3 py-1 text-xs font-medium text-pacific-700 border border-pacific-200 capitalize">
                  {invoice.status}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
