"use client";

import SearchBar from "@/app/components/SearchBar";
import Table from "@/app/components/Table";
import { customerInvoicesData } from "@/lib/data/mockData";
import Link from "next/link";
import { useState } from "react";

const statusStyles: Record<string, string> = {
  sent: "bg-pacific-50 text-pacific-700 border-pacific-200",
  viewed: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  paid: "bg-olive-50 text-olive-800 border-olive-200",
  overdue: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
};

const currency = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const columns = [
  { header: "Invoice", accessor: "invoice" },
  { header: "Job", accessor: "job", className: "hidden md:table-cell" },
  {
    header: "Customer",
    accessor: "customer",
    className: "hidden lg:table-cell",
  },
  { header: "Total", accessor: "total", className: "hidden md:table-cell" },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden lg:table-cell",
  },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: any) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="p-4">
      <h3 className="font-semibold">{item.invoiceNumber}</h3>
      <p className="text-xs text-muted-foreground">{item.jobId}</p>
    </td>
    <td className="hidden md:table-cell">{item.job}</td>
    <td className="hidden lg:table-cell">{item.customer}</td>
    <td className="hidden md:table-cell font-medium">{currency(item.total)}</td>
    <td className="hidden lg:table-cell">{item.dueDate}</td>
    <td>
      <span
        className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${
          statusStyles[item.status] ??
          "bg-muted text-muted-foreground border-border"
        }`}
      >
        {item.status}
      </span>
    </td>
    <td>
      <Link
        href={`/admin/invoices/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const CustomerInvoicesForAdminPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const filteredContractors = contractorsData.filter((contractor) => {
  //   const q = searchQuery.toLowerCase();
  //   return (
  //     contractor.name.toLowerCase().includes(q) ||
  //     contractor.email.toLowerCase().includes(q) ||
  //     contractor.phone.toLowerCase().includes(q) ||
  //     contractor.company?.toLowerCase().includes(q)
  //   );
  // });

  const filteredInvoices = customerInvoicesData.filter((invoice) => {
    const q = searchQuery.toLowerCase();
    return (
      invoice.invoiceNumber.includes(q) ||
      invoice.customer.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Customer Invoices
        </h1>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={"Search Invoices"}
        />
      </div>

      <Table columns={columns} renderRow={renderRow} data={filteredInvoices} />
    </div>
  );
};

export default CustomerInvoicesForAdminPage;
