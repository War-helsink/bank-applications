import { Alert } from "react-native";
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
				email: user.email as string,
			});

			await userProfile.create();
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
		if (user === null) {
			if (profile !== null) {
				console.log("unsubscribeDocumentChanged")
				profile.unsubscribeDocumentChanged();
				setProfile(null);
			}

			return;
		}

		if (profile === null) {
			const userProfile = new UserProfile({ id: user.uid });
			userProfile.subscribeDocumentChanged((userProfile) => {
				console.log("setProfile")
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
			isLoading,
			register: registerHandler,
			login: loginHandler,
			logout: logoutHandler,
		}),
		[profile, user, isLoading],
	);

	return (
		<AuthContext.Provider value={value}>
			{!isLoadingInitial && children}
		</AuthContext.Provider>
	);
};
