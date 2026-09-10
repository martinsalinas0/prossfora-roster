import { customerInvoicesData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusStyles: Record<string, string> = {
  sent: "bg-pacific-50 text-pacific-700 border-pacific-200",
  viewed: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  paid: "bg-olive-50 text-olive-800 border-olive-200",
  overdue: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
};

const currency = (n: number | null) =>
  n == null
    ? "—"
    : `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const InvoiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const invoice = customerInvoicesData.find((i) => i.id === Number(id));

  if (!invoice) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/invoices"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to invoices
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-cerulean">
              {invoice.invoiceNumber}
            </h1>
            <p className="mt-1 text-pacific-600">{invoice.job}</p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              statusStyles[invoice.status] ??
              "bg-muted text-muted-foreground border-border"
            }`}
          >
            {invoice.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Subtotal
          </p>
          <p className="mt-1 text-2xl font-bold text-cerulean">
            {currency(invoice.subtotal)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">Tax</p>
          <p className="mt-1 text-2xl font-bold text-pacific-700">
            {currency(invoice.taxAmount)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Total
          </p>
          <p className="mt-1 text-2xl font-bold text-yarrow-700">
            {currency(invoice.total)}
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
              Customer
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {invoice.customer}
            </dd>
          </div>
          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Job ID
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {invoice.jobId}
            </dd>
          </div>
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Sent Date
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {invoice.sentDate ?? "Not sent"}
            </dd>
          </div>
          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Due Date
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {invoice.dueDate}
            </dd>
          </div>
          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Paid Date
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {invoice.paidDate ?? "Unpaid"}
            </dd>
          </div>
          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Payment Method
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800 capitalize">
              {invoice.paymentMethod ?? "—"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;
