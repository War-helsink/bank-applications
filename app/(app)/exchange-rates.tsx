import {
	ThemedSafeAreaView,
	ScrollRefreshControl,
	Container,
} from "@/components/shared";
import {
	BasicCoursesBlock,
	ExchangeRateNBU,
	useExchangeRates,
} from "@/components/entities/exchange-rates";

const ExchangeRatesScreen: React.FC = () => {
	const { refetch, isLoading, exchangeRates } = useExchangeRates();

	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<ScrollRefreshControl callback={refetch}>
				<Container className="mb-6">
					<BasicCoursesBlock
						exchangeRates={exchangeRates}
						isLoading={isLoading}
					/>
					<ExchangeRateNBU
						exchangeRates={exchangeRates}
						isLoading={isLoading}
					/>
				</Container>
			</ScrollRefreshControl>
		</ThemedSafeAreaView>
	);
};

export default ExchangeRatesScreen;
