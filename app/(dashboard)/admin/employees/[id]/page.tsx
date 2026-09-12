import { employeeData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmployeeProfile from "@/app/components/profiles/EmployeeProfile";

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

      <EmployeeProfile employee={employee} />
    </div>
  );
};

export default EmployeeDetailPage;
