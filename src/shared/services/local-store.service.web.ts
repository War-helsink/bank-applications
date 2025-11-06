import type { AsyncStorage as AsyncStorageType } from "../types";

class LocalStoreService implements AsyncStorageType {
	async setItem(key: string, value: string) {
		return localStorage.setItem(key, value);
	}
	async getItem(key: string) {
		return localStorage.getItem(key);
	}
	async removeItem(key: string) {
		return localStorage.removeItem(key);
	}
}

export const LocalStore = new LocalStoreService();
