import { employeeData } from "@/lib/data/mockData";

const EmployeeDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const employee = employeeData.find((e) => e.id === Number(id));

  if (!employee) {
    return <div>EMPLOLYEE NOT FOUND</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-cerulean">{employee.name}</h1>
      <p className="text-muted-foreground">{employee.role}</p>

      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-muted-foreground">Employee ID</dt>
          <dd>{employee.employeeId}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Email</dt>
          <dd>{employee.email}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Phone</dt>
          <dd>{employee.phone}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Last Login</dt>
          <dd>{employee.lastLogin}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Address</dt>
          <dd>{employee.address}</dd>
        </div>
      </dl>
    </div>
  );
};

export default EmployeeDetailPage;
