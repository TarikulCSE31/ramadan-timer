# Ramadan Timer – Full Project Prompt

Use this prompt to understand, replicate, or extend the Ramadan Timer project.

---

## Project overview

**Ramadan Timer** is a single-page Progressive Web App (PWA) that shows a live countdown to Sehri (end of pre-dawn meal) and Iftar (breaking fast) for **Ramadan 2026**, using **Bangladesh Standard Time (BST, UTC+6)**. It supports English and Bengali, 12h/24h time format, browser notifications, adhan audio at Sehri and Iftar, a full-month calendar in a modal, and install-as-app. The UI uses a dark theme with gold/amber accents and fits on one screen without scrolling on typical viewports.

**Live URL:** `https://tarikulcse31.github.io/ramadan-timer/`  
**Repo:** `TarikulCSE31/ramadan-timer`

---

## Tech stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript (no frameworks).
- **Hosting:** GitHub Pages (static).
- **PWA:** `manifest.json`, `sw.js` (service worker), install button and optional install hint toast.
- **Assets:** SVG favicon, optional MP3 adhan files in `audio/`, fallback adhan from a public URL when local files are missing.

---

## Core behavior

1. **Time zone:** All logic uses **Bangladesh time (UTC+6)**. Current date/time and countdowns are computed in BST via `getBangladeshTime()`, `getCurrentDate()`, `getCurrentTime()`.
2. **Ramadan schedule:** A fixed array `ramadanSchedule` holds 30 days (2026-02-19 to 2026-03-20) with `date`, `sehri`, `iftar` (HH:MM), and Bengali `dayName`. Countdown targets are built with `timeToDate(timeString, dateString)`.
3. **Next event:** Before today’s Iftar → countdown to Iftar; after Iftar → countdown to next day’s Sehri. The same rule is used for the main screen and for which day is highlighted in the calendar.
4. **Displayed day:** If current BST time is after today’s Iftar, the UI shows the **next day’s** Ramadan day number and Sehri/Iftar times; otherwise it shows today’s.
5. **Timer:** Updates every second; shows days (if &gt; 24h), hours, minutes, seconds until the next event. Days unit is hidden when countdown &lt; 24h.

---

## Features (implementation notes)

- **Language (EN/BN):** Toggle via button; `translations` object and `t(key)`; cookie `language` (365 days). Default: English.
- **Time format (12h/24h):** Toggle via button; cookie `timeFormat` (365 days). Sehri/Iftar and “current date & time” respect this.
- **Current date & time:** One line showing formatted date and time in BST, using the selected language and time format.
- **Calendar:** Button opens a modal with a table of all 30 days (day number, date, Sehri, Iftar). Highlighted row = same logic as main screen (today or next day after Iftar). Sticky header with close and title; Escape and backdrop click close.
- **Fullscreen:** One button toggles fullscreen; icon switches to “exit” when active. All floating buttons remain visible and positioned in fullscreen.
- **Notifications:** “Enable notifications” button (bell icon) requests permission. At **Sehri** time (BST): notification “Sehri time has ended. Stop eating.” and play **Fajr adhan**. At **Iftar** time: notification “Iftar time. You may break your fast.” and play **Iftar adhan**. Each event is triggered once per day (tracked by date key).
- **Adhan:** Local files `audio/fajr-adhan.mp3` and `audio/iftar-adhan.mp3`. If load fails, fallback to a public-domain adhan URL (e.g. Wikimedia). One playback per event per day.
- **Install app (PWA):** Install button (download icon) always visible when not in standalone. On click: if `beforeinstallprompt` was stored, show native install dialog; else show a short toast with instructions (e.g. “Use the install icon in the address bar or menu → Install Ramadan Timer”). Button hidden when already running as installed app (`display-mode: standalone`).
- **Floating buttons (bottom-right, top to bottom):** Install app, Notifications, Calendar, Language (EN/BN), Time format (24h/12h), Fullscreen. Same styling (gold border/glow), responsive sizes and spacing across breakpoints and fullscreen.

---

## File structure

```
/
├── index.html          # Single page: meta, manifest, PWA meta, structure, modal
├── style.css           # Layout, theme, stars/moon, timer card, buttons, modal, responsive + fullscreen
├── script.js           # Schedule, BST helpers, cookies, i18n, timer, notifications, adhan, calendar, PWA install
├── favicon.svg         # Crescent + star, gold theme
├── manifest.json       # PWA: name, start_url, display standalone, theme/background #0a1628, icon (favicon.svg)
├── sw.js               # Service worker: cache index, style, script, favicon, manifest; fetch fallback
├── sitemap.xml         # Single URL for GitHub Pages
├── robots.txt          # Allow all, Sitemap URL
├── audio/
│   ├── README.txt      # Instructions: add fajr-adhan.mp3, iftar-adhan.mp3
│   ├── fajr-adhan.mp3  # Optional
│   └── iftar-adhan.mp3 # Optional
└── PROMPT.md           # This file
```

