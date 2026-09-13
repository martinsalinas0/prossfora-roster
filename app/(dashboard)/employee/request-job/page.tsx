"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { employeeData, jobRequestsData } from "@/lib/data/mockData";

const CURRENT_EMPLOYEE_ID = 3;

const todayISO = () => new Date().toISOString().slice(0, 10);

const inputClass =
  "mt-1 w-full rounded-md border border-input bg-card px-2 py-1.5 text-sm font-medium text-cerulean-800 outline-none focus:ring-2 focus:ring-cerulean-400";

const RequestJobPage = () => {
  const router = useRouter();
  const employee = employeeData.find((e) => e.id === CURRENT_EMPLOYEE_ID)!;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [priority, setPriority] = useState<
    "low" | "medium" | "high" | "urgent"
  >("medium");

  const canSubmit =
    title.trim() && description.trim() && customer.trim() && address.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const nextId = Math.max(...jobRequestsData.map((r) => r.id)) + 1;
    jobRequestsData.push({
      id: nextId,
      requestId: `REQ-${4000 + nextId - 1}`,
      title: title.trim(),
      description: description.trim(),
      customer: customer.trim(),
      address: address.trim(),
      priority,
      status: "pending",
      submittedBy: employee.name,
      reviewedBy: null,
      rejectionReason: null,
      submittedDate: todayISO(),
    });

    router.push("/employee");
  };

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/employee"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to dashboard
      </Link>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden max-w-xl">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h1 className="font-semibold text-cerulean">Submit a Job Request</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide text-pacific-500">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Water heater leaking"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-pacific-500">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="What did the customer describe?"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-pacific-500">
              Customer Name
            </label>
            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-pacific-500">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-pacific-500">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as typeof priority)}
              className={inputClass}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="rounded-md bg-cerulean px-3 py-1.5 text-sm font-medium text-white hover:bg-cerulean-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestJobPage;
