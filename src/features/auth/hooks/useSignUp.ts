import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import { FirebaseError } from "firebase/app";
import Toast from "react-native-toast-message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateUserPayload } from "@/entities/user/types";
import { createUser } from "@/entities/user";
import { BASE_QUERY_KEY } from "@/shared/config";
import { signUp } from "../api";

export function useSignUp() {
	const router = useRouter();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: Omit<CreateUserPayload, "uid">) => {
			try {
				const { user } = await signUp(data.email, data.password);
				await createUser({ uid: user.uid, ...data });

				router.navigate("/(authenticated)/photo");

				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				Toast.show({
					type: "success",
					text1: "Sign up successful",
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
						text1: "Registration Error",
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
