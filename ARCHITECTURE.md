# boop — architecture & accounts

Snapshot of where every piece of the stack lives. Update as things change.

## Live URLs

- **Production site:** https://boop-gamma.vercel.app
- **Custom domain (pending DNS):** https://boopgo.app
- **Vercel dashboard:** https://vercel.com/theopartys-projects/boop
- **GitHub repo:** https://github.com/boopgo/frontend

## Stack

| Layer | Tool | Status | Notes |
|---|---|---|---|
| Code host | GitHub (`boopgo/frontend`, public) | ✅ live | `main` branch auto-deploys |
| Hosting | Vercel (Hobby, account `theoparty`) | ✅ live | Connected to GitHub, auto-deploys on push |
| Domain | Namecheap — `boopgo.app` | 🟡 DNS pending | A `@` → `76.76.21.21`; CNAME `www` → `cname.vercel-dns.com` |
| Frontend | Single `index.html` + inline CSS | ✅ live | Fraunces serif + Nunito rounded, Pixar-warm palette |
| Waitlist storage | Supabase (not set up) | ❌ TODO | Will be primary DB going forward |
| Transactional email | Resend (not set up) | ❌ TODO | Confirmation emails, launch blast |
| Analytics | — | ❌ TODO | Vercel Analytics or Plausible later |

## Repo layout

```
/Users/theo/Code/boop
├── index.html          # landing page (single-file, inline CSS + JS form handler)
├── api/
│   └── waitlist.js     # Vercel serverless — POST email+audience, inserts Supabase, sends via Resend
├── package.json        # @supabase/supabase-js, resend
├── ARCHITECTURE.md     # this file
├── .env.local          # local secrets (gitignored)
└── .gitignore
```

## Deploy flow

1. Edit `index.html` locally
2. `git push origin main`
3. Vercel auto-builds and pushes to production
4. Branch pushes / PRs get preview URLs automatically

## Environment variables

None yet. When we add Supabase + Resend:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, never NEXT_PUBLIC)
- `RESEND_API_KEY`

Set in: Vercel dashboard → Settings → Environment Variables.

## Brand

- Primary palette: peach `#FFD6A5`, coral `#FF9A8B`, lilac `#C3AED6`, cream `#FFF6EC`, ink `#2A1A2E`
- Type: Fraunces (display, serif) + Nunito (body, rounded)
- Voice: warm, sweet, drama-free, pet-first

## Decisions made so far

- Single static HTML (not a framework) — keeps wow-factor page lean, ~35KB
- Repo is public — Vercel Hobby doesn't support private org repos
- Waitlist will store in **Supabase** (own data) + send via **Resend** (own domain)
- CTA strategy: one email field + audience segmentation (pet parent / investor / press / brand)
