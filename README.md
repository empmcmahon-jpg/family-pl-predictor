# Family Premier League Predictor — v8

## What changed
- Match results are now refreshed from ESPN's public Premier League scoreboard feed.
- This fills the gaps caused by TheSportsDB's free 15-event season limit.
- Gameweek scores are calculated from actual completed results.
- Season scores are calculated automatically from completed results.
- Existing family predictions remain in browser local storage.
- ESPN result responses are cached locally to reduce repeat requests.
- GitHub Pages/PWA files are included.

## Deploy
Replace the existing `index.html` in the GitHub repository with the supplied `index.html`.
Also upload/replace:
- `manifest.webmanifest`
- `sw.js`
- `icon-192.png`
- `icon-512.png`

Keep the existing README if you want.

After committing, wait for GitHub Pages to redeploy, then refresh the live app.

Kick-off times continue to display in UAE time (UTC+4).
