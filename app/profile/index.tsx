import { Pressable, View, ScrollView } from "react-native";
import { Text, Toolbar } from "@/components/shared";
import {
	ProfileContactForm,
	ProfileNameForm,
} from "@/components/features/profile";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const ProfileScreen: React.FC = () => {
	const colorIcon = useThemeColor("medium");
	const color = useThemeColor("danger");
	const { logout } = useAuth();

	return (
		<ScrollView className="flex flex-col">
			<Toolbar className="my-2">
				<ProfileNameForm />
			</Toolbar>

			<Toolbar className="my-2">
				<ProfileContactForm />
			</Toolbar>

			<Toolbar className="my-2">
				<Pressable
					className="w-full flex-row items-center justify-between py-3"
					onPress={logout}
				>
					<View className="flex-row items-center">
						<Ionicons name="exit" size={24} color={color} />
						<Text className="ml-1" style={{ color }}>
							Sign out of the account
						</Text>
					</View>

					<Ionicons name="chevron-forward" size={24} color={colorIcon} />
				</Pressable>
			</Toolbar>
		</ScrollView>
	);
};