---

## UI and layout

- **Background:** Dark navy (`#0a1628`) with subtle diagonal pattern and animated stars; corner crescent moon.
- **Container:** Centered card with header (emoji crescent, title, Bismillah), timer card (Ramadan day, current date/time, next event name, countdown boxes, Sehri/Iftar times).
- **Single viewport:** No scrolling; `overflow: hidden`, fixed height, flex so content fits one screen; responsive with clamp and breakpoints (e.g. mobile, tablet, max-height 600px, max-width 360px).
- **Timer boxes:** Fixed-width numeric boxes for days/hours/minutes/seconds; optional shine animation; numbers centered and visible.
- **Buttons:** Fixed bottom-right; consistent `right` and vertical spacing per breakpoint; icon-only install button; same gold style and hover.

---

## SEO and meta

- **Meta:** description, keywords, author, robots, theme-color, canonical URL.
- **Open Graph:** og:type, url, title, description, locale (en + bn), site_name.
- **Twitter Card:** card, title, description.
- **PWA:** manifest link, apple-mobile-web-app-capable, apple-touch-icon, status-bar-style.

---

## Responsiveness summary

- **Desktop:** Default widths and spacing; buttons 50px, bottom steps 20, 80, 140, 200, 260, 320.
- **Tablet (e.g. 601px–1024px):** Slightly smaller; buttons 45px; matching bottom steps.
- **Mobile (e.g. ≤600px):** Smaller typography and timer; buttons 40px; right 10px; bottom steps 10, 60, 110, 160, 210, 260.
- **Small height (e.g. max-height 600px):** Tighter spacing; buttons 35px; bottom steps 8, 53, 98, 143, 188, 233.
- **Very small (e.g. max-width 360px):** Same as above with 35px buttons and same bottom steps.
- **Fullscreen:** All floating buttons keep position and visibility (z-index, display flex, bottom/right) so they remain usable.

---

## Key functions (script.js)

- `getBangladeshTime()`, `getCurrentDate()`, `getCurrentTime()` – BST.
- `timeToDate(timeString, dateString)` – Builds Date for a given date and HH:MM in BST.
- `getTodaySchedule()`, `getNextDaySchedule()`, `findNextEvent()` – Schedule and next event.
- `formatTime()`, `formatTimeString()`, `formatDate()` – Display with 12h/24h and language.
- `updateTimer()` – Writes date/time, Ramadan day, Sehri/Iftar, next event name, countdown; calls `checkAndTriggerNotificationAndAdhan()`.
- `checkAndTriggerNotificationAndAdhan()` – At Sehri/Iftar (HH:MM match), once per day: show notification and `playAdhan('fajr'|'iftar')`.
- `playAdhan(type)` – Play local MP3 or fallback URL on error.
- `requestNotificationPermission()`, `showNotification()` – Notifications.
- `initCalendar()`, `openCalendarModal()`, `closeCalendarModal()` – Calendar modal and highlight logic.
- `initInstallButton()` – beforeinstallprompt, click handler, install hint toast, hide in standalone.
- Service worker registered on load.

---

## How to replicate or extend

1. **New year:** Update `ramadanSchedule` in `script.js` with new dates and Sehri/Iftar times; adjust calendar title and any “2026” strings.
2. **New timezone:** Replace BST logic with another offset (or a proper timezone library) in `getBangladeshTime()` and `timeToDate()`.
3. **More languages:** Add keys to `translations` and use `t(key)` everywhere; add a language switcher if needed.
4. **Different adhan:** Replace or add files in `audio/` and/or change `ADHAN_FALLBACK_URL` in `script.js`.
5. **Deploy:** Push to GitHub; enable Pages (branch or Actions). Canonical and sitemap should match the final base URL.

---

## Prompt (condensed for AI)

“Build a single-page Ramadan Timer PWA that shows a live countdown to Sehri and Iftar for Ramadan 2026 in Bangladesh time (UTC+6). Include: 30-day schedule with Sehri/Iftar times; EN/BN and 12h/24h toggles with cookies; current date & time in BST; after Iftar show next day’s schedule and highlight; calendar modal with same highlight rule; fullscreen; browser notifications and adhan (Fajr at Sehri, adhan at Iftar) with optional local MP3 and fallback URL; PWA manifest and service worker; install button with fallback hint toast; dark theme with gold accents; one-screen layout; responsive and fullscreen-friendly floating buttons (install, notifications, calendar, language, time format, fullscreen). Use HTML, CSS, and vanilla JS only.”
