import type { AsyncStorage } from "../types";
import { decryptData, encryptData, encryptKey } from "../utils";

class SecureStoreService implements AsyncStorage {
	private readonly _encryptionKey =
		process.env.EXPO_PUBLIC_ENCRYPTION_KEY ?? "BANK";

	async setItem(key: string, value: string) {
		console.log("setItem", key, value);
		const encryptedData = await encryptData(value, this._encryptionKey);
		const encryptedKey = await encryptKey(String(key), this._encryptionKey);
		return sessionStorage.setItem(encryptedKey, encryptedData);
	}

	async getItem(key: string) {
		try {
			const encryptedKey = await encryptKey(String(key), this._encryptionKey);
			const encryptedValue = sessionStorage.getItem(encryptedKey);
			if (!encryptedValue) {
				return null;
			}

			const decryptedData = await decryptData(
				encryptedValue,
				this._encryptionKey,
			);
			if (!decryptedData) {
				return null;
			}

			return decryptedData;
		} catch {
			return null;
		}
	}

	async removeItem(key: string) {
		const encryptedKey = await encryptKey(String(key), this._encryptionKey);
		return sessionStorage.removeItem(encryptedKey);
	}
}

export const SecureStore = new SecureStoreService();
