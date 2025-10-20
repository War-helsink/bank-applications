import { auth } from "@/shared/utils";
import type { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password).catch(
		(err: FirebaseError) => {
			switch (err.code) {
				case "auth/email-already-in-use": {
					throw new Error(
						"This email address is already in use. Please use a different email.",
					);
				}
				case "auth/invalid-email": {
					throw new Error(
						"Invalid email address format. Please check and try again.",
					);
				}
				case "auth/weak-password": {
					throw new Error(
						"Your password is too weak. Please choose a stronger password.",
					);
				}
				default: {
					throw new Error("Registration Error");
				}
			}
		},
	);

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password).catch(
		(err: FirebaseError) => {
			switch (err.code) {
				case "auth/invalid-credential":
				case "auth/invalid-email":
				case "auth/user-not-found":
				case "auth/wrong-password": {
					throw new Error(
						"Invalid credentials. Please check your information and try again.",
					);
				}
				case "auth/user-disabled": {
					throw new Error("This user has been disabled.");
				}
				case "auth/too-many-requests": {
					throw new Error(
						"Too many unsuccessful login attempts. Please try again later.",
					);
				}
				default: {
					throw new Error("Error login");
				}
			}
		},
	);

export const logout = () => signOut(auth);
