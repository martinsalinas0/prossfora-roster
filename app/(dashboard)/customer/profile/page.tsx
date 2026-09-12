import Link from "next/link";
import { customersData } from "@/lib/data/mockData";
import CustomerProfile from "@/app/components/profiles/CustomerProfile";

const CURRENT_CUSTOMER_ID = 1;

const CustomerSelfProfilePage = () => {
  const customer = customersData.find((c) => c.id === CURRENT_CUSTOMER_ID)!;

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
