import {
	ThemedSafeAreaView,
	ScrollRefreshControl,
	Container,
} from "@/components/shared";
import {
	ExchangeRatesBlock,
	defaultCurrencies,
	useExchangeRates,
} from "@/components/entities/exchange-rates";

const ExchangeRatesScreen: React.FC = () => {
	const { refetch, isLoading, exchangeRates } = useExchangeRates();

	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<ScrollRefreshControl callback={refetch}>
				<Container className="mb-6">
					<ExchangeRatesBlock
						exchangeRates={exchangeRates.filter((exchangeRate) =>
							defaultCurrencies.includes(exchangeRate.code),
						)}
						isLoading={isLoading}
						title="BASIC COURSES"
						route={false}
					/>
					<ExchangeRatesBlock
						exchangeRates={exchangeRates}
						isLoading={isLoading}
						title="COURSES NBU"
						oneRate
						route={false}
					/>
				</Container>
			</ScrollRefreshControl>
		</ThemedSafeAreaView>
	);
};

export default ExchangeRatesScreen;
