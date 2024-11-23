import { ScrollView } from "react-native";
import { ThemedSafeAreaView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { CardsView } from "@/components/widgets/card";
import { OperationsBlock } from "@/components/widgets/operations";
import { InformationBlock } from "@/components/widgets/information";

const HomeScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
				<Header />
				<ScrollView>
					<Container>
						<CardsView />
						<OperationsBlock />
						<InformationBlock />
					</Container>
				</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default HomeScreen;
