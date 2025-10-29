import { StorageService } from "@/shared/services";
import { Directory, Paths, File } from "expo-file-system";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

export const useCachedAvatar = (uid: string, uri?: string | null) => {
	const [isLoading, setIsLoading] = useState(true);
	const [localUri, setLocalUri] = useState<string | null>(null);

	useEffect(() => {
		if (!uri) {
			setIsLoading(false);
			return setLocalUri(null);
		}

		if (uri.startsWith("file://") || Platform.OS === "web") {
			setIsLoading(false);
			return setLocalUri(uri);
		}

		const manageImageCache = async () => {
			setIsLoading(true);
			try {
				const imageRef = StorageService.urlInRef(uri);
				const userDir = new Directory(Paths.cache, uid);
				if (!userDir.exists) {
					userDir.create({ intermediates: true, idempotent: true });
				}

				const localFile = new File(userDir, imageRef.name);

				if (localFile.exists) {
					setIsLoading(false);
					setLocalUri(localFile.uri);
					return;
				}

				try {
					const downloadedFile = await File.downloadFileAsync(uri, localFile);
					setLocalUri(downloadedFile.uri);
					setIsLoading(false);
				} catch {
					setLocalUri(localFile.uri);
					setIsLoading(false);
				}
			} catch {
				setLocalUri(null);
				setIsLoading(false);
			}
		};

		manageImageCache();
	}, [uid, uri]);

	return [localUri, isLoading] as const;
};
