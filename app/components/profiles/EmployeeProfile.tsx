"use client";

import Image from "next/image";
import type { Employee } from "@/lib/data/mockData";
import { useData } from "@/lib/store/DataProvider";
import DetailField from "@/app/components/DetailField";
import { useState } from "react";

const EmployeeProfile = ({ employee }: { employee: Employee }) => {
  const { updateEmployee } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(employee);

  const handleChange = (field: keyof Employee, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }) as Employee);
  };

  const handleCancel = () => {
    setForm(employee);
    setIsEditing(false);
  };

  const handleSave = () => {
    updateEmployee(employee.id, form);
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
              <h1 className="text-2xl font-bold text-cerulean">{form.name}</h1>
            )}

            {isEditing ? (
              <select
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="mt-1 capitalize rounded-md border border-input bg-card px-2 py-1 text-sm text-pacific-600 outline-none focus:ring-2 focus:ring-cerulean-400"
              >
                <option value="admin">admin</option>
                <option value="manager">manager</option>
                <option value="employee">employee</option>
              </select>
            ) : (
              <p className="text-pacific-600 capitalize">{form.role}</p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-yarrow-50 px-3 py-1 text-xs font-medium text-yarrow-700 border border-yarrow-200">
                {form.employeeId}
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
              <span className="rounded-full bg-cerulean-50 px-3 py-1 text-xs font-medium text-cerulean-700 border border-cerulean-200 capitalize">
                {form.role}
              </span>
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

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Contact &amp; Details</h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <DetailField
            label="Email"
            value={form.email}
            accent="olive"
            editing={isEditing}
            inputType="email"
            onChange={(v) => handleChange("email", v)}
          />
          <DetailField
            label="Phone"
            value={form.phone}
            accent="pacific"
            editing={isEditing}
            inputType="tel"
            onChange={(v) => handleChange("phone", v)}
          />
          <DetailField label="Last Login" value={form.lastLogin} accent="yarrow" />
          <DetailField
            label="Employee ID"
            value={form.employeeId}
            accent="cerulean"
          />
          <DetailField
            label="Address"
            value={form.address}
            accent="olive"
            span
            editing={isEditing}
            onChange={(v) => handleChange("address", v)}
          />
        </dl>
      </div>
    </>
  );
};

export default EmployeeProfile;
