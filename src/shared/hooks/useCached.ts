import { StorageService } from "@/shared/services";
import { Directory, Paths, File } from "expo-file-system";
import { useEffect, useState } from "react";

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
				const userDir = new Directory(Paths.cache, uid);
				if (!userDir.exists) {
					userDir.create({ intermediates: true, idempotent: true });
				}

				const localFile = new File(userDir, imageRef.name);

				if (localFile.exists) {
					setLocalUri(localFile.uri);
					return;
				}

				const downloadedFile = await File.downloadFileAsync(uri, localFile);
				setLocalUri(downloadedFile.uri);
			} catch {
				setLocalUri(null);
			}
		};

		manageImageCache();
	}, [uid, uri]);

	return localUri;
};
