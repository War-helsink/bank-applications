import { BASE_QUERY_KEY } from "@/shared/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Haptics from "expo-haptics";
import { FirebaseError } from "firebase/app";
import Toast from "react-native-toast-message";
import { logout } from "../api";
import { useRouter } from "expo-router";

export function useLogout() {
	const router = useRouter();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async () => {
			try {
				router.replace("/(unauthenticated)/welcome");
				queryClient.clear();
				await logout();

				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				Toast.show({
					type: "success",
					text1: "Logout successful",
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
						text1: "Logout Error",
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
