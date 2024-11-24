import { ScrollView } from "react-native";
import { ThemedSafeAreaView, Container, Text } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { Menu } from "@/components/widgets/menu";
import { ExchangeRates } from "@/components/entities/exchange-rates";
import Constants from "expo-constants";

const MoreScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<Header />
			<Container className="flex-1">
				<Text className="py-2 text-xl font-bold">More</Text>
				<ScrollView className="flex-1">
					<ExchangeRates />
					<Menu />
				</ScrollView>
				<Text className="text-center opacity-50 my-4">
					Version: {Constants.expoConfig?.version}
				</Text>
			</Container>
		</ThemedSafeAreaView>
	);
};

export default MoreScreen;
