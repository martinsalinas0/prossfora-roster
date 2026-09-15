"use client";

import { useState } from "react";
import StatusBadge from "@/app/components/StatusBadge";
import DetailField from "@/app/components/DetailField";
import { useData } from "@/lib/store/DataProvider";
import { CURRENT_ADMIN_ID } from "@/lib/currentUser";
import Link from "next/link";
import { useParams } from "next/navigation";

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { jobs, employees, updateJob } = useData();
  const job = jobs.find((j) => j.id === Number(id));
  const [rejecting, setRejecting] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  if (!job) {
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

  const currentAdminName = employees.find((e) => e.id === CURRENT_ADMIN_ID)!
    .name;

  const handleApprove = () => {
    updateJob(job.id, { status: "open", reviewedBy: currentAdminName });
  };

  const handleReject = () => {
    updateJob(job.id, {
      status: "rejected",
      reviewedBy: currentAdminName,
      rejectionReason: rejectionReason.trim() || "No reason given",
    });
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
          <DetailField label="Customer" value={job.customer} accent="olive" />
          <DetailField
            label="Contractor"
            value={job.contractor ?? "Unassigned"}
            accent="pacific"
          />
          <DetailField
            label="Address"
            value={job.address}
            accent="cerulean"
            span
          />
          <DetailField
            label="Scheduled"
            value={
              job.scheduledDate
                ? `${job.scheduledDate}${
                    job.scheduledTime ? ` at ${job.scheduledTime}` : ""
                  }`
                : "Not scheduled"
            }
            accent="yarrow"
          />
          <DetailField
            label="Completed"
            value={job.completedDate ?? "—"}
            accent="olive"
          />
          <DetailField
            label="Pay Type"
            value={
              <span className="capitalize">{job.payType ?? "—"}</span>
            }
            accent="pacific"
          />
          <DetailField
            label="Hours Worked"
            value={job.hoursWorked ?? "—"}
            accent="cerulean"
          />
          <DetailField
            label="Created"
            value={`${job.createdDate} · ${job.createdBy}`}
            accent="yarrow"
          />
          {job.reviewedBy && (
            <DetailField
              label="Reviewed By"
              value={job.reviewedBy}
              accent="olive"
            />
          )}
          {job.cancellationReason && (
            <DetailField
              label="Cancellation Reason"
              value={job.cancellationReason}
              accent="yarrow"
              span
            />
          )}
          {job.rejectionReason && (
            <DetailField
              label="Rejection Reason"
              value={job.rejectionReason}
              accent="yarrow"
              span
            />
          )}
        </dl>
      </div>
    </div>
  );
};

export default JobDetailPage;
