import Link from "next/link";
import { Receipt } from "lucide-react";
import {
  customerInvoicesData,
  contractorInvoicesData,
} from "@/lib/data/mockData";

const InvoicesIndexPage = () => {
  const cards = [
    {
      href: "/admin/invoices/customer",
      label: "Customer Invoices",
      count: customerInvoicesData.length,
      description: "Invoices billed out to customers for completed work.",
    },
    {
      href: "/admin/invoices/contractor",
      label: "Contractor Invoices",
      count: contractorInvoicesData.length,
      description: "Invoices submitted by contractors for payout.",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-cerulean">Invoices</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-border bg-card p-6 shadow-sm hover:border-cerulean-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-cerulean-50 p-2">
                <Receipt className="size-5 text-cerulean" />
              </div>
              <div>
                <p className="font-semibold text-cerulean">{card.label}</p>
                <p className="text-xs text-muted-foreground">
                  {card.count} total
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-pacific-600">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InvoicesIndexPage;
