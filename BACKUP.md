# Self-Observation backup

The app saves data in Chrome localStorage under:

`personalDashboard`

Before importing a backup, the current browser data is copied to:

`personalDashboardBackup`

Use `Choose folder` in the top navigation to select a backup folder.
Google Drive works well if it is available as a local folder on this Mac.

After a folder is selected, the app writes these files automatically:

`self-observation-backup-latest.json`

`self-observation-backup-YYYY-MM-DD.json`

The app itself works offline from this folder. Google Drive sync only needs internet later, when it uploads the backup file.
