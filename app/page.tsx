import Link from "next/link";
import WelcomePageNavbar from "./components/WelcomePageNavbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cerulean-50 via-white to-olive-50 flex flex-col">
      <WelcomePageNavbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cerulean max-w-2xl mb-4">
          Manage jobs, contractors, and payments in one place
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-10">
          Prossfora streamlines your operations—from task requests and
          scheduling to invoices and analytics.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/admin"
            aria-describedby="cta-hint"
            className="px-8 py-3 rounded-lg bg-yarrow text-white font-semibold hover:bg-yarrow-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yarrow transition-colors shadow-md"
          >
            Get Started
          </Link>
          <p id="cta-hint" className="text-sm text-muted-foreground">
            Try a demo — no account needed
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prossfora. All rights reserved.
      </footer>
    </div>
  );
}
