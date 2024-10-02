import { Pressable } from "react-native";
import { View, Text, Toolbar } from "@/components/shared";
import { ProfileContactForm, ProfileNameForm } from "@/components/features/profile";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const ProfileScreen: React.FC = () => {
	const colorIcon = useThemeColor("medium");
	const color = useThemeColor("danger");
	const { logout } = useAuth();
	const tw = useTailwind();

	return (
		<View style={tw("flex flex-col")}>
			<Toolbar style={tw("my-2")}>
				<ProfileNameForm />
			</Toolbar>

			<Toolbar style={tw("my-2")}>
				<ProfileContactForm />
			</Toolbar>

			<Toolbar style={tw("my-2")}>
				<Pressable
					style={tw("w-full flex-row items-center justify-between py-3")}
					onPress={logout}
				>
					<View
						style={[
							tw("flex-row items-center"),
							{ backgroundColor: "inherit" },
						]}
					>
						<Ionicons name="exit" size={24} color={color} />
						<Text style={[{ color }, tw("ml-1")]}>Sign out of the account</Text>
					</View>

					<Ionicons name="chevron-forward" size={24} color={colorIcon} />
				</Pressable>
			</Toolbar>
		</View>
	);
};
