# Nexcent Landing Page

A pixel-perfect, responsive recreation of the provided Figma landing page, built as part of the SDE-1 technical assessment.

## Live Design Reference

[Figma Design](https://www.figma.com/proto/NX5vl6kszVZ0OFVLAKJtSn/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=5-573)

## Tech Stack

- **Next.js** — App Router
- **React** — Component-based UI
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Responsive styling
- **Next/Image** — Optimized image rendering

## Project Overview

The application recreates the provided Nexcent landing page while maintaining a clean, scalable, and responsive architecture.

The implementation focuses on:

- Pixel-accurate desktop layout
- Responsive behavior across screen sizes
- Reusable React components
- Structured content/data separation
- Server-side rendering with Next.js
- Accessible semantic HTML
- Optimized images using `next/image`
- Maintainable and scalable project organization

## Project Structure

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── layout/
│   └── Header.tsx
└── sections/
    ├── Achievements.tsx
    ├── Calendar.tsx
    ├── Clients.tsx
    ├── Community.tsx
    ├── CommunityCards.tsx
    ├── CommunityUpdates.tsx
    ├── Customers.tsx
    ├── CTA.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    └── Unlock.tsx

data/
├── achievements.ts
├── calendar.ts
├── clients.ts
├── community.ts
├── communityCards.ts
├── communityUpdates.ts
├── cta.ts
├── customers.ts
├── footer.ts
├── hero.ts
├── navigation.ts
└── unlock.ts

public/
└── images/
    ├── achievements/
    ├── community/
    ├── community-updates/
    ├── customer/
    ├── icons/
    ├── mobile-login/
    ├── client-*.png
    ├── illustration.png
    ├── logo.png
    └── logo-white.png
