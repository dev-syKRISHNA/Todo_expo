# 📝 Todo Native App

> A feature-rich, cross-platform todo application built with **Expo**, **Expo Router**, and **Convex**. Features real-time data synchronization, dark mode, beautiful gradients, and comprehensive task management.

## 🎯 About This Project

This is a **learning project** created while following a comprehensive YouTube tutorial. It demonstrates modern mobile development best practices using cutting-edge technologies:

- **Expo & React Native** — True cross-platform development (iOS, Android, Web)
- **Expo Router** — File-based navigation with native feel
- **Convex** — Real-time backend with serverless functions
- **TypeScript** — Full type safety across the stack
- **React 19** — Latest React features and patterns
- **Modern UI/UX** — Gradient designs, smooth animations, and haptic feedback

> **Tutorial Credit**: This project was built following the excellent tutorial by [Codesistency](https://youtu.be/q3HE1dFiJBI?si=Dw3Pc8_jGYT00Xog)

## ✨ Key Features

### Task Management
- ✅ **Add Todos** — Quick input with real-time validation
- ✏️ **Edit Todos** — In-place editing with save/cancel options
- ✔️ **Toggle Completion** — Mark tasks as done/undone
- 🗑️ **Delete Todos** — Remove individual tasks with confirmation
- 🔄 **Real-time Sync** — Instant updates across all devices

### User Experience
- 🎨 **Dark/Light Mode** — System-aware theme with manual toggle
- 📊 **Progress Tracking** — Visual progress bar and completion statistics
- 📈 **Stats Dashboard** — Total, completed, and active task counts
- 🎯 **Empty States** — Beautiful placeholders when no tasks exist
- ⚡ **Haptic Feedback** — Native touch responses (iOS/Android)

### Settings & Preferences
- 🌙 **Theme Toggle** — Persistent dark/light mode preference
- 🔔 **Notifications** — (Coming soon)
- 🔄 **Auto Sync** — Automatic data synchronization
- ⚠️ **Danger Zone** — Clear all todos with confirmation

## 📦 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React Native 0.81.5, React 19.1 | Cross-platform UI |
| **Navigation** | Expo Router 6.0 | File-based routing |
| **Backend** | Convex 1.31 | Real-time BaaS |
| **State** | Convex React Client | Real-time data sync |
| **Storage** | AsyncStorage | Local preferences |
| **Language** | TypeScript 5.9 | Type safety |
| **Styling** | Linear Gradients | Modern UI design |
| **Icons** | Expo Vector Icons | Icon library |
| **Gestures** | React Native Gesture Handler | Touch interactions |
| **Animations** | Reanimated 4.1 | Smooth animations |

## 🏗️ Architecture

### File Structure
```
todo_native/
├── app/                          # Expo Router application
│   ├── _layout.tsx              # Root layout with providers
│   └── (tabs)/                  # Tab-based navigation group
│       ├── _layout.tsx          # Tab navigator configuration
│       ├── index.tsx            # Home screen (Todo list)
│       └── settings.tsx         # Settings screen
│
├── components/                   # Reusable UI components
│   ├── Header.tsx               # Header with progress tracking
│   ├── TodoInput.tsx            # Todo input field with add button
│   ├── EmptyState.tsx           # Empty state placeholder
│   ├── LoadingSpinner.tsx       # Loading indicator
│   ├── ProgressStats.tsx        # Statistics cards
│   ├── Preferences.tsx          # Settings toggles
│   └── DangerZone.tsx          # Destructive actions
│
├── hooks/                        # Custom React hooks
│   └── useTheme.tsx             # Theme management with persistence
│
├── assets/                       # Static assets
│   ├── images/                  # App icons and splash screens
│   └── styles/                  # StyleSheet factories
│       ├── home.styles.ts       # Home screen styles
│       └── settings.styles.ts   # Settings screen styles
│
├── convex/                       # Backend (Convex)
│   ├── schema.ts                # Database schema definition
│   ├── todos.ts                 # Todo CRUD operations
│   └── _generated/              # Auto-generated Convex files
│
└── Configuration files
    ├── app.json                 # Expo app configuration
    ├── package.json             # Dependencies and scripts
    ├── tsconfig.json            # TypeScript config
    └── eslint.config.js         # ESLint rules
```

### Component Architecture

**Providers Structure:**
```tsx
ConvexProvider → ThemeProvider → Stack Navigator → Tabs
```

**Key Components:**
- **Header**: Displays progress, completion stats with gradient icon
- **TodoInput**: Controlled input with gradient add button
- **Todo Item**: Checkbox, text, edit/delete actions with gradients
- **ProgressStats**: Three stat cards showing total/completed/active todos
- **Preferences**: Theme toggle, notifications, auto-sync switches
- **DangerZone**: Reset app functionality with confirmation

### Backend (Convex)

**Schema** (`convex/schema.ts`):
```typescript
todos: {
  text: string
  isCompleted: boolean
}
```

**API Functions** (`convex/todos.ts`):
- `getTodos` — Query all todos (ordered descending)
- `addTodo` — Create new todo
- `toggleTodo` — Toggle completion status
- `updateTodo` — Update todo text
- `deleteTodo` — Delete single todo
- `clearAllTodos` — Delete all todos (bulk operation)

### Theme System

**Custom Hook**: `useTheme()`
- Manages dark/light mode state
- Persists preference to AsyncStorage
- Provides color scheme and gradients
- Includes status bar styling

**Color Schemes:**
- Light: Slate grays, bright accents
- Dark: Dark slate, vibrant gradients
- Gradients for: primary, success, warning, danger, surface, background

## ⚙️ Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** or **pnpm**
- **Expo Go** app (for physical device testing)
- **Convex Account** — [Sign up free](https://convex.dev)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/dev-syKRISHNA/Todo_expo.git
cd todo_native
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up Convex backend:**
```bash
# Initialize Convex (if not already set up)
npx convex dev

# This will:
# - Create a new Convex project (or connect to existing)
# - Generate EXPO_PUBLIC_CONVEX_URL
# - Watch for schema/function changes
```

4. **Configure environment:**
Create `.env.local` (if needed):
```bash
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

### Running the App

**Start development server:**
```bash
npm start
```

**Platform-specific:**
```bash
npm run android    # Android emulator/device
npm run ios        # iOS simulator (macOS only)
npm run web        # Web browser
```

**Using Expo Go:**
1. Install Expo Go on your phone
2. Scan the QR code from terminal
3. App loads on your device

### Development Commands

```bash
npm run lint          # Check code with ESLint
npm run reset-project # Reset to initial state
npx convex dev        # Start Convex backend
npx convex dashboard  # Open Convex dashboard
```

## 🎨 Design Patterns

### Styling
- **Style Factory Pattern**: Functions create styles based on theme colors
- **Gradient Components**: LinearGradient for modern UI
- **Responsive Design**: Safe area handling for all devices

### State Management
- **Convex Queries**: Real-time reactive data
- **Convex Mutations**: Optimistic updates with error handling
- **Local State**: React hooks for UI state
- **Persistent State**: AsyncStorage for preferences

### Error Handling
- Try-catch blocks for all mutations
- Alert dialogs for user feedback
- Console logging for debugging
- Confirmation dialogs for destructive actions

## 🔒 Best Practices Implemented

- ✅ TypeScript strict mode
- ✅ Component composition
- ✅ Custom hooks for reusable logic
- ✅ Proper error boundaries
- ✅ Loading states
- ✅ Empty states
- ✅ Optimistic UI updates
- ✅ Accessibility considerations
- ✅ Safe area insets
- ✅ Platform-specific styling

## 📱 Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| **iOS** | ✅ Fully Supported | iOS 13+ |
| **Android** | ✅ Fully Supported | Android 6+ |
| **Web** | ✅ Fully Supported | Modern browsers |

## 🚀 Deployment

### Convex Backend
```bash
npx convex deploy  # Deploy production backend
```

### Mobile Apps
```bash
# Build for production
eas build --platform ios
eas build --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

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

## ⚠️ Known Issues & UI-Only Features

### UI-Only Features (Not Functional)
These features have UI components in the Settings screen but **do not have actual implementation**:

- **Notifications Toggle** — Visual switch only, push notifications are not implemented
  - The toggle appears in Preferences but doesn't do anything
  - No notification logic or integration exists
  
- **Auto Sync Toggle** — Visual switch only, sync is always active
  - The toggle appears in Preferences but has no effect
  - The app always performs **real-time sync** through Convex's `useQuery` and `useMutation` hooks automatically
  - Toggling this switch does not pause or resume syncing

### Other Limitations
- **No user authentication** — All todos are global and shared across all users (no private/per-user todos)
- **No offline support** — Requires active network connection for Convex synchronization
- **No data persistence** — Without network, cached data cannot be accessed

## TODO / Roadmap

- Wire up full CRUD flow with Convex (if not already complete).
- Add user authentication or per-user todo lists (Convex auth integration).
- Improve styling and accessibility across screens.
- Add tests and CI linting checks.

## Contributing

Open a PR or file issues for missing features or bugs. If you work on Convex endpoints, update `convex/_generated/` and `convex/README.md` as needed.

## 📄 License

This project is currently private. Add a license (MIT, Apache 2.0, etc.) if you plan to open-source it.

## 👨‍💻 Author

**dev-syKRISHNA**
- GitHub: [@dev-syKRISHNA](https://github.com/dev-syKRISHNA)
- Repository: [Todo_expo](https://github.com/dev-syKRISHNA/Todo_expo)

## 🙏 Acknowledgments

- **Tutorial by [Codesistency](https://youtu.be/q3HE1dFiJBI?si=Dw3Pc8_jGYT00Xog)** — This project was built following this excellent YouTube tutorial to learn Expo and Convex
- Built with [Expo](https://expo.dev)
- Backend powered by [Convex](https://convex.dev)
- Icons from [Expo Vector Icons](https://icons.expo.fyi)
- Inspired by modern todo app design patterns

---

**Made with ❤️ using Expo, React Native, and Convex**
