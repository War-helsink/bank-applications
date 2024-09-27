import {
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID,
	APP_ID,
} from "@env";
import { initializeApp } from "firebase/app";
import {
	initializeAuth,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	getReactNativePersistence
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

// Initialize Firestore
export const firestore = getFirestore(app);
