import { contractorInvoicesData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusStyles: Record<string, string> = {
  pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  approved: "bg-olive-50 text-olive-800 border-olive-200",
  paid: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
  rejected: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
};

const currency = (n: number | null) =>
  n == null
    ? "—"
    : `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const WorkItemsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const item = contractorInvoicesData.find((w) => w.id === Number(id));

  if (!item) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/workItems"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to work items
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-cerulean">{item.job}</h1>
            <p className="mt-1 text-pacific-600">
              {item.invoiceNumber} · {item.jobId}
            </p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              statusStyles[item.status] ??
              "bg-muted text-muted-foreground border-border"
            }`}
          >
            {item.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Pay Type
          </p>
          <p className="mt-1 text-2xl font-bold text-cerulean capitalize">
            {item.payType}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            {item.payType === "flat" ? "Flat Rate" : "Hours Worked"}
          </p>
          <p className="mt-1 text-2xl font-bold text-pacific-700">
            {item.payType === "flat"
              ? currency(item.flatRate)
              : `${item.hoursWorked} hrs`}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Total
          </p>
          <p className="mt-1 text-2xl font-bold text-yarrow-700">
            {currency(item.total)}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Details</h2>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Contractor
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {item.contractor}
            </dd>
          </div>
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Hourly Rate
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {currency(item.hourlyRate)}
            </dd>
          </div>
          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Submitted
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {item.submittedDate}
            </dd>
          </div>
          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Approved By
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {item.approvedBy ?? "Awaiting approval"}
            </dd>
          </div>
          {item.rejectionReason && (
            <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Rejection Reason
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {item.rejectionReason}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default WorkItemsDetailsPage;
