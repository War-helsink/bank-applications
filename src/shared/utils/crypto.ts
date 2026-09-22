import * as Crypto from "expo-crypto";

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
	const bytes = new Uint8Array(buffer);
	let binary = "";
	for (let i = 0; i < bytes.byteLength; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}

export function base64ToArrayBuffer(base64: string): ArrayBuffer {
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes.buffer;
}

export async function encryptKey(
	key: string,
	encryptionKey: string,
): Promise<string> {
	const combined = `${encryptionKey}_KEY_${key}`;
	const keyHash = await Crypto.digestStringAsync(
		Crypto.CryptoDigestAlgorithm.SHA256,
		combined,
		{ encoding: Crypto.CryptoEncoding.HEX },
	);

	return keyHash.substring(0, 32);
}

export async function encryptData(
	data: string,
	encryptionKey: string,
): Promise<string> {
	const keyHash = await Crypto.digestStringAsync(
		Crypto.CryptoDigestAlgorithm.SHA256,
		encryptionKey,
		{ encoding: Crypto.CryptoEncoding.HEX },
	);

	const encoder = new TextEncoder();
	const dataBytes = encoder.encode(data);
	const keyBytes = encoder.encode(keyHash);

	const encryptedBytes = new Uint8Array(dataBytes.length);
	for (let i = 0; i < dataBytes.length; i++) {
		encryptedBytes[i] = dataBytes[i] ^ keyBytes[i % keyBytes.length];
	}

	return arrayBufferToBase64(encryptedBytes.buffer);
}

export async function decryptData(
	encryptedData: string,
	encryptionKey: string,
): Promise<string> {
	try {
		const encryptedBytes = new Uint8Array(base64ToArrayBuffer(encryptedData));

		const keyHash = await Crypto.digestStringAsync(
			Crypto.CryptoDigestAlgorithm.SHA256,
			encryptionKey,
			{ encoding: Crypto.CryptoEncoding.HEX },
		);

		const encoder = new TextEncoder();
		const keyBytes = encoder.encode(keyHash);

		const decryptedBytes = new Uint8Array(encryptedBytes.length);
		for (let i = 0; i < encryptedBytes.length; i++) {
			decryptedBytes[i] = encryptedBytes[i] ^ keyBytes[i % keyBytes.length];
		}

		const decoder = new TextDecoder();
		return decoder.decode(decryptedBytes);
	} catch (error) {
		console.error(`decryptData failed: ${encryptedData} with error: ${error}`);
		return "";
	}
}
