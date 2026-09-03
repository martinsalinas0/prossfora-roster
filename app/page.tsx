import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cerulean-50 via-white to-olive-50 flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-cerulean">
            Prossfora
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/welcome/features"
              className="text-cerulean hover:text-yarrow font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/welcome/pricing"
              className="text-cerulean hover:text-yarrow font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/welcome/contact"
              className="text-cerulean hover:text-yarrow font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/auth/sign-in"
              className="px-4 py-2 rounded-lg border border-cerulean text-cerulean hover:bg-cerulean-50 font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

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
            href="/auth/sign-up"
            className="px-8 py-3 rounded-lg bg-yarrow text-white font-semibold hover:bg-yarrow-700 transition-colors shadow-md"
          >
            Get Started
          </Link>
          <p className="text-sm text-muted-foreground">Try a demo</p>
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © Prossfora. All rights reserved.
      </footer>
    </div>
  );
}
