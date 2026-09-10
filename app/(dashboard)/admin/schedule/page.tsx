"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data/mockData";

const localizer = momentLocalizer(moment);

const SchedulePage = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Scheduled
          </p>
          <p className="mt-2 text-3xl font-bold text-cerulean">26</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            This Week
          </p>
          <p className="mt-2 text-3xl font-bold text-olive-700">9</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Unassigned
          </p>
          <p className="mt-2 text-3xl font-bold text-yarrow-700">5</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-pacific-500">
            Contractors Out
          </p>
          <p className="mt-2 text-3xl font-bold text-pacific-700">7</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border bg-cerulean-50/60 px-6 py-4">
          <h2 className="font-semibold text-cerulean">Schedule</h2>
          <div className="hidden sm:flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-pacific" />
              <span className="text-pacific-600">Scheduled</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-olive" />
              <span className="text-pacific-600">In Progress</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-yarrow" />
              <span className="text-pacific-600">Urgent</span>
            </span>
          </div>
        </div>

        <div className="p-4 h-[720px]">
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            views={["month", "week", "day"]}
            min={new Date(2026, 0, 1, 7, 0)}
            max={new Date(2026, 0, 1, 19, 0)}
          />
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
