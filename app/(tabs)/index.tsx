import { ScrollView } from "react-native";
import { ThemedSafeAreaView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { CardsView } from "@/components/widgets/card";
import { OperationsBlock } from "@/components/features/money-transfer";
import { YourFriends } from "@/components/features/friend";
import { InformationBlock } from "@/components/features/information";
import { ExchangeRates } from "@/components/entities/exchange-rates";

const HomeScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<Header />
			<ScrollView>
				<Container>
					<CardsView />
					<OperationsBlock />
					<YourFriends title="QUICK MONEY TRANSFER" linkFriends linkTransfer />
					<ExchangeRates />
					<InformationBlock />
				</Container>
			</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default HomeScreen;
