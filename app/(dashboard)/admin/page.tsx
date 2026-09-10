"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { jobsData } from "@/lib/data/mockData";

const AdminPage = () => {
  const jobCount = jobsData.length;

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
          <p className="mt-2 text-3xl font-bold text-olive-700">8</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Pending Invoices
          </p>
          <p className="mt-2 text-3xl font-bold text-yarrow-700">4</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Revenue MTD
          </p>
          <p className="mt-2 text-3xl font-bold text-pacific-700">$18,240</p>
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
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Chart</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 h-[320px] overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col">
              <div className="border-b border-border bg-olive-50/60 px-5 py-3">
                <p className="text-sm font-semibold text-cerulean">
                  Jobs This Week
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Chart</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[380px] overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col">
            <div className="border-b border-border bg-pacific-50/60 px-5 py-3">
              <p className="text-sm font-semibold text-cerulean">
                Revenue Over Time
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Chart</p>
            </div>
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
