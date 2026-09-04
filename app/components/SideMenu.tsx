"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  BarChart3,
  CalendarRange,
  ContactRound,
  DollarSign,
  FileText,
  Home,
  LogOut,
  Receipt,
  Settings,
  UserCircle,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [{ icon: Home, label: "Home", href: "/admin" }],
  },
  {
    title: "WORK",
    items: [
      { icon: FileText, label: "Job Requests", href: "/admin/job-requests" },
      { icon: Wrench, label: "Jobs", href: "/admin/jobs" },
      { icon: CalendarRange, label: "Schedule", href: "/admin/schedule" },
    ],
  },
  {
    title: "MONEY",
    items: [
      { icon: FileText, label: "Quotes", href: "/admin/quotes" },
      {
        icon: Receipt,
        label: "Customer Invoices",
        href: "/admin/invoices/customers",
      },
      {
        icon: Receipt,
        label: "Contractor Invoices",
        href: "/admin/invoices/contractors",
      },
      { icon: DollarSign, label: "Payments", href: "/admin/payments" },
    ],
  },
  {
    title: "PEOPLE",
    items: [
      { icon: ContactRound, label: "Customers", href: "/admin/customers" },
      { icon: Users, label: "Contractors", href: "/admin/contractors" },
      { icon: Users, label: "Team", href: "/admin/team" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: BarChart3, label: "Reports", href: "/admin/reports" },
      { icon: BarChart3, label: "Activity", href: "/admin/audit" },
      { icon: UserCircle, label: "Profile", href: "/admin/profile" },
      { icon: Settings, label: "Settings", href: "/admin/settings" },
      { icon: LogOut, label: "Logout", href: "/logout" },
    ],
  },
];

const SideMenu = () => {
  const [open, setOpen] = useState<string[]>(
    menuItems.map((g) => g.title), // all expanded by default
  );

  const toggle = (title: string) =>
    setOpen((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((group) => {
        const isOpen = open.includes(group.title);

        return (
          <div className="flex flex-col gap-2" key={group.title}>
            <button
              type="button"
              onClick={() => toggle(group.title)}
              aria-expanded={isOpen}
              className="hidden lg:flex items-center gap-2 text-gray-400 font-light my-4 hover:text-gray-600 transition-colors"
            >
              <span className="flex-1 text-left font-semibold">
                {group.title}
              </span>
              <ChevronDown
                className={`size-4 shrink-0 transition-transform ${
                  isOpen ? "" : "-rotate-90"
                }`}
              />
            </button>

            {isOpen &&
              group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-muted"
                  >
                    <Icon className="size-5 shrink-0" />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};
export default SideMenu;
