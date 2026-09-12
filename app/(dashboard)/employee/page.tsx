import Link from "next/link";
import { employeeData, jobsData, quotesData } from "@/lib/data/mockData";
import StatusBadge from "@/app/components/StatusBadge";

// TEMPORARY: no auth yet, so the employee portal is fixed to one mock staff
// member (Paul Brennan) until real sessions exist.
const CURRENT_EMPLOYEE_ID = 3;

const currency = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

const EmployeeDashboardPage = () => {
  const employee = employeeData.find((e) => e.id === CURRENT_EMPLOYEE_ID)!;

  const myJobs = jobsData.filter((j) => j.createdBy === employee.name);
  const myQuotes = quotesData.filter((q) => q.createdBy === employee.name);
  const openJobs = myJobs.filter(
    (j) => j.status !== "completed" && j.status !== "cancelled",
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-cerulean">
            Welcome back, {employee.name.split(" ")[0]}
          </h1>
          <p className="text-pacific-600 capitalize">{employee.role}</p>
        </div>
        <Link
          href="/employee/profile"
          className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-cerulean hover:bg-cerulean-50 transition-colors w-fit"
        >
          My Profile
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Jobs Created
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
            Quotes Created
          </p>
          <p className="mt-2 text-3xl font-bold text-yarrow-700">
            {myQuotes.length}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Jobs I Created</h2>
        </div>
        {myJobs.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No jobs created yet.
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
                    {job.customer}
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
          <h2 className="font-semibold text-cerulean">Quotes I Created</h2>
        </div>
        {myQuotes.length === 0 ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">
            No quotes created yet.
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
                    {quote.customer} · {currency(quote.total)}
                  </p>
                </div>
                <StatusBadge status={quote.status} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
