import { notFound } from "next/navigation";
import {
  jobsData,
  quotesData,
  customerInvoicesData,
} from "@/lib/data/mockData";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) notFound();

  // join on jobId — the stable string key
  const quote = quotesData.find((q) => q.jobId === job.jobId);
  const invoice = customerInvoicesData.find((i) => i.jobId === job.jobId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-cerulean">{job.title}</h1>
      <p className="text-muted-foreground">{job.description}</p>

      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-muted-foreground">Customer</dt>
          <dd>{job.customer}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Contractor</dt>
          <dd>{job.contractor ?? "Unassigned"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Status</dt>
          <dd>{job.status.replace("_", " ")}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Scheduled</dt>
          <dd>{job.scheduledDate ?? "Not scheduled"}</dd>
        </div>
      </dl>

      {quote && (
        <p className="mt-4">
          Quote {quote.quoteNumber} — ${quote.total}
        </p>
      )}
      {invoice && (
        <p>
          Invoice {invoice.invoiceNumber} — {invoice.status}
        </p>
      )}
    </div>
  );
}
