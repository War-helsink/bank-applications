import { createContext, useState, useMemo } from "react";
import type { User } from "firebase/auth";
import { Alert } from "react-native";
import { register, firestore } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";

export interface IAuthContext {
	user: User | null;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = () => {
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

	const value = useMemo(() => ({}), []);

	return value;
};
