"use client";

import Image from "next/image";
import { contractorsData } from "@/lib/data/mockData";
import { useState } from "react";

type Contractor = (typeof contractorsData)[number];

const inputClass =
  "mt-1 w-full rounded-md border border-input bg-card px-2 py-1.5 text-sm font-medium text-cerulean-800 outline-none focus:ring-2 focus:ring-cerulean-400";

const ContractorProfile = ({ contractor }: { contractor: Contractor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(contractor);

  const handleChange = (
    field: keyof Contractor,
    value: string | number
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setForm(contractor);
    setIsEditing(false);
  };

  const handleSave = () => {
    // TEMPORARY: no backend yet, persist in-memory for this session only
    Object.assign(contractor, form);
    setIsEditing(false);
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <Image
            src={form.photo}
            alt=""
            width={96}
            height={96}
            priority
            className="w-24 h-24 rounded-full object-cover ring-4 ring-olive-100"
          />
          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="text-2xl font-bold text-cerulean bg-transparent border-b border-input outline-none focus:border-cerulean-400 w-full"
              />
            ) : (
              <h1 className="text-2xl font-bold text-cerulean">
                {form.name}
              </h1>
            )}

            {isEditing ? (
              <input
                type="text"
                value={form.company ?? ""}
                onChange={(e) => handleChange("company", e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-card px-2 py-1 text-sm text-pacific-600 outline-none focus:ring-2 focus:ring-cerulean-400"
              />
            ) : (
              form.company && <p className="text-pacific-600">{form.company}</p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-yarrow-50 px-3 py-1 text-xs font-medium text-yarrow-700 border border-yarrow-200">
                {form.contractorId}
              </span>
              {isEditing ? (
                <select
                  value={form.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                  className={`rounded-full px-3 py-1 text-xs font-medium border outline-none ${
                    form.status === "active"
                      ? "bg-olive-50 text-olive-800 border-olive-200"
                      : "bg-pacific-50 text-pacific-700 border-pacific-200"
                  }`}
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              ) : (
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium border ${
                    form.status === "active"
                      ? "bg-olive-50 text-olive-800 border-olive-200"
                      : "bg-pacific-50 text-pacific-700 border-pacific-200"
                  }`}
                >
                  {form.status}
                </span>
              )}
              {form.verified && (
                <span className="rounded-full bg-cerulean-50 px-3 py-1 text-xs font-medium text-cerulean-700 border border-cerulean-200">
                  Verified
                </span>
              )}
            </div>
          </div>

          <div className="flex sm:self-start gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="rounded-md bg-cerulean px-3 py-1.5 text-sm font-medium text-white hover:bg-cerulean-700 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-pacific-600 hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-cerulean hover:bg-cerulean-50 transition-colors"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Hourly Rate
          </p>
          {isEditing ? (
            <input
              type="number"
              value={form.hourlyRate}
              onChange={(e) =>
                handleChange("hourlyRate", Number(e.target.value))
              }
              className={inputClass}
            />
          ) : (
            <p className="mt-1 text-2xl font-bold text-yarrow-700">
              ${form.hourlyRate}
              <span className="text-sm font-normal text-muted-foreground">
                /hr
              </span>
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Flat Rate
          </p>
          {isEditing ? (
            <input
              type="number"
              value={form.flatRate}
              onChange={(e) =>
                handleChange("flatRate", Number(e.target.value))
              }
              className={inputClass}
            />
          ) : (
            <p className="mt-1 text-2xl font-bold text-yarrow-700">
              ${form.flatRate}
            </p>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Jobs</h2>
        </div>

        <ul className="divide-y divide-border">
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Water heater replacement
          </li>
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Fence repair - 2 panels
          </li>
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Gutter cleaning and re-pitch
          </li>
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Deck board replacement
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Contact &amp; Trades</h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Email
            </dt>
            {isEditing ? (
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
              />
            ) : (
              <dd className="mt-1 font-medium text-cerulean-800">
                {form.email}
              </dd>
            )}
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Phone
            </dt>
            {isEditing ? (
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
              />
            ) : (
              <dd className="mt-1 font-medium text-cerulean-800">
                {form.phone}
              </dd>
            )}
          </div>

          <div className="border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Contractor ID
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {form.contractorId}
            </dd>
          </div>

          <div className="sm:col-span-2 border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Address
            </dt>
            {isEditing ? (
              <input
                type="text"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className={inputClass}
              />
            ) : (
              <dd className="mt-1 font-medium text-cerulean-800">
                {form.address}
              </dd>
            )}
          </div>

          <div className="sm:col-span-2 border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Trades
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {form.trades.map((trade: string) => (
                <span
                  key={trade}
                  className="rounded-md bg-olive-50 px-2.5 py-1 text-xs font-medium text-olive-800 border border-olive-200"
                >
                  {trade}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default ContractorProfile;
