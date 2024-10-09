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
			<ScrollView>
				<Container>
					<Text type="subtitle" className="py-2">
						More
					</Text>
					<ExchangeRatesBlock />
					<Menu />
					<Text className="text-center opacity-50 my-4">
						Version: {Constants.expoConfig?.version}
					</Text>
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default MoreScreen;
