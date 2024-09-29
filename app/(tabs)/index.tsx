import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/core/hooks/useAuth";
import { Text, View, Button } from "@/components/shared/ui";
import { Header } from "@/components/widgets/header";

export default function HomeScreen() {
	const tw = useTailwind();
	const { logout } = useAuth();

	return (
		<View style={tw("h-full w-full pt-16")}>
			<Header />
			<View style={tw("px-5 w-full h-full justify-center items-center")}>
				<Text>Home</Text>
				<Button onPress={logout}>Logout</Button>
			</View>
		</View>
	);
}
