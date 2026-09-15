"use client";

import Link from "next/link";
import { useData } from "@/lib/store/DataProvider";
import { CURRENT_CUSTOMER_ID } from "@/lib/currentUser";
import CustomerProfile from "@/app/components/profiles/CustomerProfile";

const CustomerSelfProfilePage = () => {
  const { customers } = useData();
  const customer = customers.find((c) => c.id === CURRENT_CUSTOMER_ID)!;

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/customer"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to dashboard
      </Link>

      <CustomerProfile customer={customer} />
    </div>
  );
};

export default CustomerSelfProfilePage;
