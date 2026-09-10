export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cerulean-50 via-white to-olive-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-cerulean mb-4">
            Contact
          </h1>
          <p className="text-lg text-pacific-600 max-w-xl mx-auto">
            Questions about plans, onboarding, or whether Roster fits how you
            run work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* FORM */}
          <div className="lg:col-span-3 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="h-1.5 bg-linear-to-r from-cerulean via-pacific to-olive" />

            <div className="p-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-pacific-500 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Okafor"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-cerulean-800 placeholder:text-muted-foreground focus:border-cerulean-400 focus:outline-none focus:ring-2 focus:ring-cerulean-100 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-pacific-500 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Ridgeline Services"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-cerulean-800 placeholder:text-muted-foreground focus:border-cerulean-400 focus:outline-none focus:ring-2 focus:ring-cerulean-100 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-pacific-500 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-cerulean-800 placeholder:text-muted-foreground focus:border-cerulean-400 focus:outline-none focus:ring-2 focus:ring-cerulean-100 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-pacific-500 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(512) 555-0142"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-cerulean-800 placeholder:text-muted-foreground focus:border-cerulean-400 focus:outline-none focus:ring-2 focus:ring-cerulean-100 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-pacific-500 mb-1.5">
                  Crew size
                </label>
                <select className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-cerulean-800 focus:border-cerulean-400 focus:outline-none focus:ring-2 focus:ring-cerulean-100 transition-colors">
                  <option>1–5 people</option>
                  <option>6–20 people</option>
                  <option>21–50 people</option>
                  <option>More than 50</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-pacific-500 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how you route work today."
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-cerulean-800 placeholder:text-muted-foreground focus:border-cerulean-400 focus:outline-none focus:ring-2 focus:ring-cerulean-100 transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-olive px-5 py-3 font-semibold text-white hover:bg-olive-700 transition-colors shadow-md"
              >
                Send message
              </button>

              <p className="text-center text-xs text-muted-foreground">
                We usually reply within one business day.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
                <h2 className="font-semibold text-cerulean">Reach us</h2>
              </div>

              <div className="p-6 space-y-5 text-sm">
                <div className="border-l-2 border-olive-300 pl-3">
                  <p className="text-xs uppercase tracking-wide text-pacific-500">
                    Email
                  </p>
                  <p className="mt-1 font-medium text-cerulean-800">
                    hello@prossfora.com
                  </p>
                </div>

                <div className="border-l-2 border-pacific-300 pl-3">
                  <p className="text-xs uppercase tracking-wide text-pacific-500">
                    Phone
                  </p>
                  <p className="mt-1 font-medium text-cerulean-800">
                    (512) 555-0142
                  </p>
                </div>

                <div className="border-l-2 border-yarrow-300 pl-3">
                  <p className="text-xs uppercase tracking-wide text-pacific-500">
                    Office
                  </p>
                  <p className="mt-1 font-medium text-cerulean-800">
                    1204 Bouldin Ave
                    <br />
                    Austin, TX 78704
                  </p>
                </div>

                <div className="border-l-2 border-cerulean-300 pl-3">
                  <p className="text-xs uppercase tracking-wide text-pacific-500">
                    Hours
                  </p>
                  <p className="mt-1 font-medium text-cerulean-800">
                    Mon–Fri, 8am–6pm CT
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-olive-200 bg-olive-50/50 p-6">
              <h3 className="font-semibold text-olive-900 text-sm">
                Already a customer?
              </h3>
              <p className="mt-2 text-sm text-olive-800">
                Support requests go through the app so we can see the job in
                question.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Demo contact details — replace with your real ones before launch.
        </p>
      </div>
    </div>
  );
}
