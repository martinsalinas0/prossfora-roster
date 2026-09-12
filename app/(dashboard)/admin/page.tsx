"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  jobsData,
  jobRequestsData,
  customerInvoicesData,
  paymentsData,
} from "@/lib/data/mockData";
import JobsByStatusChart from "@/app/components/charts/JobsByStatusChart";
import RevenueOverTimeChart from "@/app/components/charts/RevenueOverTimeChart";

const currency = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

const AdminPage = () => {
  const jobCount = jobsData.length;

  const openRequests = jobRequestsData.filter(
    (r) => r.status === "pending",
  ).length;

  const pendingInvoices = customerInvoicesData.filter(
    (i) => i.status !== "paid" && i.status !== "draft",
  ).length;

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const revenueMTD = paymentsData
    .filter((p) => p.status === "succeeded" || p.status === "processed")
    .filter((p) => {
      const [year, month] = p.date.split("-").map(Number);
      return year === nowYear && month === nowMonth;
    })
    .reduce((sum, p) => sum + p.amount, 0);

  // "This week" is anchored to the most recent job in the data rather than
  // the real clock, so the stat stays meaningful regardless of when this
  // prototype is viewed.
  const latestCreated = jobsData.reduce(
    (latest, j) => (j.createdDate > latest ? j.createdDate : latest),
    jobsData[0]?.createdDate ?? "",
  );
  const weekEnd = new Date(`${latestCreated}T00:00:00`);
  const weekStart = new Date(weekEnd);
  weekStart.setDate(weekStart.getDate() - 6);
  const jobsThisWeek = jobsData.filter((j) => {
    const d = new Date(`${j.createdDate}T00:00:00`);
    return d >= weekStart && d <= weekEnd;
  }).length;

  return (
    <div className="p-4 mt-3 space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Total Jobs
          </p>
          <p className="mt-2 text-3xl font-bold text-cerulean">{jobCount}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Open Requests
          </p>
          <p className="mt-2 text-3xl font-bold text-olive-700">
            {openRequests}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Pending Invoices
          </p>
          <p className="mt-2 text-3xl font-bold text-yarrow-700">
            {pendingInvoices}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Revenue MTD
          </p>
          <p className="mt-2 text-3xl font-bold text-pacific-700">
            {currency(revenueMTD)}
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* LEFT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 h-[320px] overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col">
              <div className="border-b border-border bg-cerulean-50/60 px-5 py-3">
                <p className="text-sm font-semibold text-cerulean">
                  Jobs by Status
                </p>
              </div>
              <JobsByStatusChart jobs={jobsData} />
            </div>

            <div className="w-full sm:w-1/2 h-[320px] overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col">
              <div className="border-b border-border bg-olive-50/60 px-5 py-3">
                <p className="text-sm font-semibold text-cerulean">
                  Jobs This Week
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-1">
                <p className="text-4xl font-bold text-olive-700">
                  {jobsThisWeek}
                </p>
                <p className="text-xs text-muted-foreground">
                  jobs created in the most recent 7-day span
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[380px] overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col">
            <div className="border-b border-border bg-pacific-50/60 px-5 py-3">
              <p className="text-sm font-semibold text-cerulean">
                Revenue Over Time
              </p>
            </div>
            <RevenueOverTimeChart payments={paymentsData} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-cerulean-50/60 px-5 py-3">
              <p className="text-sm font-semibold text-cerulean">Calendar</p>
            </div>
            <div className="p-4">
              <Calendar />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-yarrow-50/60 px-5 py-3">
              <p className="text-sm font-semibold text-cerulean">
                Recent Activity
              </p>
            </div>
            <ul className="divide-y divide-border">
              <li className="px-5 py-3">
                <p className="text-sm text-cerulean-800">Quote approved</p>
                <p className="text-xs text-pacific-500">Q-2026-1003</p>
              </li>
              <li className="px-5 py-3">
                <p className="text-sm text-cerulean-800">Payment received</p>
                <p className="text-xs text-pacific-500">INV-2026-2004</p>
              </li>
              <li className="px-5 py-3">
                <p className="text-sm text-cerulean-800">New job request</p>
                <p className="text-xs text-pacific-500">Water heater leaking</p>
              </li>
              <li className="px-5 py-3">
                <p className="text-sm text-cerulean-800">Invoice overdue</p>
                <p className="text-xs text-pacific-500">INV-2026-2009</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
