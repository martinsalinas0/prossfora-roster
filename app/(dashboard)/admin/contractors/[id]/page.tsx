import { contractorsData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContractorProfile from "./ContractorProfile";

const ContractorDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const contractor = contractorsData.find((c) => c.id === Number(id));

  if (!contractor) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/contractors"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to contractors
      </Link>

      <ContractorProfile contractor={contractor} />
    </div>
  );
};

export default ContractorDetailPage;
