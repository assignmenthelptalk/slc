# SLC Elite Water Softener

Lead-gen site for **slcelitewatersoftener.com** (Salt Lake City, UT). Built from `water-softener-boilerplate` (Astro + Tailwind v4, static output, Vercel).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build (35 pages)
```

## What is in the site

- The boilerplate's 22 fixed pages (home, water quality, hard water, installation, repair, FAQ, and so on)
- 12 city pages for Salt Lake Valley suburbs, generated from `src/serviceAreas.ts` at `/water-softener-<city>-ut/`
- `/thank-you/` as the quote form's redirect target

## Before launch (all in `src/site.config.ts`)

| Field | Status |
|---|---|
| `phoneNumber`, `businessEmail` | Placeholders. The quote form stays disabled until the email is set. |
| `socials` | Blank URLs are hidden. Fill in each profile once created. |
| `founderNames`, `foundedYear`, `customersServed`, `projectsDelivered` | Placeholders for the About page. |
| `gpgLow` / `gpgHigh` | Estimate of 10-18 GPG. Verify against the Salt Lake City Department of Public Utilities report. |

City pages (`src/serviceAreas.ts`) have `dataVerified: false` and an unchecked QDP search-demand note. Confirm each city's hardness and water provider, and run the keyword check, before launch.

Images on inner sections are `placehold.co` placeholders from the boilerplate. Replace them with real WEBP photos (max 1200px wide).

The earlier custom-built design is preserved on the `custom-design` git branch.
