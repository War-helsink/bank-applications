import { ScrollView } from "react-native";
import { ThemedView, Container, Text } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { Menu } from "@/components/widgets/menu";
import { ExchangeRatesBlock } from "@/components/features/exchange-rates";
import Constants from "expo-constants";

const MoreScreen: React.FC = () => {
	return (
		<ThemedView className="h-full w-full pt-16">
			<Header />
			<Container className="flex-1">
				<Text className="py-2 text-xl font-bold">
					More
				</Text>
				<ScrollView className="flex-1">
					<ExchangeRatesBlock />
					<Menu />
				</ScrollView>
				<Text className="text-center opacity-50 my-4">
					Version: {Constants.expoConfig?.version}
				</Text>
			</Container>
		</ThemedView>
	);
};

export default MoreScreen;
