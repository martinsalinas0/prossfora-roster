"use client";

import Link from "next/link";
import { useData } from "@/lib/store/DataProvider";
import { CURRENT_CONTRACTOR_ID } from "@/lib/currentUser";
import ContractorProfile from "@/app/components/profiles/ContractorProfile";

const ContractorSelfProfilePage = () => {
  const { contractors } = useData();
  const contractor = contractors.find((c) => c.id === CURRENT_CONTRACTOR_ID)!;

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/contractor"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to dashboard
      </Link>

      <ContractorProfile contractor={contractor} />
    </div>
  );
};

export default ContractorSelfProfilePage;
