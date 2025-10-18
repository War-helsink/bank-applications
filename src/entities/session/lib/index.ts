import type { User } from "firebase/auth";
import type { SessionUser } from "../types";

export function mapFirebaseSession(user: User | null): SessionUser | null {
	if (!user) return null;
	return {
		uid: user.uid,
		email: user.email ?? null,
		displayName: user.displayName ?? null,
		photoURL: user.photoURL ?? null,
	};
}
