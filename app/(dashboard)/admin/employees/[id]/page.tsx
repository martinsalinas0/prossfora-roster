import { employeeData } from "@/lib/data/mockData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const EmployeeDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const employee = employeeData.find((e) => e.id === Number(id));

  if (!employee) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/employees"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to team
      </Link>

      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <Image
            src={employee.photo}
            alt=""
            width={96}
            height={96}
            priority
            className="w-24 h-24 rounded-full object-cover ring-4 ring-olive-100"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cerulean">
              {employee.name}
            </h1>
            <p className="text-pacific-600 capitalize">{employee.role}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-yarrow-50 px-3 py-1 text-xs font-medium text-yarrow-700 border border-yarrow-200">
                {employee.employeeId}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium border ${
                  employee.status === "active"
                    ? "bg-olive-50 text-olive-800 border-olive-200"
                    : "bg-pacific-50 text-pacific-700 border-pacific-200"
                }`}
              >
                {employee.status}
              </span>
              <span className="rounded-full bg-cerulean-50 px-3 py-1 text-xs font-medium text-cerulean-700 border border-cerulean-200 capitalize">
                {employee.role}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Contact &amp; Details</h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Email
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {employee.email}
            </dd>
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Phone
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {employee.phone}
            </dd>
          </div>

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Last Login
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {employee.lastLogin}
            </dd>
          </div>

          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Employee ID
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {employee.employeeId}
            </dd>
          </div>

          <div className="sm:col-span-2 border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Address
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {employee.address}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
