# Python lessons — small steps edition

A static, database-free Python course for complete beginners. Dark interface, 194 short steps, a browser Python editor, 373 coding checks, and five reading checks. No account or API key setup.

## Update your Vercel site

1. Extract the ZIP. Copy the contents of `python-step-vercel` into your existing repository, replacing the matching files. Keep your existing `.git` folder.
2. If files remain from the older Supabase edition, remove `public/config.js`, the `supabase` folder, and `README.old.md`. They are not used.
3. Commit and push to your connected repository:

```sh
git add .
git commit -m "Rewrite Python course into small learning steps"
git push
```

The included vercel.json serves `public` directly. No install or build command is required. Your connected Vercel project redeploys after the push.

## Learn at your own pace

Each step introduces one focused idea, explains an example, and asks for one small change or a short exercise. Projects are divided into stages throughout the course. Next never runs automatically. Lessons remain freely accessible for review.

Run explores the code. Check evaluates the exercise requirements, including alternative values and boundaries where appropriate. Green checks and Done mark success. Editing code clears that lesson’s completion until it passes again. Hints and solutions remain collapsed until opened. Program input appears only for steps that need it. Examples that are explanatory fragments have no Use example button.

The built-in function reference is available from the sidebar. COURSE-OUTLINE.md lists all steps in their learning order.

## Profiles and existing progress

Profiles save code, inputs, completion, and the current step in localStorage in the same browser on the same site address. They are local profiles, not password-protected accounts. Anyone using that browser can switch profiles. Different devices, browsers, or site addresses have separate saves.

This edition has a different course structure. On the same site, names from the earlier 34-lesson database-free edition are carried forward. Their old work is archived in each profile and included in its exported backup. New steps start fresh; old lesson numbers are never treated as completion of unrelated new steps. The earlier browser save is also left intact.

New backup exports use version 2 and include the curriculum identifier. Importing a version 1 backup creates a separate profile with its old work archived and the new course unstarted. Importing a version 2 backup restores the new course progress. Imports do not overwrite another profile.

Export a backup from Profiles before clearing browser data or moving devices. Private browsing may discard local saves when closed. Automatic cross-device sync is not provided.

## Run locally

From the project directory:

```sh
python -m http.server 8000 --directory public
```

Open http://localhost:8000. Use an HTTP server rather than opening index.html directly.

## Python runtime and practice files

Pyodide loads from the jsDelivr CDN; an internet connection is needed. Python runs in a dedicated worker, with Stop and a five-second execution timeout. An endless loop can be stopped without reloading the course. Output is limited.

File exercises use the worker’s temporary virtual filesystem. It resets on each Run or Check. Your computer’s files are not edited. The site saves code drafts and course progress, not files created inside Python.

## Validation

All 189 coding lesson solutions passed all 373 checks using the included runner under CPython. No unfinished starter passed all of its checks. Five reading checks were structurally validated. Profile migration, old-save preservation, isolation, reload, inputs, completion, backup imports/exports, multiple profile tabs, and unavailable-storage behaviour passed local tests. JavaScript syntax, HTML IDs, asset references, and ZIP integrity were checked. A live browser/Pyodide visual run was not performed for this rewrite.
