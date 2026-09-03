import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              ProssFora Roster
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            A modern platform to connect with contractors, assign work, generate
            quotes, and handle invoicing—all in one professional workflow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gray-900 text-white font-medium shadow hover:bg-gray-800 transition">
              <p>Login</p>
              <Link href="/login">Login</Link>
            </button>

            <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium hover:border-gray-400 transition"></button>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6"></div>
            <h3 className="text-lg font-semibold mb-2">
              Streamlined Assignment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Assign and manage jobs effortlessly with a clean, centralized
              system.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6"></div>
            <h3 className="text-lg font-semibold mb-2">Professional Quotes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generate polished quotes that help you win more clients and build
              trust.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6"></div>
            <h3 className="text-lg font-semibold mb-2">Seamless Invoicing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Handle invoices and payments without friction, all in one
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
