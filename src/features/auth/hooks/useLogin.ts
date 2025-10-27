import { BASE_QUERY_KEY } from "@/shared/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Haptics from "expo-haptics";
import { FirebaseError } from "firebase/app";
import Toast from "react-native-toast-message";
import { login } from "../api";

export function useLogin() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({
			email,
			password,
		}: {
			email: string;
			password: string;
		}) => {
			try {
				await login(email, password);
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				Toast.show({
					type: "success",
					text1: "Login successful",
				});
			} catch (err) {
				if (err instanceof FirebaseError) {
					Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
					Toast.show({
						type: "error",
						text1: err.message,
					});
				} else if (err instanceof Error) {
					Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
					Toast.show({
						type: "error",
						text1: err.message,
					});
				} else {
					Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
					Toast.show({
						type: "error",
						text1: "Login Error",
					});
				}
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: [BASE_QUERY_KEY.session],
			});
		},
	});
}
