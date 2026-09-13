import { notFound } from "next/navigation";
import Link from "next/link";
import { jobRequestsData } from "@/lib/data/mockData";
import JobRequestDetail from "./JobRequestDetail";

const JobRequestDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const request = jobRequestsData.find((r) => r.id === Number(id));

  if (!request) notFound();

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/job-requests"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to job requests
      </Link>

      <JobRequestDetail request={request} />
    </div>
  );
};

export default JobRequestDetailPage;
