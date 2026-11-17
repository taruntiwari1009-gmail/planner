# Planner Dashboard

A React-based, widget-driven personal planner dashboard. Users can arrange clock, calendar, timer and reminder widgets across dashboard areas, and move widgets into a floating workspace.

## Features

- Date and time clock
- Calendar widget
- Countdown timer
- Reminder list persisted in browser local storage
- Widget gallery with duplicate-widget prevention
- Drag-and-drop positioning for floating widgets
- Move widgets between left, main, right and floating areas

## Tech stack

- React 18
- Create React App (react-scripts)
- React Calendar
- React Draggable
- Browser Local Storage

## Getting started

### Requirements

- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Run tests

```bash
npm test
```

### Create a production build

```bash
npm run build
```

## Project structure

```text
src/
  App.js
  App.css
  index.js
  index.css
  modals/
    WidgetGalleryModal.js
  widgets/
    CalendarWidget.js
    ClockWidget.js
    ReminderListWidget.js
    TimerWidget.js
  styles/
    styles.css
```

## Data storage

Reminder items are stored in the browser's local storage on the current device and browser. They are not synchronized across devices or backed up to a server.

## Current limitations

- Widget layout is held in React state and resets when the page is refreshed.
- Reminders are local to the current browser.
- Notifications are not scheduled in the background.
- The dashboard has not yet been optimized for persistent, cross-device layouts.

## License

No license has been specified. Contact the repository owner before reusing or redistributing this project.
