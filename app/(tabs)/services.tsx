import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/hooks/useAuth";
import { Text, View, Button } from "@/components/shared/ui";
import { Header } from "@/components/widgets/header";

export default function ServicesScreen() {
	const tw = useTailwind();
	const { logout } = useAuth();

	return (
		<View style={tw("h-full w-full pt-16")}>
			<Header />
			<View style={tw("px-5 w-full h-full justify-center items-center")}>
				<Text>Services</Text>
				<Button onPress={logout}>Logout</Button>
			</View>
		</View>
	);
}
