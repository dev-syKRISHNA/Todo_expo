# 📝 Todo Native App

> A React Native todo application built with **Expo**, **Expo Router**, and **Convex**. This is a **learning project** currently under development.

## 🎯 About This Project

This project is part of a learning journey exploring modern cross-platform mobile development. It combines:

- **Expo & React Native** — Build iOS, Android, and Web apps from a single codebase
- **Expo Router** — File-based routing similar to Next.js
- **Convex** — Backend-as-a-service for real-time data syncing and server functions
- **TypeScript** — Type-safe development

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React Native, Expo |
| **Navigation** | Expo Router |
| **Backend** | Convex |
| **Language** | TypeScript |
| **Linting** | ESLint |

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** or **yarn**
- **Expo CLI** (optional — `npx` works too)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo_native
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment (if needed for Convex):
```bash
# Follow Convex setup instructions
npx convex dev
```

### Running the App

Start the development server:
```bash
npm run start
```

Run on specific platforms:
```bash
npm run android    # Android emulator
npm run ios        # iOS simulator
npm run web        # Web browser
```

### Other Commands

- `npm run lint` — Check code with ESLint
- `npm run reset-project` — Reset project to initial state

## 📁 Project Structure

```
app/              # Expo Router screens and layout
├── _layout.tsx   # Root layout
├── (tabs)/       # Tab-based navigation
│   ├── index.tsx
│   └── settings.tsx
assets/           # Images and styling
components/       # Reusable UI components
├── TodoInput.tsx
├── Header.tsx
├── EmptyState.tsx
└── LoadingSpinner.tsx
convex/           # Backend schema and functions
├── schema.ts
├── todos.ts
hooks/            # Custom React hooks
├── useTheme.tsx
```

## 🚀 Features

- ✅ Add, view, and delete todos
- ✅ Persistent data with Convex
- ✅ Cross-platform support (iOS/Android/Web)
- 🔄 Real-time data sync
- 🎨 Theme support

## 📚 Learning Resources

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Guide](https://docs.expo.dev/routing/introduction/)
- [Convex Documentation](https://docs.convex.dev)
- [React Native Docs](https://reactnative.dev)
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
