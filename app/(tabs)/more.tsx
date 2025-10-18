import { ExchangeRates } from "@/entities/exchange-rates";
import { Container, Text, ThemedSafeAreaView } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { Menu } from "@/widgets/menu";
import Constants from "expo-constants";
import { ScrollView } from "react-native";

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
