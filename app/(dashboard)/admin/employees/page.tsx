import Table from "@/app/components/Table";
import { employeeData } from "@/lib/data/mockData";
import Link from "next/link";

const columns = [
  { header: "Info", accessor: "info" },
  { header: "EmployeeID", accessor: "employeeId" },
  {
    header: "Phone",
    accessor: "phone",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: any) => (
  <tr
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
    key={item.id}
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.employeeId}</td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td>
      <Link
        href={`/admin/employees/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

const EmployeesPage = () => {
  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Employees</h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={employeeData} />
    </div>
  );
};

export default EmployeesPage;
