import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AsyncStorage as AsyncStorageType } from "../types";

class LocalStoreService implements AsyncStorageType {
	async setItem(key: string, value: string) {
		return AsyncStorage.setItem(key, value);
	}
	async getItem(key: string) {
		return AsyncStorage.getItem(key);
	}
	async removeItem(key: string) {
		return AsyncStorage.removeItem(key);
	}
}

export const LocalStore = new LocalStoreService();
