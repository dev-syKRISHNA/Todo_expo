# todo_native

A small Expo + React Native todo app skeleton using Expo Router and Convex for backend data. This project is a work-in-progress and provides a lightweight foundation for building a cross-platform (iOS / Android / Web) todo application.

## Overview

- **Platform:** Expo (React Native)
- **Routing:** `expo-router`
- **Backend / realtime DB:** `convex` (server functions and schema under `convex/`)
- **Language:** TypeScript

This repo contains a simple Todo UI and basic Convex integration for persisting todos. Several areas are still incomplete and marked in the TODOs below.

## Features (implemented / planned)

- Add, list, and remove todos (core UI components present)
- Per-platform run via Expo (`start`, `android`, `ios`, `web`)
- Convex schema and server functions scaffolding under `convex/`

## Quick Setup

Requirements: Node.js (LTS), npm or yarn, and Expo CLI (optional if using `npx`).

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the app (Metro + Expo):

```bash
npm run start
# or run on a specific platform:
npm run android
npm run ios
npm run web
```

Other scripts:

- `npm run reset-project` — project-specific reset helper (see `scripts/reset-project.js`).
- `npm run lint` — run ESLint.

## Project Structure

- `app/` — Expo Router entry + screens (`_layout.tsx`, tabs, pages)
- `components/` — UI components (`Header.tsx`, `TodoInput.tsx`, etc.)
- `convex/` — Convex schema, server functions, and generated API
- `hooks/` — custom hooks (e.g. `useTheme.tsx`)
- `assets/` — images and styles

Notable files:

- `package.json` — scripts and dependencies
- `app/_layout.tsx` — main app layout
- `convex/schema.ts` — data model for Convex

## Development Notes

- The app uses Expo SDK ~54 and React Native 0.81.x. Keep Expo CLI and platform tooling compatible with those versions.
- Convex config and local server usage: see `convex/README.md` (if present) and the Convex docs. The repo includes generated API files under `convex/_generated/`.

## TODO / Roadmap

- Wire up full CRUD flow with Convex (if not already complete).
- Add user authentication or per-user todo lists (Convex auth integration).
- Improve styling and accessibility across screens.
- Add tests and CI linting checks.

## Contributing

Open a PR or file issues for missing features or bugs. If you work on Convex endpoints, update `convex/_generated/` and `convex/README.md` as needed.

## License

This project is currently private. Add a license if you plan to open-source it.
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
