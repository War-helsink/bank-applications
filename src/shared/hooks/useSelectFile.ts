import { useCallback } from "react";
import {
	type ImagePickerAsset,
	launchImageLibraryAsync,
	requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import Toast from "react-native-toast-message";

export function useSelectFile(callback: (file: ImagePickerAsset) => void) {
	return useCallback(async () => {
		const permissionResult = await requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Toast.show({
				type: "info",
				text1: "Access to the gallery is required to select an avatar!",
			});
			return null;
		}

		const result = await launchImageLibraryAsync({
			mediaTypes: "images",
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			callback(result.assets[0]);
		}
	}, [callback]);
}
