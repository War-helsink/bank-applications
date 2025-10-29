import { ExchangeRates } from "@/entities/exchange-rates";
import { YourFriends } from "@/features/friend";
import { InformationBlock } from "@/features/information";
import { OperationsBlock } from "@/features/money-transfer";
import { Container, ThemedSafeAreaView } from "@/shared/ui";
import { CardsView } from "@/widgets/card";
import { Header } from "@/widgets/header";
import { ScrollView } from "react-native";

const HomeScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false}>
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
