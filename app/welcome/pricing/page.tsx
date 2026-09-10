import WelcomePageNavbar from "@/app/components/WelcomePageNavbar";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cerulean-50 via-white to-olive-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div></div>
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-cerulean mb-4">
            Pricing
          </h1>
          <p className="text-lg text-pacific-600 max-w-xl mx-auto">
            Pick a plan by how much work you route each month. No setup fees.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* CREW */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="h-1.5 bg-pacific-400" />
            <div className="p-7">
              <h2 className="font-semibold text-cerulean text-lg">Crew</h2>
              <p className="mt-3">
                <span className="text-4xl font-bold text-cerulean">$49</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </p>
              <p className="mt-3 text-sm text-pacific-600">
                For a single crew getting off spreadsheets.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pacific-400" />
                  <span className="text-cerulean-800">
                    Up to 25 active jobs
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pacific-400" />
                  <span className="text-cerulean-800">
                    Quotes and customer invoices
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pacific-400" />
                  <span className="text-cerulean-800">2 team seats</span>
                </li>
              </ul>

              <Link
                href="/auth/sign-up"
                className="mt-7 block rounded-lg border border-cerulean px-5 py-2.5 text-center font-semibold text-cerulean hover:bg-cerulean-50 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* OPERATIONS */}
          <div className="overflow-hidden rounded-xl border-2 border-olive-400 bg-card shadow-md lg:-mt-4">
            <div className="h-1.5 bg-olive" />
            <div className="p-7">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-cerulean text-lg">
                  Operations
                </h2>
                <span className="rounded-full bg-olive-50 px-3 py-1 text-xs font-medium text-olive-800 border border-olive-200">
                  Most popular
                </span>
              </div>
              <p className="mt-3">
                <span className="text-4xl font-bold text-cerulean">$149</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </p>
              <p className="mt-3 text-sm text-pacific-600">
                For dispatchers coordinating contractors daily.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-500" />
                  <span className="text-cerulean-800">Unlimited jobs</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-500" />
                  <span className="text-cerulean-800">
                    Contractor invoices and approvals
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-500" />
                  <span className="text-cerulean-800">
                    Payments and reconciliation
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-500" />
                  <span className="text-cerulean-800">10 team seats</span>
                </li>
              </ul>

              <Link
                href="/auth/sign-up"
                className="mt-7 block rounded-lg bg-olive px-5 py-2.5 text-center font-semibold text-white hover:bg-olive-700 transition-colors shadow-md"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="h-1.5 bg-yarrow-400" />
            <div className="p-7">
              <h2 className="font-semibold text-cerulean text-lg">
                Enterprise
              </h2>
              <p className="mt-3">
                <span className="text-3xl font-bold text-cerulean">
                  Talk to us
                </span>
              </p>
              <p className="mt-3 text-sm text-pacific-600">
                Multi-office rosters with reporting requirements.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yarrow-400" />
                  <span className="text-cerulean-800">
                    Everything in Operations
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yarrow-400" />
                  <span className="text-cerulean-800">
                    Custom reports and exports
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yarrow-400" />
                  <span className="text-cerulean-800">Unlimited seats</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yarrow-400" />
                  <span className="text-cerulean-800">SSO</span>
                </li>
              </ul>

              <Link
                href="/auth/sign-up"
                className="mt-7 block rounded-lg border border-cerulean px-5 py-2.5 text-center font-semibold text-cerulean hover:bg-cerulean-50 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Illustrative pricing for this demo — replace with your real plans
          before launch.
        </p>
      </div>
    </div>
  );
}
