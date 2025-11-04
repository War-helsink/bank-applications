import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { TextButton } from "@/shared/ui";
import type React from "react";
import { View } from "react-native";

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
		<View className="absolute top-0 left-0 pt-4 w-full flex-row justify-between">
			{changes && (
				<>
					<TextButton
						onPress={onCancel}
						className="text-lg font-bold"
						style={{ color }}
					>
						Cancel
					</TextButton>
					<TextButton
						onPress={onSave}
						className="text-lg font-bold"
						style={{ color }}
					>
						Save
					</TextButton>
				</>
			)}
		</View>
	);
};
