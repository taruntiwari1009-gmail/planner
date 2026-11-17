import React, { useEffect, useState } from "react";

const readReminders = () => {
  try {
    const stored = window.localStorage.getItem("reminderList");
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Could not read saved reminders:", error);
    return [];
  }
};

export default function ReminderListWidget() {
  const [reminderListData, setReminderListData] = useState(readReminders);

  useEffect(() => {
    try {
      window.localStorage.setItem("reminderList", JSON.stringify(reminderListData));
    } catch (error) {
      console.error("Could not save reminders:", error);
    }
  }, [reminderListData]);

  const addReminder = () => {
    setReminderListData((current) => [
      ...current,
      { id: `${Date.now()}-${current.length}`, title: "", datestamp: "" },
    ]);
  };

  const updateReminder = (id, title) => {
    setReminderListData((current) =>
      current.map((reminder, index) =>
        (reminder.id ?? String(index)) === id
          ? { ...reminder, title, datestamp: new Date().toISOString() }
          : reminder
      )
    );
  };

  const removeReminder = (id) => {
    setReminderListData((current) =>
      current.filter((reminder, index) => (reminder.id ?? String(index)) !== id)
    );
  };

  return (
    <div className="reminder-widget" style={{ minWidth: 300 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p>Reminder List</p>
        <button type="button" onClick={addReminder}>+ New</button>
      </div>
      {reminderListData.length === 0 ? (
        <p className="reminder-empty">No reminders yet.</p>
      ) : (
        reminderListData.map((reminder, index) => {
          const reminderId = reminder.id ?? String(index);
          return (
            <div className="reminder-container" key={reminderId}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <input
                  className="text-input"
                  aria-label={`Reminder ${index + 1}`}
                  value={reminder.title || ""}
                  onChange={(event) => updateReminder(reminderId, event.target.value)}
                />
                <button
                  type="button"
                  aria-label={`Delete reminder ${index + 1}`}
                  onClick={() => removeReminder(reminderId)}
                >
                  ×
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
