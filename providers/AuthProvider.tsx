import { Alert } from "react-native";
import { createContext, useState, useMemo, useEffect } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { register, login, logout, firestore, auth } from "@/utils/firebase";

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

			await addDoc(collection(firestore, "users"), {
				_id: user.uid,
				displayName: "No name",
			});
		} catch (err: any) {
			Alert.alert("Error reg", err);
		} finally {
			setIsLoading(false);
		}
	};

	const loginHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			await login(email, password);
		} catch (err: any) {
			Alert.alert("Error login", err);
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = async () => {
		setIsLoading(true);
		try {
			await logout();
		} catch (err: any) {
			Alert.alert("Error logout", err);
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
