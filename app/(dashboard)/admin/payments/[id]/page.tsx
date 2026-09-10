import { paymentsData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusStyles: Record<string, string> = {
  succeeded: "bg-olive-50 text-olive-800 border-olive-200",
  processed: "bg-olive-50 text-olive-800 border-olive-200",
  pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  failed: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
  refunded: "bg-pacific-50 text-pacific-700 border-pacific-200",
};

const currency = (n: number | null) =>
  n == null
    ? "—"
    : `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const PaymentsDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const payment = paymentsData.find((p) => p.id === Number(id));

  if (!payment) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/payments"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to payments
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-cerulean">
              {payment.paymentId}
            </h1>
            <p className="mt-1 text-pacific-600">
              {currency(payment.amount)} · {payment.date}
            </p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              statusStyles[payment.status] ??
              "bg-muted text-muted-foreground border-border"
            }`}
          >
            {payment.status}
          </span>
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
              {payment.customer}
            </dd>
          </div>
          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Invoice
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {payment.invoiceNumber}
            </dd>
          </div>
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Method
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800 capitalize">
              {payment.method === "card"
                ? `${payment.cardBrand} •••• ${payment.cardLast4}`
                : "Bank transfer"}
            </dd>
          </div>
          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Refunded
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {currency(payment.refundedAmount)}
            </dd>
          </div>
          {payment.failureReason && (
            <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Failure Reason
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {payment.failureReason}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default PaymentsDetailPage;
