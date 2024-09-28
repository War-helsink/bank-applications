import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/hooks/useAuth";
import { ThemedText, ThemedView, Button } from "@/components/shared/ui";
import { Header } from "@/components/widgets/header";

export default function HomeScreen() {
	const tw = useTailwind();
	const { logout } = useAuth();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<Header />
			<ThemedView style={tw("mx-5 w-full h-full justify-center items-center")}>
				<ThemedText>Home</ThemedText>
				<Button onPress={logout}>Logout</Button>
			</ThemedView>
		</ThemedView>
	);
}
