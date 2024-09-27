import { Alert } from "react-native";
import { createContext, useState, useMemo, useEffect } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { register, login, logout, firestore, auth } from "@/utils/firebase";
import { FirebaseError } from "firebase/app";

export interface IAuthContext {
	user: User | null;
	isLoading: boolean;
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingInitial, setIsLoadingInitial] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const registerHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const { user } = await register(email, password);

			await setDoc(doc(firestore, "users", user.uid), {
				id: user.uid,
				displayName: "New user",
			});
		} catch (err) {
			if (err instanceof FirebaseError) {
				Alert.alert(err.message);
			} else if (err instanceof Error) {
				Alert.alert(err.message);
			} else {
				Alert.alert("Registration Error");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const loginHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			await login(email, password);
		} catch (err) {
			if (err instanceof FirebaseError) {
				Alert.alert(err.message);
			} else if (err instanceof Error) {
				Alert.alert(err.message);
			} else {
				Alert.alert("Login Error");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = async () => {
		setIsLoading(true);
		try {
			await logout();
		} catch (err) {
			if (err instanceof FirebaseError) {
				Alert.alert("Logout Error", err.message);
			} else if (err instanceof Error) {
				Alert.alert("Logout Error", err.message);
			} else {
				Alert.alert("Logout Error");
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
			setIsLoadingInitial(false);
		});
	});

	const value = useMemo(
		() => ({
			user,
			isLoading,
			register: registerHandler,
			login: loginHandler,
			logout: logoutHandler,
		}),
		[user, isLoading],
	);

	return (
		<AuthContext.Provider value={value}>
			{!isLoadingInitial && children}
		</AuthContext.Provider>
	);
};
