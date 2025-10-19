import { useMutation } from "@tanstack/react-query";
import { NotificationFeedbackType, notificationAsync } from "expo-haptics";
import Toast from "react-native-toast-message";
import { createCard } from "../api";
import type { CreateCardProps } from "../types";

export function useCreateCard() {
	return useMutation({
		mutationFn: async (props: CreateCardProps) => {
			return await createCard(props);
		},
		onSuccess: () => {
			notificationAsync(NotificationFeedbackType.Success);

			Toast.show({
				type: "success",
				text1: "The map has been successfully created.",
			});
		},
		onError: () => {
			notificationAsync(NotificationFeedbackType.Error);
			Toast.show({
				type: "error",
				text1: "Error creating card",
			});
		},
	});
}
