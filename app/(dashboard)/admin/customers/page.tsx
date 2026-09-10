import Image from "next/image";
import Link from "next/link";
import Table from "@/app/components/Table";
import { customersData } from "@/lib/data/mockData";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Customer ID",
    accessor: "customerId",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Jobs",
    accessor: "jobCount",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: any) => (
  <tr
    key={item.id}
    className="border-b border-border even:bg-muted/40 text-sm hover:bg-muted"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-muted-foreground">{item.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.customerId}</td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td className="hidden lg:table-cell">{item.address}</td>
    <td className="hidden md:table-cell">{item.jobCount}</td>
    <td>
      <Link
        href={`/admin/customers/${item.id}`}
        className="text-cerulean hover:underline"
      >
        View
      </Link>
    </td>
  </tr>
);

export default function CustomerListPage() {
  return (
    <div className="bg-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Customers</h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={customersData} />
    </div>
  );
}
