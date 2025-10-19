# Netwo Académie

A Next.js frontend that curates persona-based learning journeys for Netwo operators and reseller partners. The UI is
driven by the Netwo design system and surfaces video playlists maintained in a structured data source.

## Prerequisites

- Node.js 18 or newer (Next.js 14 is configured)
- npm 9+ (the repository includes a `package-lock.json` once dependencies are installed)

## Getting started

```bash
npm install
```

This will install Next.js, React, TypeScript tooling, ESLint, and download the Netwo design system stylesheet vendored in
`src/styles/netwo-design-system.css`.

### Tester le projet après l'installation

Sur macOS (et sur d'autres systèmes), les vérifications suivantes permettent de s'assurer que tout fonctionne après
`npm install` :

```bash
# Lancer le serveur de développement
npm run dev

# Vérifier les règles lint
npm run lint

# Vérifier les types TypeScript
npm run type-check

# Optionnel : simuler le build de production
npm run build
```

Arrêtez le serveur de développement avec `Ctrl + C` une fois vos tests effectués. Les scripts fonctionnent avec Node.js 18+
et npm 9+ installés via [Homebrew](https://brew.sh/) ou l'installeur officiel.

### Development workflow

- `npm run dev` – start the development server on [http://localhost:3000](http://localhost:3000)
- `npm run build` – generate an optimized production build
- `npm run start` – serve the production build locally
- `npm run lint` – run ESLint with the Next.js configuration
- `npm run type-check` – execute TypeScript in no-emission mode for CI environments

## Project layout

```
├── src/
│   ├── components/            # Shared layout and journey components
│   ├── data/                  # Persona definitions and structured video playlists
│   ├── pages/                 # Next.js routes for operators and resellers
│   └── styles/                # Global styles including the Netwo design system bundle
├── public/                    # Static assets (favicon, imagery, etc.)
├── next.config.mjs            # Next.js configuration
└── tsconfig.json              # TypeScript settings
```

The `src/pages` directory includes dedicated routes for each persona (`/operators`, `/resellers`) and journey type
(`/commercial`, `/technical`). Navigation is generated from the shared metadata declared in `src/data/personas.ts`.

## Netwo design system integration

Global theming is applied by importing the official design system stylesheet into `src/styles/globals.css`. The file
`src/styles/netwo-design-system.css` is a vendored copy of the latest Storybook build from
[designsystem.netwo.io](https://designsystem.netwo.io/). If Netwo publishes an updated bundle:

1. Download the new CSS artifact from the design system site.
2. Replace the contents of `src/styles/netwo-design-system.css` with the refreshed file.
3. Restart the Next.js dev server to pick up the new tokens and global styles.

The layout and component styling rely on the CSS variables exposed by the design system to stay visually consistent with
the rest of the Netwo product suite.

## Updating personas and video content

Persona copy and journey descriptions live in `src/data/personas.ts`. Each entry defines:

- `id`, `label`, and `segment` metadata for navigation
- `defaultJourney` for quick links from the homepage
- Journey-level statements that populate hero sections on the detail pages

Video playlists are stored in `src/data/videos.ts` using the following schema:

```ts
export interface Playlist {
  playlistId: string;
  playlistTitle: string;
  playlistDescription: string;
  cmsCollection: string;
  videos: Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    embedUrl: string;
    topics: string[];
    cmsId: string;
  }>;
}
```

To add or update content:

1. Locate the persona (`operators` or `resellers`) and journey (`commercial` or `technical`) in `videoLibrary`.
2. Update metadata such as `playlistTitle`, `playlistDescription`, or `cmsCollection` to mirror the CMS source.
3. Append, edit, or remove entries in the `videos` array. Each video card supports YouTube or Vimeo embed URLs.
4. Commit the changes so downstream environments stay in sync with the CMS inventory.

## Conventions

- Keep reusable presentation logic inside `src/components`.
- Use the shared `JourneyPage` component to add future personas or journeys with minimal duplication.
- When integrating new Netwo design system components, prefer design tokens (CSS variables) over bespoke colours.

Happy enabling! 🚀
