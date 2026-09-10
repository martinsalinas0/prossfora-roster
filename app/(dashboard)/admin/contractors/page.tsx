import Table from "@/app/components/Table";
import { contractorsData } from "@/lib/data/mockData";
import Link from "next/link";

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Contractor ID",
    accessor: "contractorID",
    className: "hidden md:table-cell",
  },
  { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
  {
    header: "Addess",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  { header: "Jobs", accessor: "jobs", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: any) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="md:hidden xl:block w-10 h-10 rounded-full object-cover">
        PP
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-muted-foreground">{item.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.contractorID}</td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td className="hidden lg:table-cell">{item.address}</td>
    <td className="hidden md:table-cell">{item.jobCount}</td>
    <td>
      <Link
        href={`/admin/contractors/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const ContractorListPageForAdmin = () => {
  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Contractors
        </h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={contractorsData} />
    </div>
  );
};

export default ContractorListPageForAdmin;
