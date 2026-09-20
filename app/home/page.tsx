import Link from "next/link";
import { ContactRound, HardHat, Home, Users } from "lucide-react";

const portals = [
  {
    href: "/admin",
    label: "Admin",
    description: "Manage jobs, quotes, invoices, payments, and people.",
    icon: Home,
  },
  {
    href: "/employee",
    label: "Employee",
    description: "View your activity and manage your staff profile.",
    icon: Users,
  },
  {
    href: "/contractor",
    label: "Contractor",
    description: "Track your assigned jobs and submitted invoices.",
    icon: HardHat,
  },
  {
    href: "/customer",
    label: "Customer",
    description: "View your jobs, quotes, and invoices.",
    icon: ContactRound,
  },
];

// TEMPORARY: no auth yet, so this is a manual portal picker instead of a
// role-based redirect after login.
const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-muted/40">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-cerulean">
            Prossfora - ROSTER
          </h1>
          <p className="text-pacific-600 mt-1">Choose a portal to enter</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portals.map(({ href, label, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:border-cerulean-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-cerulean-50 p-2">
                  <Icon className="size-5 text-cerulean" />
                </div>
                <p className="font-semibold text-cerulean">{label}</p>
              </div>
              <p className="mt-4 text-sm text-pacific-600">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
