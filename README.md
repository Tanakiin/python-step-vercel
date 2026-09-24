# Python lessons — no database

A static, dark-mode Python course with 34 lessons and projects, an editable Python playground, and 128 exercise checks. No database, account service, API keys, or environment variables are needed.

## Update your existing Vercel site

1. Extract this ZIP. Copy the contents of `python-step-vercel` into your existing Git repository folder. Replace matching files. Keep your existing `.git` folder.
2. If you previously copied the database edition, delete its obsolete `public/config.js`, `supabase/` folder, and `README.old.md`. This edition does not reference those files.
3. Commit and push:

   ```sh
   git add .
   git commit -m "Use browser profiles without a database"
   git push
   ```

4. Vercel deploys the connected repository. The included configuration uses the Other framework preset, the public output directory, and no install or build step.

For a new project, upload this folder's contents to a GitHub repository and import it into Vercel. Share the public production domain after deployment.

## Save progress

- The profile button is in the top right. Open it and add a name for each learner.
- Switching profiles restores that learner's code, program inputs, completed lessons, and current lesson.
- Changes save automatically in the current browser. Reopening the same site restores the last active profile.
- Profiles are local conveniences, not password-protected accounts. Anyone using this browser can select a profile.
- Other browsers, devices, and domains have separate saves. To move progress, choose **Export backup** on the old device and **Import backup** on the new one.
- Import creates another profile and never replaces an existing one. Repeated names receive a number.
- Clearing site data or leaving a private browsing session can remove local saves. Keep an exported backup if you want a lasting copy.
- If browser storage is blocked or full, the page displays a warning. Export a backup before closing.
- Earlier guest saves on the same domain are migrated to the initial Learner profile when available. This package does not access any former cloud account data.

## Run locally

Serve the public folder over HTTP; opening index.html directly as a file is not supported by the Python worker.

```sh
python -m http.server 8000 --directory public
```

On Windows, use `py` in place of `python` if needed. Open http://localhost:8000.

## Python execution

Pyodide 0.27.7 loads from jsDelivr and runs Python in a separate browser worker. Internet is needed to load the engine. Each run starts fresh; playground files are temporary. Stop terminates a running program; execution also stops automatically after five seconds.

## Files

- public/index.html and public/style.css — interface
- public/course.js — lessons, examples, exercises, answers, and checks
- public/app.js — editor, navigation, and profile controls
- public/profiles.js — local saving and JSON backup handling
- public/worker.js and public/runner.py — Python engine integration
- vercel.json — static hosting configuration

## Validation

The 128 exercise checks and worked answers retain the previously verified Python engine behavior. This edition was checked for profile isolation, restoration, input and lesson saving, backup round trips, invalid imports, duplicate names, simultaneous profiles in separate tabs, storage failures, legacy guest migration, JavaScript syntax, and local asset references. A full browser visual check was unavailable in the build environment.
