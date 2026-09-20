"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  employeeData,
  contractorsData,
  customersData,
  jobsData,
  type Employee,
  type Contractor,
  type Customer,
  type Job,
} from "@/lib/data/mockData";

interface DataContextValue {
  employees: Employee[];
  contractors: Contractor[];
  customers: Customer[];
  jobs: Job[];
  updateEmployee: (id: number, patch: Partial<Employee>) => void;
  updateContractor: (id: number, patch: Partial<Contractor>) => void;
  updateCustomer: (id: number, patch: Partial<Customer>) => void;
  updateJob: (id: number, patch: Partial<Job>) => void;
  addJob: (job: Omit<Job, "id" | "jobId">) => void;
}

const DataContext = createContext<DataContextValue | null>(null);

// TEMPORARY: this is an in-memory mock "database" seeded once from
// mockData.ts — state lives only for the current browser tab and resets on
// reload. Every write goes through the functions below instead of mutating
// the mockData arrays directly, so every screen reading this context sees
// the same, current data (and this is the one seam to swap for real API
// calls later).
export function DataProvider({ children }: { children: React.ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>(employeeData);
  const [contractors, setContractors] = useState<Contractor[]>(contractorsData);
  const [customers, setCustomers] = useState<Customer[]>(customersData);
  const [jobs, setJobs] = useState<Job[]>(jobsData);

  const value = useMemo<DataContextValue>(
    () => ({
      employees,
      contractors,
      customers,
      jobs,
      updateEmployee: (id, patch) =>
        setEmployees((prev) =>
          prev.map((e) => (e.id === id ? { ...e, ...patch } : e)),
        ),
      updateContractor: (id, patch) =>
        setContractors((prev) =>
          prev.map((c) => (c.id === id ? { ...c, ...patch } : c)),
        ),
      updateCustomer: (id, patch) =>
        setCustomers((prev) =>
          prev.map((c) => (c.id === id ? { ...c, ...patch } : c)),
        ),
      updateJob: (id, patch) =>
        setJobs((prev) =>
          prev.map((j) => (j.id === id ? { ...j, ...patch } : j)),
        ),
      addJob: (job) =>
        setJobs((prev) => {
          const nextId = prev.length
            ? Math.max(...prev.map((j) => j.id)) + 1
            : 1;
          return [
            ...prev,
            { ...job, id: nextId, jobId: `JOB-${5000 + nextId - 1}` },
          ];
        }),
    }),
    [employees, contractors, customers, jobs],
  );

  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within a DataProvider");
  return ctx;
}
