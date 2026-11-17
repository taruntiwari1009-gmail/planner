import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/styles.css";

export default function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar-widget">
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        aria-label="Planner calendar"
      />
      <p className="calendar-selected-date">
        Selected: {selectedDate.toLocaleDateString(undefined, {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
