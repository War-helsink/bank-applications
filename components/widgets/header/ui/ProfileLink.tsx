import { View } from "react-native";
import { Text, Avatar, Link } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProfileModal } from "@/components/features/profile";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useAuth } from "@/core/hooks/useAuth";
import { useState } from "react";

export const ProfileLink: React.FC = () => {
	const color = useThemeColor("danger");
	const backgroundColor = useThemeColor("toolbarBackground");
	const [isDrawerVisible, setDrawerVisible] = useState(false);

	const { profile } = useAuth();

	if (!profile) {
		return null;
	}

	const handleCloseDrawer = () => {
		setDrawerVisible(false);
	};

	return (
		<Link
			className="flex-row pr-2 items-center rounded-2xl"
			onPress={() => setDrawerVisible(true)}
			style={{ backgroundColor }}
		>
			<Avatar
				uid={profile.id}
				name={profile.lastName}
				avatarUrl={profile.avatarUrl}
				className="border-2 border-solid"
				style={{ borderColor: color }}
				size="large"
			/>

			<View className="flex-row items-center ml-2">
				<Text className="text-base">{profile.lastName}</Text>
				<Ionicons name="chevron-forward" size={16} color={color} />
			</View>

			<ProfileModal isVisible={isDrawerVisible} onClose={handleCloseDrawer} />
		</Link>
	);
};
