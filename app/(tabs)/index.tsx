import { useTailwind } from "tailwind-rn";
import { ThemedView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { AccountView } from "@/components/widgets/account";

const HomeScreen: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<Header />
			<Container style={tw("w-full h-full")}>
				<AccountView />
			</Container>
		</ThemedView>
	);
};

export default HomeScreen;
