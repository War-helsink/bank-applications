import { ScrollView } from "react-native";
import { ThemedView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { CardsView } from "@/components/widgets/card";

import { useTailwind } from "tailwind-rn";

const HomeScreen: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<Header />
			<ScrollView>
				<Container>
					<CardsView />
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default HomeScreen;
