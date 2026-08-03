import { SpecRow } from "@/types";

export function SpecsList({ rows }: { rows: SpecRow[] }) {
  return (
    <div className="border-2">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`flex items-center justify-between gap-3 px-3.5 py-2 ${
            i < rows.length - 1 ? `border-b-2` : ""
          }`}
        >
          <span className="uppercase tracking-wide">{row.label}</span>
          <span className="text-right font-bold">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
