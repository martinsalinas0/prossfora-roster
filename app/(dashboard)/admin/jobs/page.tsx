import Table from "@/app/components/Table";
import { jobsData } from "@/lib/data/mockData";
import Link from "next/link";

const statusStyles: Record<string, string> = {
  open: "bg-pacific-50 text-pacific-700 border-pacific-200",
  needs_quote: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  quote_pending: "bg-yarrow-50 text-yarrow-700 border-yarrow-200",
  in_progress: "bg-olive-50 text-olive-800 border-olive-200",
  completed: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
  cancelled: "bg-muted text-muted-foreground border-border",
};

const priorityStyles: Record<string, string> = {
  low: "text-pacific-500",
  medium: "text-cerulean-700",
  urgent: "text-yarrow-700 font-semibold",
};

const columns = [
  { header: "Job", accessor: "job" },
  { header: "Job ID", accessor: "jobId", className: "hidden md:table-cell" },
  { header: "Customer", accessor: "customer", className: "hidden md:table-cell" },
  {
    header: "Contractor",
    accessor: "contractor",
    className: "hidden lg:table-cell",
  },
  { header: "Priority", accessor: "priority", className: "hidden lg:table-cell" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: any) => (
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
      <span
        className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${
          statusStyles[item.status] ?? "bg-muted text-muted-foreground border-border"
        }`}
      >
        {item.status.replace(/_/g, " ")}
      </span>
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
  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Jobs</h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={jobsData} />
    </div>
  );
};

export default JobsListPageForAdmin;
