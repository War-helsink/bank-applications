import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import type { AsyncStorage } from "../types";

class SecureStoreService implements AsyncStorage {
	setItem(key: string, value: string): Promise<void> {
		return setItemAsync(key, value);
	}

	getItem(key: string): Promise<string | null> {
		return getItemAsync(key);
	}

	removeItem(key: string): Promise<void> {
		return deleteItemAsync(key);
	}
}

export const SecureStore = new SecureStoreService();
