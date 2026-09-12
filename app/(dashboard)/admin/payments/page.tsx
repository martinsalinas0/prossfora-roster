"use client";

import SearchBar from "@/app/components/SearchBar";
import Table from "@/app/components/Table";
import { paymentsData } from "@/lib/data/mockData";
import Link from "next/link";
import { useState } from "react";

const statusStyles: Record<string, string> = {
  succeeded: "bg-olive-50 text-olive-800 border-olive-200",
  processed: "bg-olive-50 text-olive-800 border-olive-200",
  pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  failed: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
  refunded: "bg-pacific-50 text-pacific-700 border-pacific-200",
};

const currency = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const method = (item: any) =>
  item.method === "card"
    ? `${item.cardBrand ?? "card"} •••• ${item.cardLast4 ?? ""}`.trim()
    : "Bank transfer";

const columns = [
  { header: "Payment", accessor: "payment" },
  { header: "Invoice", accessor: "invoice", className: "hidden md:table-cell" },
  {
    header: "Customer",
    accessor: "customer",
    className: "hidden lg:table-cell",
  },
  { header: "Method", accessor: "method", className: "hidden lg:table-cell" },
  { header: "Amount", accessor: "amount", className: "hidden md:table-cell" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: any) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="p-4">
      <h3 className="font-semibold">{item.paymentId}</h3>
      <p className="text-xs text-muted-foreground">{item.date}</p>
    </td>
    <td className="hidden md:table-cell">{item.invoiceNumber}</td>
    <td className="hidden lg:table-cell">{item.customer}</td>
    <td className="hidden lg:table-cell capitalize">{method(item)}</td>
    <td className="hidden md:table-cell font-medium">
      {currency(item.amount)}
    </td>
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
        href={`/admin/payments/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const PaymentsListPageForAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterPaymments = paymentsData.filter((payment) => {
    const q = searchQuery.toLowerCase();
    return (
      payment.customer.toLowerCase().includes(q) ||
      payment.invoiceNumber.toLowerCase().includes(q) ||
      payment.paymentId.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Payments</h1>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search Payments"
        />
      </div>

      <Table columns={columns} renderRow={renderRow} data={filterPaymments} />
    </div>
  );
};

export default PaymentsListPageForAdmin;
