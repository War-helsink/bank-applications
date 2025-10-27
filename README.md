# Bank Applications

A modern mobile application — a simple banking app analog built with cutting-edge React Native and Firebase technologies.

## 📱 About the Project

**Bank Applications** is a cross-platform mobile application demonstrating the functionality of a modern banking app. The project includes user authentication, bank card management, peer-to-peer transfers, currency exchange rates, transaction statistics, and a support chat system.

### Key Features:
- 🔐 Registration and authentication with phone verification
- 💳 Bank card management
- 💸 Money transfers between users
- 📊 Transaction and spending statistics
- 💱 Real-time currency exchange rates
- 👥 Friends and contacts system
- 💬 Support chat
- 📸 Profile photo upload and management
- 🎨 Adaptive UI with dark and light theme support

## 🛠 Technology Stack

### Core Framework
- **Expo SDK** + **React Native** — cross-platform development with simplified workflow. Expo provides a rich set of native modules and significantly accelerates development, eliminating the need to work with native code for most tasks.
- **TypeScript** — static typing for improved code reliability, early error detection, and enhanced Developer Experience (DX).

### Backend & Data
- **Firebase** — comprehensive backend solution chosen for easy integration and rich functionality:
  - **Firebase Authentication** — ready-to-use authentication system with Email/Password support
  - **Cloud Firestore** — real-time NoSQL database for storing user data
  - **Cloud Storage** — storage for images and media files
- **@tanstack/react-query** — powerful library for server state management, Firebase data synchronization, caching, and optimistic updates. Significantly simplifies working with asynchronous data and automatically updates the UI when changes occur.

### Navigation & Routing
- **Expo Router** — next-generation file-based routing system built on React Navigation. Provides:
  - Type-safe navigation
  - Deep linking out of the box
  - Automatic route type generation
  - Simple app structure organization
  - SEO-friendly approach (useful for future web version)

### Styling & UI
- **NativeWind** — Tailwind CSS for React Native. Enables utility-first styling approach familiar to web developers, ensuring style consistency and rapid UI development.
- **React Native Reanimated** — performant library for creating smooth animations running on the UI thread.
- **Expo Linear Gradient** — creating gradient backgrounds for cards and interface elements.
- **Expo Blur** — blur effects for modern UI design.

### Forms & Validation
- **Formik** — proven solution for form management in React, simplifying form state handling, validation, and submission.
- **Zod** — TypeScript-first library for data schema validation, providing type safety and declarative validation rule descriptions.

### UX & Interactions
- **React Native Gesture Handler** — native gestures for smooth interface interactions.
- **@gorhom/bottom-sheet** — performant bottom sheets with smooth animations.
- **Expo Haptics** — haptic feedback for enhanced user experience.
- **React Native Toast Message** — stylish notifications for user feedback.
- **React Native OTP Entry** — convenient one-time code input during authentication.

### Architecture
- **Feature-Sliced Design (FSD)** — modern architectural methodology for frontend projects. Chosen for:
  - Clear separation of business logic by layers (app, pages, widgets, features, entities, shared)
  - High project scalability
  - Simplified team collaboration
  - Predictable code structure
  - Easy testing and refactoring

### Development Tools
- **ESLint** — code linting for maintaining consistent style
- **Prettier** with Tailwind plugin — automatic code formatting
- **Expo Dev Client** — customized development client

## 🏗 Project Architecture (FSD)

```
src/
├── app/          # App initialization, routing
├── widgets/      # Composite blocks (Header, Menu, Card widgets)
├── features/     # Functional modules (auth, transfers, payments)
├── entities/     # Business entities (user, card, session)
├── shared/       # Reusable code (UI, utils, hooks)
└── providers/    # React providers (query, session, etc.)
```

---

# Local Development Setup

Follow these steps to run the project locally.

### 1) Clone the repository

```bash
git clone https://github.com/War-helsink/bank-applications.git
cd bank-applications
```

Repository: [War-helsink/bank-applications](https://github.com/War-helsink/bank-applications)

### 2) Install dependencies (package managers)

- Recommended: Node.js LTS and npm
- Install project deps (uses the existing package-lock):

```bash
npm install

pnpm install

bun install
```

### 3) Firebase setup and environment variables

This app uses Firebase for Auth, Firestore, and Storage.

1. Create a Firebase project and a Web app
   - Go to the Firebase Console.
   - Create a new Project (or select an existing one).
   - Open Project settings → General → Your apps → Web and click “Add app” to create a Web app.
   - Copy the Web app config; you will use it for environment variables below.

2. Enable Authentication with Email/Password
   - In Firebase Console → Build → Authentication → Sign-in method.
   - Enable Email/Password and save.

3. Create Cloud Firestore and set rules (signed-in only)
   - In Firebase Console → Build → Firestore Database → Create database.
   - Choose a location and finish setup.
   - Open the Rules tab and replace the rules with the following, then Publish:

   ```plaintext
   rules_version = '2';

   service cloud.firestore {
     match /databases/{database}/documents {
      	
       // Sign 
     	function isSignedIn() {
         return request.auth != null;
       }
     
       match /{document=**} {
         allow read, write: if isSignedIn();
       }
     }
   }
   ```

4. Create Cloud Storage and set rules (signed-in only)
   - In Firebase Console → Build → Storage → Get started.
   - Open the Rules tab and replace the rules with the following, then Publish:

   ```plaintext
   rules_version = '2';

   // Craft rules based on data in your Firestore database
   // allow write: if firestore.get(
   //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
   service firebase.storage {
   	function isSignedIn() {
       return request.auth != null;
     }

     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if isSignedIn();
       }
     }
   }
   ```

5. Create a `.env` file and set environment variables
   - In the project root, create `.env` (you can start from the template):

     ```bash
     cp .env.example .env
     ```

   - Fill the values from your Firebase Web app settings. All variables are public and must be prefixed with `EXPO_PUBLIC_` so they are available at runtime in Expo:

   ```bash
   EXPO_PUBLIC_API_KEY=your_firebase_api_key              # Firebase Web API key
   EXPO_PUBLIC_AUTH_DOMAIN=your_project.firebaseapp.com   # Firebase Auth domain
   EXPO_PUBLIC_PROJECT_ID=your_project_id                 # Firebase Project ID
   EXPO_PUBLIC_STORAGE_BUCKET=your_project.appspot.com    # Firebase Storage bucket
   EXPO_PUBLIC_MESSAGING_SENDER_ID=xxxxxxxxxxxx           # Firebase Sender ID
   EXPO_PUBLIC_APP_ID=1:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx # Firebase App ID
   ```

Notes:
- These keys are consumed in the app via `process.env.EXPO_PUBLIC_*`.
- After editing `.env`, restart the dev server.

### 4) Run the app

- Expo Go (fastest):

  ```bash
  npm run start
  ```

  Scan the QR with the Expo Go app on your device or open iOS/Android simulator from the terminal UI.

- Native builds (prebuild + run):

  ```bash
  npm run prebuild
  npm run android   # Requires Android Studio / emulator
  npm run ios       # Requires Xcode and an iOS simulator
  ```

---
