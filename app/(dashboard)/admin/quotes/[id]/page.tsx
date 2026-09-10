import { quotesData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusStyles: Record<string, string> = {
  draft: "bg-muted text-muted-foreground border-border",
  sent: "bg-pacific-50 text-pacific-700 border-pacific-200",
  viewed: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  approved: "bg-olive-50 text-olive-800 border-olive-200",
  rejected: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
};

const currency = (n: number | null) =>
  n == null
    ? "—"
    : `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const QuoteDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const quote = quotesData.find((q) => q.id === Number(id));

  if (!quote) notFound();

  const labor =
    quote.flatAmount ??
    (quote.hourlyRate && quote.estimatedHours
      ? quote.hourlyRate * quote.estimatedHours
      : null);

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/quotes"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to quotes
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-cerulean">
              {quote.quoteNumber}
            </h1>
            <p className="mt-1 text-pacific-600">{quote.job}</p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              statusStyles[quote.status] ??
              "bg-muted text-muted-foreground border-border"
            }`}
          >
            {quote.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Subtotal
          </p>
          <p className="mt-1 text-2xl font-bold text-cerulean">
            {currency(quote.subtotal)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">Tax</p>
          <p className="mt-1 text-2xl font-bold text-pacific-700">
            {currency(quote.taxAmount)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Total
          </p>
          <p className="mt-1 text-2xl font-bold text-yarrow-700">
            {currency(quote.total)}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Line Items</h2>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Labor
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {quote.flatAmount
                ? `${currency(quote.flatAmount)} (flat)`
                : quote.hourlyRate && quote.estimatedHours
                  ? `${currency(quote.hourlyRate)}/hr × ${quote.estimatedHours} hrs = ${currency(labor)}`
                  : "—"}
            </dd>
          </div>
          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Materials
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {currency(quote.materialsCost)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Details</h2>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Customer
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {quote.customer}
            </dd>
          </div>
          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Job ID
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">{quote.jobId}</dd>
          </div>
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Valid Until
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {quote.validUntil}
            </dd>
          </div>
          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Sent Date
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {quote.sentDate ?? "Not sent"}
            </dd>
          </div>
          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Created
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {quote.createdDate} · {quote.createdBy}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default QuoteDetailsPage;
