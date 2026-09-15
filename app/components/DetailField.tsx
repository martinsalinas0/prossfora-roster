const accentBorders = {
  olive: "border-olive-300",
  pacific: "border-pacific-300",
  cerulean: "border-cerulean-300",
  yarrow: "border-yarrow-300",
} as const;

const inputClass =
  "mt-1 w-full rounded-md border border-input bg-card px-2 py-1.5 text-sm font-medium text-cerulean-800 outline-none focus:ring-2 focus:ring-cerulean-400";

const DetailField = ({
  label,
  value,
  accent = "olive",
  span = false,
  editing = false,
  onChange,
  inputType = "text",
}: {
  label: string;
  value: React.ReactNode;
  accent?: keyof typeof accentBorders;
  span?: boolean;
  editing?: boolean;
  onChange?: (value: string) => void;
  inputType?: "text" | "email" | "tel" | "number";
}) => (
  <div
    className={`border-l-2 ${accentBorders[accent]} pl-3 ${
      span ? "sm:col-span-2" : ""
    }`}
  >
    <dt className="text-xs uppercase tracking-wide text-pacific-500">
      {label}
    </dt>
    {editing && onChange ? (
      <input
        type={inputType}
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    ) : (
      <dd className="mt-1 font-medium text-cerulean-800">{value}</dd>
    )}
  </div>
);

export default DetailField;
