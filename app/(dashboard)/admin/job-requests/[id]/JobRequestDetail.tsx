"use client";

import { useState } from "react";
import Link from "next/link";
import { jobRequestsData, jobsData } from "@/lib/data/mockData";
import StatusBadge from "@/app/components/StatusBadge";

type JobRequest = (typeof jobRequestsData)[number];

// TEMPORARY: no auth yet, so approvals/rejections are attributed to a fixed
// mock admin until real sessions exist.
const CURRENT_ADMIN_NAME = "Diane Okafor";

const todayISO = () => new Date().toISOString().slice(0, 10);

const JobRequestDetail = ({ request }: { request: JobRequest }) => {
  const [current, setCurrent] = useState(request);
  const [rejecting, setRejecting] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [createdJobId, setCreatedJobId] = useState<number | null>(null);

  const handleApprove = () => {
    const nextId = Math.max(...jobsData.map((j) => j.id)) + 1;
    const newJob = {
      id: nextId,
      jobId: `JOB-${5000 + nextId - 1}`,
      title: current.title,
      description: current.description,
      customer: current.customer,
      contractor: null,
      address: current.address,
      status: "open" as const,
      priority: current.priority,
      payType: null,
      hoursWorked: null,
      scheduledDate: null,
      scheduledTime: null,
      completedDate: null,
      createdBy: CURRENT_ADMIN_NAME,
      createdDate: todayISO(),
      cancellationReason: null,
    };
    jobsData.push(newJob);

    const updated = {
      ...current,
      status: "approved",
      reviewedBy: CURRENT_ADMIN_NAME,
    };
    // `request` crossed the server/client boundary as a prop, so it's a
    // deserialized copy — mutate the live array entry (found by id via this
    // client module's own import) so other client pages see the change too.
    const liveRequest = jobRequestsData.find((r) => r.id === current.id);
    if (liveRequest) Object.assign(liveRequest, updated);
    setCurrent(updated);
    setCreatedJobId(newJob.id);
  };

  const handleReject = () => {
    const updated = {
      ...current,
      status: "rejected",
      reviewedBy: CURRENT_ADMIN_NAME,
      rejectionReason: rejectionReason.trim() || "No reason given",
    };
    const liveRequest = jobRequestsData.find((r) => r.id === current.id);
    if (liveRequest) Object.assign(liveRequest, updated);
    setCurrent(updated);
    setRejecting(false);
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-cerulean">
              {current.title}
            </h1>
            <p className="mt-1 text-pacific-600">
              {current.requestId} · {current.customer}
            </p>
          </div>
          <StatusBadge status={current.status} />
        </div>
      </div>

      {current.status === "pending" && (
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
                placeholder="Why is this request being rejected?"
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

      {createdJobId != null && (
        <div className="rounded-xl border border-olive-200 bg-olive-50 p-4 text-sm text-olive-800">
          Approved — a new job was created.{" "}
          <Link
            href={`/admin/jobs/${createdJobId}`}
            className="font-medium underline"
          >
            View the job
          </Link>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Details</h2>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="sm:col-span-2 border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Description
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {current.description}
            </dd>
          </div>
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Address
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {current.address}
            </dd>
          </div>
          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Priority
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800 capitalize">
              {current.priority}
            </dd>
          </div>
          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Submitted By
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {current.submittedBy}
            </dd>
          </div>
          <div className="border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Submitted Date
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {current.submittedDate}
            </dd>
          </div>
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Reviewed By
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {current.reviewedBy ?? "Awaiting review"}
            </dd>
          </div>
          {current.rejectionReason && (
            <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
              <dt className="text-xs uppercase tracking-wide text-pacific-500">
                Rejection Reason
              </dt>
              <dd className="mt-1 font-medium text-cerulean-800">
                {current.rejectionReason}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </>
  );
};

export default JobRequestDetail;
