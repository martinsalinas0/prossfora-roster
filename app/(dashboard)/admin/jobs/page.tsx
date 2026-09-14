"use client";

import SearchBar from "@/app/components/SearchBar";
import StatusBadge from "@/app/components/StatusBadge";
import Table from "@/app/components/Table";
import { jobsData } from "@/lib/data/mockData";
import Link from "next/link";
import { useState } from "react";

const priorityStyles: Record<string, string> = {
  low: "text-pacific-500",
  medium: "text-cerulean-700",
  high: "text-yarrow-700 font-semibold",
  urgent: "text-yarrow-700 font-semibold",
};

const statusFilters = [
  "all",
  ...Array.from(new Set(jobsData.map((job) => job.status))),
];

const columns = [
  { header: "Job", accessor: "job" },
  { header: "Job ID", accessor: "jobId", className: "hidden md:table-cell" },
  {
    header: "Customer",
    accessor: "customer",
    className: "hidden md:table-cell",
  },
  {
    header: "Contractor",
    accessor: "contractor",
    className: "hidden lg:table-cell",
  },
  {
    header: "Priority",
    accessor: "priority",
    className: "hidden lg:table-cell",
  },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: (typeof jobsData)[number]) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="p-4">
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-xs text-muted-foreground line-clamp-1">
        {item.address}
      </p>
    </td>
    <td className="hidden md:table-cell">{item.jobId}</td>
    <td className="hidden md:table-cell">{item.customer}</td>
    <td className="hidden lg:table-cell">
      {item.contractor ?? (
        <span className="text-muted-foreground">Unassigned</span>
      )}
    </td>
    <td className="hidden lg:table-cell">
      <span className={priorityStyles[item.priority] ?? ""}>
        {item.priority}
      </span>
    </td>
    <td>
      <StatusBadge status={item.status} />
    </td>
    <td>
      <Link
        href={`/admin/jobs/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const JobsListPageForAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJobs = jobsData.filter((job) => {
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      job.title.toLowerCase().includes(q) ||
      job.contractor?.toLowerCase().includes(q) ||
      job.customer.toLowerCase().includes(q) ||
      job.jobId.toLowerCase().includes(q);
    const matchesStatus =
      statusFilter === "all" || job.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="hidden md:block text-lg font-semibold">All Jobs</h1>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-full ring-[1.5px] ring-input px-3 py-1.5 bg-card text-sm capitalize outline-none focus:ring-2 focus:ring-cerulean-400"
          >
            {statusFilters.map((status) => (
              <option key={status} value={status} className="capitalize">
                {status === "all" ? "All statuses" : status.replace(/_/g, " ")}
              </option>
            ))}
          </select>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Seach Jobs"
          />
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={filteredJobs} />
    </div>
  );
};

export default JobsListPageForAdmin;
