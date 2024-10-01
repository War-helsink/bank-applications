import Toast from "react-native-toast-message";
import { createContext, useState, useMemo, useEffect } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { register, login, logout, auth } from "@/core/utils/firebase";
import { FirebaseError } from "firebase/app";
import { UserProfile } from "@/core/entities/user";

export interface IAuthContext {
	profile: UserProfile | null;
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
	const [profile, setProfile] = useState<UserProfile | null>(null);
	const [isLoadingInitial, setIsLoadingInitial] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const registerHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const { user } = await register(email, password);

			const userProfile = new UserProfile({
				id: user.uid,
				lastName: "No name",
				email: user.email as string,
			});

			await userProfile.create();
		} catch (err) {
			if (err instanceof FirebaseError) {
				Toast.show({
					type: "error",
					text1: err.message,
				});
			} else if (err instanceof Error) {
				Toast.show({
					type: "error",
					text1: err.message,
				});
			} else {
				Toast.show({
					type: "error",
					text1: "Registration Error",
				});
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
				Toast.show({
					type: "error",
					text1: err.message,
				});
			} else if (err instanceof Error) {
				Toast.show({
					type: "error",
					text1: err.message,
				});
			} else {
				Toast.show({
					type: "error",
					text1: "Login Error",
				});
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
				Toast.show({
					type: "error",
					text1: err.message,
				});
			} else if (err instanceof Error) {
				Toast.show({
					type: "error",
					text1: err.message,
				});
			} else {
				Toast.show({
					type: "error",
					text1: "Logout Error",
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (user === null) {
			if (profile !== null) {
				profile.unsubscribeDocumentChanged();
				setProfile(null);
			}

			return;
		}

		if (profile === null) {
			const userProfile = new UserProfile({ id: user.uid });
			userProfile.subscribeDocumentChanged((userProfile) => {
				setProfile(userProfile);
			});
		}
	}, [user, profile]);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			setUser(user);
			setIsLoadingInitial(false);
		});
	});

	const value = useMemo(
		() => ({
			profile,
			user,
			register: registerHandler,
			login: loginHandler,
			logout: logoutHandler,
		}),
		[profile, user],
	);

	return (
		<AuthContext.Provider value={{ ...value, isLoading }}>
			{!isLoadingInitial && children}
		</AuthContext.Provider>
	);
};
