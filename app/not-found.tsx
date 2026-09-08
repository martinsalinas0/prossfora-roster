import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cerulean-50 via-white to-olive-50 flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-2">
        <span className="text-8xl font-bold tracking-tight text-cerulean-200 select-none">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold tracking-tight text-yarrow/80 blur-[1px] select-none">
          404
        </span>
      </div>

      <h1 className="text-2xl font-bold text-cerulean mb-2">
        We couldn&apos;t find that page
      </h1>
      <p className="text-pacific-600 max-w-md mb-8">
        The link may be broken, or the record you&apos;re looking for was moved
        or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/admin"
          className="px-6 py-3 rounded-lg bg-olive text-white font-semibold hover:bg-olive-700 transition-colors shadow-md"
        >
          Back to Dashboard
        </Link>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg border border-cerulean text-cerulean font-semibold hover:bg-cerulean-50 transition-colors"
        >
          Go Home
        </Link>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <span className="h-1.5 w-8 rounded-full bg-cerulean-300" />
        <span className="h-1.5 w-8 rounded-full bg-olive-400" />
        <span className="h-1.5 w-8 rounded-full bg-pacific-400" />
        <span className="h-1.5 w-8 rounded-full bg-yarrow-400" />
      </div>
    </div>
  );
}
