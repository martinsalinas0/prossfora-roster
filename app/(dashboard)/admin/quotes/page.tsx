import Table from "@/app/components/Table";
import { quotesData } from "@/lib/data/mockData";
import Link from "next/link";

const statusStyles: Record<string, string> = {
  draft: "bg-muted text-muted-foreground border-border",
  sent: "bg-pacific-50 text-pacific-700 border-pacific-200",
  viewed: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  approved: "bg-olive-50 text-olive-800 border-olive-200",
  rejected: "bg-yarrow-50 text-yarrow-800 border-yarrow-300",
};

const currency = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const columns = [
  { header: "Quote", accessor: "quote" },
  { header: "Job", accessor: "job", className: "hidden md:table-cell" },
  { header: "Customer", accessor: "customer", className: "hidden lg:table-cell" },
  { header: "Total", accessor: "total", className: "hidden md:table-cell" },
  { header: "Valid Until", accessor: "validUntil", className: "hidden lg:table-cell" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: any) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="p-4">
      <h3 className="font-semibold">{item.quoteNumber}</h3>
      <p className="text-xs text-muted-foreground">{item.jobId}</p>
    </td>
    <td className="hidden md:table-cell">{item.job}</td>
    <td className="hidden lg:table-cell">{item.customer}</td>
    <td className="hidden md:table-cell font-medium">{currency(item.total)}</td>
    <td className="hidden lg:table-cell">{item.validUntil}</td>
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
        href={`/admin/quotes/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const QuotesListPageForAdmin = () => {
  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Quotes</h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={quotesData} />
    </div>
  );
};

export default QuotesListPageForAdmin;
