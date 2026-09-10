export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cerulean-50 via-white to-olive-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cerulean mb-4">
            Features
          </h1>
          <p className="text-lg text-pacific-600 max-w-xl mx-auto">
            One workflow from the first request to the settled payment.
          </p>
        </div>

        <section className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-olive-700">
              Work
            </h2>
            <span className="h-px flex-1 bg-olive-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-olive-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Job requests</h3>
              <p className="text-sm text-pacific-600">
                Field submissions with priority, address and review trail.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-olive-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Jobs</h3>
              <p className="text-sm text-pacific-600">
                Open, assigned, scheduled, in progress, completed and cancelled.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-olive-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Schedule</h3>
              <p className="text-sm text-pacific-600">
                Every booked visit with contractor and time window.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-yarrow-700">
              Money
            </h2>
            <span className="h-px flex-1 bg-yarrow-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-yarrow-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Quotes</h3>
              <p className="text-sm text-pacific-600">
                Hourly or flat, materials, tax and validity dates.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-yarrow-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">
                Customer invoices
              </h3>
              <p className="text-sm text-pacific-600">
                Sent, paid and overdue tracking with due dates.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-yarrow-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">
                Contractor invoices
              </h3>
              <p className="text-sm text-pacific-600">
                Submitted pay claims with approval and rejection reasons.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-yarrow-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Payments</h3>
              <p className="text-sm text-pacific-600">
                Card (Stripe) and ACH settlement with refunds and failures.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-pacific-700">
              People
            </h2>
            <span className="h-px flex-1 bg-pacific-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-pacific-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Customers</h3>
              <p className="text-sm text-pacific-600">
                Contact details, address and lifetime job count.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-pacific-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Contractors</h3>
              <p className="text-sm text-pacific-600">
                Trades, rates and verification status.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-pacific-400 mb-4" />
              <h3 className="font-semibold text-cerulean mb-2">Team</h3>
              <p className="text-sm text-pacific-600">
                Staff roles, access and last sign-in.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
