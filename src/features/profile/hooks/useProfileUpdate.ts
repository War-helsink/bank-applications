import { useCallback } from "react";
import Toast from "react-native-toast-message";
import { NotificationFeedbackType, notificationAsync } from "expo-haptics";
import { useUpdateUser } from "@/entities/user";
import type { ProfileFormValues } from "../lib/schema";

export const useProfileUpdate = () => {
	const { mutateAsync: updateUser, isPending: isUpdateUserPending } =
		useUpdateUser();

	const handleSave = useCallback(
		async (values: ProfileFormValues, hasChanges: boolean) => {
			if (!hasChanges) {
				notificationAsync(NotificationFeedbackType.Error);
				Toast.show({
					type: "error",
					text1: "To save the data, make changes",
				});
				return;
			}

			try {
				await updateUser(values);

				notificationAsync(NotificationFeedbackType.Success);
				Toast.show({
					type: "success",
					text1: "Changes saved successfully",
				});
			} catch {
				notificationAsync(NotificationFeedbackType.Error);
				Toast.show({
					type: "error",
					text1: "Failed to save changes",
				});
			}
		},
		[updateUser],
	);

	return { handleSave, isUpdateUserPending };
};
