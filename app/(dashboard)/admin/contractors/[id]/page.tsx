import { contractorsData } from "@/lib/data/mockData";
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
    <div>
      <h1>Contractor</h1>
      <div>{contractor.name}</div>
    </div>
  );
};

export default ContractorDetailPage;
