import { contractorsData } from "@/lib/data/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

const ContractorDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const contractor = contractorsData.find((c) => c.id === Number(id));

  if (!contractor) notFound();

  //console.log(contractor?.name);
  return (
    <div className="p-6 space-y-6">
      <Link
        href="/admin/contractors"
        className="inline-flex items-center gap-1 text-sm text-pacific-600 hover:text-olive-700 transition-colors"
      >
        ← Back to contractors
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="h-2 bg-linear-to-r from-cerulean via-pacific to-olive" />

        <div className="p-6 flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cerulean">
              {contractor.name}
            </h1>
            {contractor.company && (
              <p className="text-pacific-600">{contractor.company}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium border ${
                  contractor.status === "active"
                    ? "bg-olive-50 text-olive-800 border-olive-200"
                    : "bg-pacific-50 text-pacific-700 border-pacific-200"
                }`}
              >
                {contractor.status}
              </span>
              {contractor.verified && (
                <span className="rounded-full bg-cerulean-50 px-3 py-1 text-xs font-medium text-cerulean-700 border border-cerulean-200">
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Hourly Rate
          </p>
          <p className="mt-1 text-2xl font-bold text-yarrow-700">
            ${contractor.hourlyRate}
            <span className="text-sm font-normal text-muted-foreground">
              /hr
            </span>
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Flat Rate
          </p>
          <p className="mt-1 text-2xl font-bold text-yarrow-700">
            ${contractor.flatRate}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Jobs</h2>
        </div>

        <ul className="divide-y divide-border">
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Water heater replacement
          </li>
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Fence repair - 2 panels
          </li>
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Gutter cleaning and re-pitch
          </li>
          <li className="px-6 py-4 text-sm text-cerulean-800">
            Deck board replacement
          </li>
        </ul>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Contact &amp; Trades</h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 p-6 text-sm">
          <div className="border-l-2 border-olive-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Email
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {contractor.email}
            </dd>
          </div>

          <div className="border-l-2 border-pacific-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Phone
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {contractor.phone}
            </dd>
          </div>

          <div className="sm:col-span-2 border-l-2 border-cerulean-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Address
            </dt>
            <dd className="mt-1 font-medium text-cerulean-800">
              {contractor.address}
            </dd>
          </div>

          <div className="sm:col-span-2 border-l-2 border-yarrow-300 pl-3">
            <dt className="text-xs uppercase tracking-wide text-pacific-500">
              Trades
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {contractor.trades.map((trade: string) => (
                <span
                  key={trade}
                  className="rounded-md bg-olive-50 px-2.5 py-1 text-xs font-medium text-olive-800 border border-olive-200"
                >
                  {trade}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ContractorDetailPage;
