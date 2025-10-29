import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_QUERY_KEY } from "@/shared/config";
import { StorageService } from "@/shared/services";
import type { AvatarInfo } from "@/shared/types";
import { useUser } from "./useUser";
import { updateUser } from "../api";

export function useUpdateAvatar() {
	const { user } = useUser();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (avatarInfo: AvatarInfo) => {
			if (!user) {
				return;
			}

			const avatarStorageService = new StorageService(`avatar/${user.id}`);

			if (user.avatarUrl && user.avatarUrl.length > 0) {
				await avatarStorageService.deleteFile(user.avatarUrl).catch(() => null);
			}

			const newAvatarUrl = await avatarStorageService.uploadImageAsync(
				avatarInfo.avatarUrl ?? "",
				avatarInfo.name ?? "",
			);

			return await updateUser(user.id, { avatarUrl: newAvatarUrl });
		},
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: [BASE_QUERY_KEY.users],
			});
		},
	});
}
