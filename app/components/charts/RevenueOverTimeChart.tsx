"use client";

import { useState } from "react";

const currency = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

const shortDate = (iso: string) => {
  const [, m, d] = iso.split("-").map(Number);
  return `${m}/${d}`;
};

const niceMax = (value: number) => {
  if (value <= 0) return 1;
  const magnitude = 10 ** Math.floor(Math.log10(value));
  return Math.ceil(value / (magnitude / 2)) * (magnitude / 2);
};

const RevenueOverTimeChart = ({
  payments,
}: {
  payments: { date: string; amount: number; status: string }[];
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const totalsByDate = payments
    .filter((p) => p.status === "succeeded" || p.status === "processed")
    .reduce<Record<string, number>>((acc, p) => {
      acc[p.date] = (acc[p.date] ?? 0) + p.amount;
      return acc;
    }, {});

  const days = Object.entries(totalsByDate)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, total]) => ({ date, total }));

  if (days.length === 0) {
    return (
      <p className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
        No revenue recorded yet.
      </p>
    );
  }

  const width = 600;
  const height = 220;
  const padTop = 16;
  const padBottom = 28;
  const padLeft = 56;
  const padRight = 16;
  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const maxVal = niceMax(Math.max(...days.map((d) => d.total)));
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(maxVal * f));

  const x = (i: number) =>
    padLeft + (days.length === 1 ? 0 : (i / (days.length - 1)) * chartW);
  const y = (v: number) => padTop + chartH - (v / maxVal) * chartH;

  const linePath = days
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(d.total)}`)
    .join(" ");
  const areaPath = `${linePath} L${x(days.length - 1)},${y(0)} L${x(0)},${y(
    0,
  )} Z`;

  const last = days[days.length - 1];

  return (
    <div className="flex-1 p-3 relative">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        role="img"
        aria-label="Revenue over time"
      >
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={padLeft}
              x2={width - padRight}
              y1={y(t)}
              y2={y(t)}
              className="stroke-border"
              strokeWidth={1}
            />
            <text
              x={padLeft - 8}
              y={y(t)}
              textAnchor="end"
              dominantBaseline="middle"
              className="fill-muted-foreground text-[9px]"
            >
              {currency(t)}
            </text>
          </g>
        ))}

        <path d={areaPath} className="fill-cerulean-500/10" />
        <path
          d={linePath}
          fill="none"
          className="stroke-cerulean-500"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {days.map((d, i) => (
          <g key={d.date}>
            <circle
              cx={x(i)}
              cy={y(d.total)}
              r={4}
              className="fill-cerulean-500 stroke-card"
              strokeWidth={2}
            />
            <circle
              cx={x(i)}
              cy={y(d.total)}
              r={10}
              className="fill-transparent cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
            />
            <text
              x={x(i)}
              y={height - 8}
              textAnchor="middle"
              className="fill-muted-foreground text-[9px]"
            >
              {shortDate(d.date)}
            </text>
          </g>
        ))}

        <text
          x={x(days.length - 1)}
          y={y(last.total) - 10}
          textAnchor="end"
          className="fill-cerulean-800 text-[10px] font-semibold"
        >
          {currency(last.total)}
        </text>
      </svg>

      {hovered !== null && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+8px)] whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs shadow-sm"
          style={{
            left: `${(x(hovered) / width) * 100}%`,
            top: `${(y(days[hovered].total) / height) * 100}%`,
          }}
        >
          <span className="font-semibold text-cerulean-800">
            {currency(days[hovered].total)}
          </span>
          <span className="text-muted-foreground">
            {" "}
            · {shortDate(days[hovered].date)}
          </span>
        </div>
      )}
    </div>
  );
};

export default RevenueOverTimeChart;
