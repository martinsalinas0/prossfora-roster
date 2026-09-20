"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useData } from "@/lib/store/DataProvider";
import ContractorProfile from "@/app/components/profiles/ContractorProfile";

const ContractorDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { contractors } = useData();
  const contractor = contractors.find((c) => c.id === Number(id));

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/contractors"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to contractors
      </Link>

      {contractor ? (
        <ContractorProfile contractor={contractor} />
      ) : (
        <p className="text-sm text-muted-foreground">Contractor not found.</p>
      )}
    </div>
  );
};

export default ContractorDetailPage;
