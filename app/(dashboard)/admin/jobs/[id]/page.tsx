"use client";

import { useState } from "react";
import StatusBadge from "@/app/components/StatusBadge";
import { jobsData } from "@/lib/data/mockData";
import Link from "next/link";
import { useParams } from "next/navigation";

// TEMPORARY: no auth yet, so approvals/rejections are attributed to a fixed
// mock admin until real sessions exist.
const CURRENT_ADMIN_NAME = "Diane Okafor";

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const found = jobsData.find((j) => j.id === Number(id));
  const [current, setCurrent] = useState<any>(found);
  const [rejecting, setRejecting] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  if (!current) {
    return (
      <div className="p-6 space-y-4">
        <Link
          href="/admin/jobs"
          className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
        >
          ← Back to jobs
        </Link>
        <p className="text-sm text-muted-foreground">Job not found.</p>
      </div>
    );
  }

  const job = current;

  const handleApprove = () => {
    const updated = { ...job, status: "open", reviewedBy: CURRENT_ADMIN_NAME };
    const liveJob = jobsData.find((j) => j.id === job.id);
    if (liveJob) Object.assign(liveJob, updated);
    setCurrent(updated);
  };

  const handleReject = () => {
    const updated = {
      ...job,
      status: "rejected",
      reviewedBy: CURRENT_ADMIN_NAME,
      rejectionReason: rejectionReason.trim() || "No reason given",
    };
    const liveJob = jobsData.find((j) => j.id === job.id);
    if (liveJob) Object.assign(liveJob, updated);
    setCurrent(updated);
    setRejecting(false);
  };

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/jobs"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to jobs
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-cerulean">{job.title}</h1>
              <p className="mt-1 text-pacific-600">{job.jobId}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <StatusBadge status={job.status} />
              <span className="rounded-full bg-yarrow-50 px-3 py-1 text-xs font-medium text-yarrow-700 border border-yarrow-200 capitalize">
                {job.priority}
              </span>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-cerulean-800">
            {job.description}
          </p>
        </div>
      </div>

      {job.status === "pending" && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-4">
          {!rejecting ? (
            <div className="flex gap-2">
              <button
                onClick={handleApprove}
                className="rounded-md bg-cerulean px-3 py-1.5 text-sm font-medium text-white hover:bg-cerulean-700 transition-colors"
              >
                Approve
              </button>
              <button
                onClick={() => setRejecting(true)}
                className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-pacific-600 hover:bg-muted transition-colors"
              >
                Reject
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-wide text-pacific-500">
                Rejection reason
              </label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                rows={3}
                className="w-full rounded-md border border-input bg-card px-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-cerulean-400"
                placeholder="Why is this job being rejected?"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleReject}
                  className="rounded-md bg-cerulean px-3 py-1.5 text-sm font-medium text-white hover:bg-cerulean-700 transition-colors"
                >
                  Confirm Rejection
                </button>
                <button
                  onClick={() => setRejecting(false)}
                  className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-pacific-600 hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Details</h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Customer
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.customer}
            </dd>
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Contractor
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.contractor ?? "Unassigned"}
            </dd>
          </div>

          <div className="sm:col-span-2 border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Address
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">{job.address}</dd>
          </div>

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Scheduled
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.scheduledDate
                ? `${job.scheduledDate}${
                    job.scheduledTime ? ` at ${job.scheduledTime}` : ""
                  }`
                : "Not scheduled"}
            </dd>
          </div>

          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Completed
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.completedDate ?? "—"}
            </dd>
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Pay Type
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800 capitalize">
              {job.payType ?? "—"}
            </dd>
          </div>

          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Hours Worked
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.hoursWorked ?? "—"}
            </dd>
          </div>

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Created
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {job.createdDate} · {job.createdBy}
            </dd>
          </div>

          {job.reviewedBy && (
            <div className="border-l-2 border-olive-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Reviewed By
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {job.reviewedBy}
              </dd>
            </div>
          )}

          {job.cancellationReason && (
            <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Cancellation Reason
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {job.cancellationReason}
              </dd>
            </div>
          )}

          {job.rejectionReason && (
            <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Rejection Reason
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {job.rejectionReason}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default JobDetailPage;
