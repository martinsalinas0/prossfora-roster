"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import Table from "@/app/components/Table";
import StatusBadge from "@/app/components/StatusBadge";
import { jobRequestsData } from "@/lib/data/mockData";

const priorityStyles: Record<string, string> = {
  low: "text-pacific-500",
  medium: "text-cerulean-700",
  high: "text-yarrow-700 font-semibold",
  urgent: "text-yarrow-700 font-semibold",
};

const columns = [
  { header: "Request", accessor: "request" },
  {
    header: "Customer",
    accessor: "customer",
    className: "hidden md:table-cell",
  },
  {
    header: "Submitted By",
    accessor: "submittedBy",
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

const renderRow = (item: (typeof jobRequestsData)[number]) => (
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
    <td className="hidden md:table-cell">{item.customer}</td>
    <td className="hidden lg:table-cell">{item.submittedBy}</td>
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
        href={`/admin/job-requests/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const JobRequestsListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = jobRequestsData.filter((request) => {
    const q = searchQuery.toLowerCase();
    return (
      request.title.toLowerCase().includes(q) ||
      request.customer.toLowerCase().includes(q) ||
      request.requestId.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Job Requests
        </h1>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search job requests"
        />
      </div>

      <Table columns={columns} renderRow={renderRow} data={filteredRequests} />
    </div>
  );
};

export default JobRequestsListPage;
