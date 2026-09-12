import { customersData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";
import CustomerProfile from "./CustomerProfile";

const CustomerDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const customer = customersData.find((c) => c.id === Number(id));

  if (!customer) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/customers"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to customers
      </Link>

      <CustomerProfile customer={customer} />
    </div>
  );
};

export default CustomerDetailPage;
