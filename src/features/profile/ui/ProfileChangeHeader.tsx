import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text } from "@/shared/ui";
import type React from "react";
import { Pressable, View } from "react-native";

export interface ProfileChangeHeaderProps {
	changes?: boolean;
	onSave?: () => void;
	onCancel?: () => void;
}

export const ProfileChangeHeader: React.FC<ProfileChangeHeaderProps> = ({
	changes = false,
	onCancel,
	onSave,
}) => {
	const color = useThemeColor("primary");

	return (
		<View className="w-full flex-row justify-between">
			{changes && (
				<>
					<Pressable onPress={onCancel} className="absolute top-0 left-0">
						<Text className="text-lg font-bold" style={{ color }}>
							Cancel
						</Text>
					</Pressable>
					<Pressable onPress={onSave} className="absolute top-0 right-0">
						<Text className="text-lg font-bold" style={{ color }}>
							Save
						</Text>
					</Pressable>
				</>
			)}
		</View>
	);
};
