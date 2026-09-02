# Restore Healthcare Solutions

A static-first, multi-page website for Restore Healthcare Solutions Limited.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS 4 with a custom global design system
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

The project uses `output: "export"`. A successful production build creates the deployable static site in `out/`.

## Deploying to Vercel

1. Import the GitHub repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Leave the root directory as the repository root.
4. Use the default install command (`npm install`) and build command (`npm run build`).
5. No environment variables are required for the current frontend-only release.

Vercel detects the Next.js static export automatically. Production response headers are defined in `vercel.json`.

## Content to confirm before launch

- Business and support hours
- Final service coverage area
- Operational service scope and 24-hour availability
- Regulatory registrations or approvals, if applicable
- Safeguarding and complaints contacts
- Privacy contact and final policy review
- Vacancies and recruitment contact details
