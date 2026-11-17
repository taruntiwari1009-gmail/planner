import React, { useEffect, useState } from "react";

const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
};

export default function TimerWidget() {
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return undefined;

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (isRunning && remainingSeconds === 0) {
      setIsRunning(false);
      window.alert("Timer is up!");
    }
  }, [isRunning, remainingSeconds]);

  const handleTimeChange = (event) => {
    const nextValue = Number(event.target.value);
    if (Number.isFinite(nextValue) && nextValue >= 0) {
      setRemainingSeconds(Math.floor(nextValue));
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingSeconds(0);
  };

  return (
    <div className="timer-widget" style={{ minWidth: 300 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p>Timer</p>
      </div>
      <div className="timer-container">
        <div className="timer-display">
          {isRunning ? (
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
              {formatTime(remainingSeconds)}
            </p>
          ) : (
            <input
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              aria-label="Timer duration in seconds"
              className="text-input"
              value={remainingSeconds}
              onChange={handleTimeChange}
            />
          )}
        </div>
        <div className="timer-controls" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            type="button"
            disabled={!isRunning && remainingSeconds === 0}
            onClick={() => setIsRunning((running) => !running)}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
