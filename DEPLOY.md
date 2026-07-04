# Deploy: Neon + Render + Vercel

Three services. Do them in order — Render needs Neon's URL, Vercel needs Render's URL, Render needs Vercel's URL (add it last).

## 1. Neon (database)

1. Create a project at [neon.tech](https://neon.tech).
2. Copy the **pooled** connection string. It must end with `?sslmode=require`, e.g.
   `postgresql://user:pass@ep-xxx-pooler.region.aws.neon.tech/dbname?sslmode=require`
3. Keep it — this is `DATABASE_URL` for Render.

No schema step needed here; the backend runs `drizzle-kit push` on every boot.

## 2. Render (backend)

The repo has `render.yaml`, so use **New → Blueprint** and point it at this repo.

Set these env vars in the dashboard (the ones marked `sync: false`):

| Var | Value |
|-----|-------|
| `DATABASE_URL` | Neon string from step 1 |
| `FRONTEND_URL` | your Vercel URL (fill after step 3) |
| `ADMIN_EMAIL` | first owner login |
| `ADMIN_PASSWORD` | ≥ 8 chars |

`JWT_SECRET` auto-generates, `NODE_ENV`/`ADMIN_GYM_NAME` are preset. Deploy → note the URL, e.g. `https://aibdsc-backend.onrender.com`.

Health check: `GET /health` → `{"data":{"ok":true,...}}`.

> Free plan sleeps after inactivity; first request after idle takes ~30s to wake.

## 3. Vercel (frontend)

Import the repo. `vercel.json` sets the build; leave the framework preset alone.

Add one env var:

| Var | Value |
|-----|-------|
| `VITE_API_URL` | Render backend URL from step 2 (no trailing slash) |

Deploy → note the URL, e.g. `https://aibdsc.vercel.app`.

## 4. Close the loop

Go back to Render → set `FRONTEND_URL` to the Vercel URL → redeploy. This lets CORS accept the browser.

Done. Log in with `ADMIN_EMAIL` / `ADMIN_PASSWORD`.
