import { useEffect, useState } from "react";
import { StorageService } from "@/core/services";
import {
	cacheDirectory,
	getInfoAsync,
	makeDirectoryAsync,
	downloadAsync,
} from "expo-file-system";

export const useCachedAvatar = (uid: string, uri?: string | null) => {
	const [localUri, setLocalUri] = useState<string | null>(null);

	useEffect(() => {
		if (!uri) {
			return setLocalUri(null);
		}

		if (uri.startsWith("file://")) {
			return setLocalUri(uri);
		}

		const manageImageCache = async () => {
			try {
				const imageRef = StorageService.urlInRef(uri);
				const userDir = `${cacheDirectory}${uid}/`;
				const localFilePath = `${userDir}${imageRef.name}`;
				const dirInfo = await getInfoAsync(userDir);

				if (!dirInfo.exists) {
					await makeDirectoryAsync(userDir, { intermediates: true });
				}

				const fileInfo = await getInfoAsync(localFilePath);

				if (fileInfo.exists) {
					setLocalUri(localFilePath);
					return;
				}

				const downloadedFile = await downloadAsync(uri, localFilePath);

				setLocalUri(downloadedFile.uri);
			} catch (error) {
				setLocalUri(null);
			}
		};

		manageImageCache();
	}, [uid, uri]);

	return localUri;
};
