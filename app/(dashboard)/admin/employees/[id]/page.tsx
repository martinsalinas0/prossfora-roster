"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useData } from "@/lib/store/DataProvider";
import EmployeeProfile from "@/app/components/profiles/EmployeeProfile";

const EmployeeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { employees } = useData();
  const employee = employees.find((e) => e.id === Number(id));

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/employees"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to team
      </Link>

      {employee ? (
        <EmployeeProfile employee={employee} />
      ) : (
        <p className="text-sm text-muted-foreground">Employee not found.</p>
      )}
    </div>
  );
};

export default EmployeeDetailPage;
