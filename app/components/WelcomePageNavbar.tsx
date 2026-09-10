import Link from "next/link";
import React from "react";

const WelcomePageNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-cerulean">
          <Link href="/welcome">Prossfora Roster</Link>
        </h1>

        <div className="flex items-center gap-6">
          <Link
            href="/welcome/features"
            className="text-sm font-medium text-pacific-600 hover:text-cerulean transition-colors"
          >
            Features
          </Link>

          <Link
            href="/welcome/pricing"
            className="text-sm font-medium text-pacific-600 hover:text-cerulean transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/welcome/contact"
            className="text-sm font-medium text-pacific-600 hover:text-cerulean transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default WelcomePageNavbar;
