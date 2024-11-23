import { ScrollView } from "react-native";
import { ThemedSafeAreaView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { CardsView } from "@/components/widgets/card";
import {
	FriendsListTransfer,
	OperationsBlock,
} from "@/components/features/money-transfer";
import { ExchangeRatesBlock } from "@/components/features/exchange-rates";
import { InformationBlock } from "@/components/features/information";

const HomeScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<Header />
			<ScrollView>
				<Container>
					<CardsView />
					<OperationsBlock />
					<FriendsListTransfer />
					<ExchangeRatesBlock />
					<InformationBlock />
				</Container>
			</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default HomeScreen;
