# Python, step by step — Vercel edition

A standalone beginner Python course: 34 lessons and project exercises, an editable Python playground, 128 exercise checks, hints, answers, and browser-local progress. There is no ChatGPT login, API key, database, or application account system.

## Deploy through GitHub and Vercel

1. Extract this ZIP.
2. Create a GitHub repository and upload the contents of `python-step-vercel`: `vercel.json`, `README.md`, and the entire `public` folder. Keep `vercel.json` at the repository root, not inside an extra parent folder.
3. In Vercel, choose **Add New → Project** and import that repository.
4. Use **Other** as the Framework Preset. Keep the Root Directory at the repository root. The included `vercel.json` sets the Output Directory to `public` and leaves the Build and Install commands empty. No environment variables are needed.
5. Deploy, then open the production domain shown in the project's Domains section.

### Let your sister open it without signing in

In **Settings → Deployment Protection**, choose **Standard Protection** if you want preview deployments protected but the production domain publicly accessible. Do not choose **All Deployments** for a login-free production site. If team policy prevents changing this, use a project/team where you can make the production site public.

Share the production domain, not a protected preview or generated deployment URL. Test the link in a private/incognito browser window before sharing it.

## Alternative: deploy from your computer's terminal

With Node.js/npm installed, open a terminal in the extracted `python-step-vercel` folder and run:

```sh
npx vercel login
npx vercel --prod
```

Follow the prompts to choose your Vercel account and create or link the project. No GitHub repository is required for this method.

## Local preview

From this folder, if Python is installed:

```sh
python -m http.server 8000 --directory public
```

Open http://localhost:8000. On Windows, you may need `py` instead of `python`. Serve the files over HTTP; opening index.html directly as a file will not reliably run the worker.

## How it works

- `public/index.html`: page structure.
- `public/style.css`: responsive layout and styling.
- `public/course.js`: lesson content, starting code, answers, and checks.
- `public/app.js`: navigation, editing, local progress, and runtime controls.
- `public/worker.js`: loads Python in a separate browser worker.
- `public/runner.py`: executes code and checks inside that worker. It is a static asset, not a server-side Python function.

The Python engine (Pyodide 0.27.7) loads from cdn.jsdelivr.net, so internet access is needed. Execution happens in the browser. Each run starts fresh; playground files are temporary. Stop terminates the worker, and code execution has a five-second timeout after Python finishes loading.

Code and completion progress are stored in this browser's localStorage. They do not sync across devices and will not automatically transfer from the former ChatGPT-hosted domain. Clearing site data clears progress. The course checks are learning aids, not tamper-proof exam grading.

## Validation

The original implementation's 128 checks passed with its worked answers in Pyodide 0.27.7. The runtime files in this export are unchanged. This package has not been deployed to your Vercel account; perform a quick run/check test after deploying.

## Official deployment references

- Build configuration: https://vercel.com/docs/builds/configure-a-build
- vercel.json: https://vercel.com/docs/project-configuration/vercel-json
- CLI deployment: https://vercel.com/docs/cli/deploy
- Deployment protection: https://vercel.com/docs/deployment-protection
