import { storage } from "@/core/utils/firebase";
import {
	type StorageReference,
	ref,
	getBlob,
	listAll,
	uploadBytes,
	deleteObject,
	getDownloadURL,
} from "firebase/storage";
import { forEachSeries } from "p-iteration";
import type { Url, Urls } from "@/core/types";

export class StorageService {
	basePath: string;
	collRef: StorageReference;

	static async getBlob(url: string): Promise<{ blob: Blob; name: string }> {
		const fileRef = ref(storage, url);
		return { name: fileRef.name, blob: await getBlob(fileRef) };
	}

	static urlInRef(url: string): StorageReference {
		return ref(storage, url);
	}

	constructor(path: string) {
		this.basePath = path;
		this.collRef = ref(storage, this.basePath);
	}

	async deleteFile(url: string): Promise<void> {
		const fileRef = ref(storage, url);
		return deleteObject(fileRef);
	}

	async listFile(folderName: string): Promise<Urls> {
		const urls: Urls = [];
		const filesRef = ref(this.collRef, folderName);

		await listAll(filesRef).then(async (res) => {
			await forEachSeries(res.items, async (itemRef) => {
				await getDownloadURL(itemRef).then((url) => {
					urls.push(url);
				});
			});
		});

		return urls;
	}

	async getFile(filePath = ""): Promise<Blob | null> {
		const fileRef = ref(this.collRef, filePath);
		return await getDownloadURL(fileRef).then(async (url) => {
			return await fetch(url)
				.then((response) => {
					if (response.ok) {
						return response.blob();
					}
					return null;
				})
				.catch(() => {
					return null;
				});
		});
	}

	async uploadImagesAsync(uris: string[]): Promise<Urls> {
		const urls: Urls = [];

		await forEachSeries(uris, async (url) => {
			urls.push(await this.uploadImageAsync(url));
		});

		return urls;
	}

	async uploadImageAsync(uri: string, name?: string) {
		const blob = await this.getBlobInLocal(uri);

		const fileRef = ref(this.collRef, this.generateFileName(name));

		return await uploadBytes(fileRef, blob).then(async (snapshot) => {
			return await getDownloadURL(snapshot.ref);
		});
	}

	async getBlobInLocal(uri: string): Promise<Blob> {
		const response = await fetch(uri);
		return response.blob();
	}

	generateFileName(originalFileName?: string): string {
		if (!originalFileName) {
			return `file_${Date.now()}.jpg`;
		}

		const fileParts = originalFileName.split(".");
		const name = fileParts.slice(0, -1).join(".");
		const extension = fileParts[fileParts.length - 1];

		return `${name}_${Date.now()}.${extension}`;
	}

	class() {
		return Object.getPrototypeOf(this).constructor;
	}
}
