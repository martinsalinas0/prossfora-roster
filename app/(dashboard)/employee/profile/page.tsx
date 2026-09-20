"use client";

import Link from "next/link";
import { useData } from "@/lib/store/DataProvider";
import { CURRENT_EMPLOYEE_ID } from "@/lib/currentUser";
import EmployeeProfile from "@/app/components/profiles/EmployeeProfile";

const EmployeeSelfProfilePage = () => {
  const { employees } = useData();
  const employee = employees.find((e) => e.id === CURRENT_EMPLOYEE_ID)!;

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
