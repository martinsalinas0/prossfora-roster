import Table from "@/app/components/Table";
import { contractorInvoicesData } from "@/lib/data/mockData";
import Link from "next/link";

const statusStyles: Record<string, string> = {
  pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  approved: "bg-olive-50 text-olive-800 border-olive-200",
  paid: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
  rejected: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
};

const currency = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const rate = (item: any) =>
  item.payType === "flat"
    ? `${currency(item.flatRate)} flat`
    : `${currency(item.hourlyRate)}/hr × ${item.hoursWorked} hrs`;

const columns = [
  { header: "Work Item", accessor: "workItem" },
  { header: "Contractor", accessor: "contractor", className: "hidden md:table-cell" },
  { header: "Pay", accessor: "pay", className: "hidden lg:table-cell" },
  { header: "Submitted", accessor: "submitted", className: "hidden lg:table-cell" },
  { header: "Total", accessor: "total", className: "hidden md:table-cell" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: any) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="p-4">
      <h3 className="font-semibold">{item.job}</h3>
      <p className="text-xs text-muted-foreground">
        {item.invoiceNumber} · {item.jobId}
      </p>
    </td>
    <td className="hidden md:table-cell">{item.contractor}</td>
    <td className="hidden lg:table-cell">{rate(item)}</td>
    <td className="hidden lg:table-cell">{item.submittedDate}</td>
    <td className="hidden md:table-cell font-medium">{currency(item.total)}</td>
    <td>
      <span
        className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${
          statusStyles[item.status] ?? "bg-muted text-muted-foreground border-border"
        }`}
      >
        {item.status}
      </span>
    </td>
    <td>
      <Link
        href={`/admin/workItems/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const WorkItemsListPageForAdmin = () => {
  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Contractor Work Items
        </h1>
      </div>

      <Table
        columns={columns}
        renderRow={renderRow}
        data={contractorInvoicesData}
      />
    </div>
  );
};

export default WorkItemsListPageForAdmin;
