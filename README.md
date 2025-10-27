# Local Development Setup

Follow these steps to run the project locally. Existing content below remains unchanged.

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
```

- Optional alternatives (pick one if you prefer):
  - pnpm

    ```bash
    npm install -g pnpm
    pnpm install
    ```

  - Bun

    ```bash
    curl -fsSL https://bun.sh/install | bash
    bun install
    ```

### 3) Firebase setup and environment variables

This app uses Firebase for Auth, Firestore, and Storage.

1. Create a Firebase project and a Web app in the Firebase Console.
2. Enable the products you need (Authentication, Firestore, Storage).
3. Create a `.env` file in the project root. You can start from the template:

   ```bash
   cp .env.example .env
   ```

4. Fill the values from your Firebase Web app settings. All variables are public and must be prefixed with `EXPO_PUBLIC_` so they are available at runtime in Expo:

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
