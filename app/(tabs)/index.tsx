import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui";

export default function HomeScreen() {
	const tw = useTailwind();
	const { logout } = useAuth();

	return (
		<View style={tw("h-full w-full pt-16")}>
			<View style={tw("mx-5 w-full h-full justify-center items-center")}>
				<Text>Home</Text>
				<Button onPress={logout}>Logout</Button>
			</View>
		</View>
	);
}
