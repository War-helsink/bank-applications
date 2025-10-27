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
