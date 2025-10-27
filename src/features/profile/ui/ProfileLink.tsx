import { useUser } from "@/entities/user";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Avatar, Text } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ProfileModal } from "./ProfileModal";

export const ProfileLink: React.FC = () => {
	const color = useThemeColor("danger");
	const backgroundColor = useThemeColor("toolbarBackground");
	const [isDrawerVisible, setDrawerVisible] = useState(false);

	const { user } = useUser();

	if (!user) {
		return null;
	}

	const handleCloseDrawer = () => {
		setDrawerVisible(false);
	};

	return (
		<TouchableOpacity
			className="flex-row pr-2 items-center rounded-2xl"
			onPress={() => setDrawerVisible(true)}
			style={{ backgroundColor }}
		>
			<Avatar
				uid={user.id}
				name={user.lastName}
				avatarUrl={user.avatarUrl}
				className="border-2 border-solid"
				style={{ borderColor: color }}
				size="large"
			/>

			<View className="flex-row items-center ml-2">
				<Text className="text-base">{user.lastName}</Text>
				<Ionicons name="chevron-forward" size={16} color={color} />
			</View>

			<ProfileModal isVisible={isDrawerVisible} onClose={handleCloseDrawer} />
		</TouchableOpacity>
	);
};
