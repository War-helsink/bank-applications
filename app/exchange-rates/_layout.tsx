import { ScrollView } from "react-native";
import { Container, ThemedView } from "@/components/shared";
import {
	BasicCoursesBlock,
	ExchangeRateNBU,
} from "@/components/entities/exchange-rates";

const ExchangeRatesLayout: React.FC = () => {
	return (
		<ThemedView className="h-full w-full">
			<ScrollView>
				<Container className="mb-6">
					<BasicCoursesBlock />
					<ExchangeRateNBU />
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default ExchangeRatesLayout;
