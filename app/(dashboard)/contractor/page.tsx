import Link from "next/link";
import {
  contractorsData,
  jobsData,
  contractorInvoicesData,
} from "@/lib/data/mockData";
import StatusBadge from "@/app/components/StatusBadge";

// TEMPORARY: no auth yet, so the contractor portal is fixed to one mock
// contractor (Marcus Bell) until real sessions exist.
const CURRENT_CONTRACTOR_ID = 5;

const currency = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

const ContractorDashboardPage = () => {
  const contractor = contractorsData.find(
    (c) => c.id === CURRENT_CONTRACTOR_ID,
  )!;

  const myJobs = jobsData.filter((j) => j.contractor === contractor.name);
  const inProgressJobs = myJobs.filter((j) => j.status === "in_progress");
  const myInvoices = contractorInvoicesData.filter(
    (i) => i.contractor === contractor.name,
  );
  const pendingInvoices = myInvoices.filter((i) => i.status === "pending");

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-cerulean">
            Welcome back, {contractor.name.split(" ")[0]}
          </h1>
          {contractor.company && (
            <p className="text-pacific-600">{contractor.company}</p>
          )}
        </div>
        <Link
          href="/contractor/profile"
          className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-cerulean hover:bg-cerulean-50 transition-colors w-fit"
        >
          My Profile
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Assigned Jobs
          </p>
          <p className="mt-2 text-3xl font-bold text-cerulean">
            {myJobs.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            In Progress
          </p>
          <p className="mt-2 text-3xl font-bold text-olive-700">
            {inProgressJobs.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Pending Invoices
          </p>
          <p className="mt-2 text-3xl font-bold text-yarrow-700">
            {pendingInvoices.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Hourly Rate
          </p>
          <p className="mt-2 text-3xl font-bold text-pacific-700">
            ${contractor.hourlyRate}
            <span className="text-sm font-normal text-muted-foreground">
              /hr
            </span>
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">My Jobs</h2>
        </div>
        {myJobs.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No jobs assigned yet.
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
                    {job.customer} · {job.address}
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
          <h2 className="font-semibold text-cerulean">My Invoices</h2>
        </div>
        {myInvoices.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No invoices submitted yet.
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

export default ContractorDashboardPage;
