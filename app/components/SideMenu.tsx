"use client";

import { useState } from "react";
import {
  CalendarRange,
  ChevronDown,
  ClipboardList,
  ContactRound,
  DollarSign,
  FileText,
  HardHat,
  Home,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isHmrRefresh } from "next/dist/server/app-render/work-unit-async-storage.external";

const menuItems = [
  {
    title: "MENU",
    items: [{ icon: Home, label: "Dashboard", href: "/admin" }],
  },
  {
    title: "WORK",
    items: [
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
        href: "/admin/invoices/customer",
      },
      {
        icon: Receipt,
        label: "Contractor Invoices",
        href: "/admin/invoices/contractor",
      },
      { icon: ClipboardList, label: "Work Items", href: "/admin/workItems" },
      { icon: DollarSign, label: "Payments", href: "/admin/payments" },
    ],
  },
  {
    title: "PEOPLE",
    items: [
      { icon: ContactRound, label: "Customers", href: "/admin/customers" },
      { icon: HardHat, label: "Contractors", href: "/admin/contractors" },
      { icon: Users, label: "Team", href: "/admin/employees" },
    ],
  },
];

const SideMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<string[]>(menuItems.map((g) => g.title));

  const toggle = (title: string) =>
    setOpen((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );

  const isActive = (href: string) =>
    href === "/admin" ? pathname === href : pathname.startsWith(href);

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
                const active = isActive(item.href);
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md transition-colors ${
                      active
                        ? "bg-cerulean-50 text-cerulean font-medium"
                        : "text-gray-500 hover:bg-muted"
                    }`}
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
