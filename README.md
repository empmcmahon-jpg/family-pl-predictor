# Family Premier League Predictor v11

Upload these files to the existing GitHub Pages repository.

v11 fixes:
- Stable fixture-key storage using UAE date + home team + away team.
- Migrates v10 and older saved picks without requiring re-entry where fixture identity can be matched.
- Historical completed gameweek scores are saved and used for the Season leaderboard.
- Results are only treated as completed when ESPN reports a completed/post/final state, with a cautious historical fallback.
- Current-day matches remain editable for catch-up.
- Week 4 picks are isolated from other gameweeks.
- ESPN remains the result source; TheSportsDB/Sporting Events provide fixture details.
