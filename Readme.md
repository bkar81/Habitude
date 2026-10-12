# Habitude — Personal Habit & Activity Tracker

**Build Consistency. Become Better.**

Version **1.0.0** · Local-first · Mobile-friendly

Habitude helps you build consistency by recording daily activity statuses, adding a short daily note, and reviewing your progress over time. It runs in your browser and keeps your data on your device by default. Optional Google Drive synchronization is available when you explicitly connect and use it.

## What Habitude does

- Record each activity as **Completed**, **Missed**, or **Not Entered**.
- Add a daily note or mini journal for thoughts, reflections, small wins, and reminders.
- Manage your activity list: add, rename, reorder, activate, deactivate, and remove activities.
- Keep inactive activities in historical reports so earlier progress remains visible.
- Review progress using **Day, Week, Month, Year,** or **Custom** date ranges.
- Filter and search activities in Analysis.
- View a visual progress matrix with activity totals, percentages, and day totals.
- Select a date in the progress matrix to open that date in Home.
- Share or download the analysis report as a PNG image.
- Export the analysis report to CSV.
- Create a full JSON backup and restore it later.
- Export or import entries-only CSV files containing activity statuses and daily notes without replacing the activity master and settings.
- Switch between dark and light themes.
- Choose whether to allow pinch-zoom.
- Use the bottom navigation to move between Home, Analysis, Settings, and About while retaining each page's scroll position.

## Recording a day

1. Open **Home** and select the date you want to record.
2. For each active activity, choose **Completed**, **Missed**, or **Not Entered**.
3. Add an optional daily note.
4. Select **Save day**.

**Not Entered** means no status has been recorded for that activity on that date. It is different from **Missed**. Only active activities appear in Home; historical activities remain available in Analysis.

## Understanding Analysis

Choose a reporting period:

- **Day** — one date.
- **Week** — the week containing the selected date.
- **Month** — the selected calendar month.
- **Year** — the selected calendar year.
- **Custom** — a date range you choose.

Use the activity filter or search box to focus the report. The progress matrix summarizes statuses across the selected dates and activities. Historical entries remain reportable after an activity is deactivated. Dates in the future are not included.

Use **Share PNG** to share the visual report where the browser supports sharing, or **Download PNG** to save an image. The report can also be exported as CSV for spreadsheet analysis. The CSV export does not require Google Sheets.

## Settings

### Activity

Manage the activity master and drag activities to change their order. Activating an activity makes it available for daily entry. Deactivating an activity hides it from Home without removing its history from Analysis. Renaming an activity updates the name displayed in historical reports while preserving its history.

### Backup

Habitude provides two backup formats:

- **Full JSON backup / restore** — includes activities, settings, daily entries, and notes. Restoring a JSON backup replaces the current local data after confirmation.
- **Entries CSV export / import** — carries daily activity statuses and notes without replacing the activity master or app settings.

The Analysis page also offers a CSV export of the currently selected report. Keep regular backups, especially before restoring data or resetting the app.

**Reset App Data** clears daily entries and custom settings on this device and restores the default activities and appearance settings. It does not delete a backup already stored in Google Drive.

## Optional Google Drive synchronization

Habitude works locally without a Google account. Google Drive is contacted only when you explicitly connect and choose a synchronization action. Habitude uses a JSON file named `habitude-sync.json`; it does **not** use Google Sheets.

Available actions include:

- **Connect Google Drive** — authorize the app to access the Drive file it manages.
- **Sync now** — compare local and Drive data and present the appropriate synchronization choices.
- **Upload local to Drive** — upload the local data to Drive.
- **Restore Drive to local** — replace local data with the Drive copy after confirmation.
- **Disconnect** — disconnect the current Google Drive session.

Sync compares local and Drive data against the last-synchronized snapshot when one is available. When both copies have changed, the app offers choices to resolve the difference. During a merge, daily records are matched by date and activity ID; for matching records with conflicting values, the local value is retained. For matching activity IDs, local activity settings take precedence.

**Important:** Google Drive synchronization has not yet been verified end-to-end for this release. Test connection, upload, restore, and conflict handling with non-critical sample data before relying on it as your only backup. Keep a separate JSON backup.

### Using Google Drive in your own hosted copy

If you host your own copy, configure a Google OAuth client for your deployment and authorize the exact website origin in your Google Cloud configuration. The OAuth client ID embedded in the source is deployment-specific; do not assume it will work for a different domain. Google sign-in requires an internet connection. Local recording and analysis remain available without Drive connectivity.

## Privacy and local storage

Habitude stores activities, settings, daily statuses, notes, and synchronization metadata in the browser's local storage. Normal local use does not send this data to a Habitude application server. Your browser data may be lost if you clear site data, remove browser storage, or reset the app, so export backups regularly.

When you use Google Drive synchronization, the data included in the synchronization file is sent to your connected Google Drive account. Use only an account and device you trust. Browser capabilities and sharing behaviour may vary by browser and operating system.

See `privacy.html` and `terms.html` if those companion documents are included in your hosted copy.

## Running Habitude

- **Use locally:** Open the HTML file in a modern browser. Some browser features, including Google sign-in and installability, may require the app to be hosted over HTTPS.
- **Host it:** Place the app HTML file on a static host such as GitHub Pages and open the published address in a supported browser.
- **Install:** If the browser and hosting setup offer installation, use the browser's **Install app** or **Add to Home screen** option.

Habitude is designed around a single HTML app file with embedded CSS and JavaScript. Google Drive sign-in requires internet access; local entry and analysis are designed to work without connecting to Google Drive.

## Files

The main application is `Habitude_index_20261012_234800.html` in the current working version. For a repository deployment, you may name the published app file `index.html`. Keep the README files alongside the hosted app:

- `index.html` (the published app file)
- `Readme.md`
- `Readme.html`
- `privacy.html` and `terms.html` if supplied for the deployment

## Version

**Habitude 1.0.0**

**Build Consistency. Become Better.**
