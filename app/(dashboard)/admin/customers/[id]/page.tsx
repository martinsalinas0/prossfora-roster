"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useData } from "@/lib/store/DataProvider";
import CustomerProfile from "@/app/components/profiles/CustomerProfile";

const CustomerDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { customers } = useData();
  const customer = customers.find((c) => c.id === Number(id));

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/customers"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to customers
      </Link>

      {customer ? (
        <CustomerProfile customer={customer} />
      ) : (
        <p className="text-sm text-muted-foreground">Customer not found.</p>
      )}
    </div>
  );
};

export default CustomerDetailPage;
