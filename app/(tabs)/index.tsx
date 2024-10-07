import { ScrollView } from "react-native";
import { ThemedView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { CardsView } from "@/components/widgets/card";
import { Information } from "@/components/widgets/information"

const HomeScreen: React.FC = () => {
	return (
		<ThemedView className="h-full w-full pt-16">
			<Header />
			<ScrollView>
				<Container>
					<CardsView />
					<Information />
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default HomeScreen;
