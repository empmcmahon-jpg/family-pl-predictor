# Family Premier League Predictor v12

v12 fixes the gameweek assignment problem in v11.

- Uses the official 2026/27 Premier League fixture calendar to assign Gameweeks 1–38.
- Separates GW4 (Sep 12–14) from GW5 (Sep 18–20), which v11 incorrectly merged because they were exactly four days apart.
- Repairs/migrates v10/v11 picks using stable fixture identity.
- Recalculates completed historical week scores from the actual saved picks + confirmed results.
- Season totals use the repaired completed-week snapshots.
- ESPN remains the results source.
- Do not clear browser storage when upgrading.
