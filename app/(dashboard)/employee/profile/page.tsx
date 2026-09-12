import Link from "next/link";
import { employeeData } from "@/lib/data/mockData";
import EmployeeProfile from "@/app/components/profiles/EmployeeProfile";

const CURRENT_EMPLOYEE_ID = 3;

const EmployeeSelfProfilePage = () => {
  const employee = employeeData.find((e) => e.id === CURRENT_EMPLOYEE_ID)!;

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/employee"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to dashboard
      </Link>

      <EmployeeProfile employee={employee} />
    </div>
  );
};

export default EmployeeSelfProfilePage;
