import Link from "next/link";
import {
  customersData,
  jobsData,
  quotesData,
  customerInvoicesData,
} from "@/lib/data/mockData";
import StatusBadge from "@/app/components/StatusBadge";

// TEMPORARY: no auth yet, so the customer portal is fixed to one mock
// customer (James Delgado) until real sessions exist.
const CURRENT_CUSTOMER_ID = 1;

const currency = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

const CustomerDashboardPage = () => {
  const customer = customersData.find((c) => c.id === CURRENT_CUSTOMER_ID)!;

  const myJobs = jobsData.filter((j) => j.customer === customer.name);
  const openJobs = myJobs.filter(
    (j) => j.status !== "completed" && j.status !== "cancelled",
  );
  const myQuotes = quotesData.filter((q) => q.customer === customer.name);
  const pendingQuotes = myQuotes.filter(
    (q) => q.status === "sent" || q.status === "viewed",
  );
  const myInvoices = customerInvoicesData.filter(
    (i) => i.customer === customer.name,
  );
  const balanceDue = myInvoices
    .filter((i) => i.status !== "paid")
    .reduce((sum, i) => sum + i.total, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-cerulean">
            Welcome back, {customer.name.split(" ")[0]}
          </h1>
          <p className="text-pacific-600">Customer since {customer.since}</p>
        </div>
        <Link
          href="/customer/profile"
          className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-cerulean hover:bg-cerulean-50 transition-colors w-fit"
        >
          My Profile
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Total Jobs
          </p>
          <p className="mt-2 text-3xl font-bold text-cerulean">
            {myJobs.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Open Jobs
          </p>
          <p className="mt-2 text-3xl font-bold text-olive-700">
            {openJobs.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Quotes Awaiting Review
          </p>
          <p className="mt-2 text-3xl font-bold text-yarrow-700">
            {pendingQuotes.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Balance Due
          </p>
          <p className="mt-2 text-3xl font-bold text-pacific-700">
            {currency(balanceDue)}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">My Jobs</h2>
        </div>
        {myJobs.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No jobs yet.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {myJobs.map((job) => (
              <li
                key={job.id}
                className="px-6 py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-medium text-cerulean-800">
                    {job.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {job.contractor ?? "Unassigned"}
                  </p>
                </div>
                <StatusBadge status={job.status} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">My Quotes</h2>
        </div>
        {myQuotes.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No quotes yet.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {myQuotes.map((quote) => (
              <li
                key={quote.id}
                className="px-6 py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-medium text-cerulean-800">
                    {quote.job}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {quote.quoteNumber} · {currency(quote.total)}
                  </p>
                </div>
                <StatusBadge status={quote.status} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">My Invoices</h2>
        </div>
        {myInvoices.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No invoices yet.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {myInvoices.map((invoice) => (
              <li
                key={invoice.id}
                className="px-6 py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-medium text-cerulean-800">
                    {invoice.job}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {invoice.invoiceNumber} · {currency(invoice.total)}
                  </p>
                </div>
                <StatusBadge status={invoice.status} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboardPage;
