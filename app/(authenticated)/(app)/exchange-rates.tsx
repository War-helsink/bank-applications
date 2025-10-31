import {
	defaultCurrencies,
	ExchangeRatesBlock,
	useExchangeRates,
} from "@/entities/exchange-rates";
import {
	Container,
	ScrollRefreshControl,
	ThemedSafeAreaView,
} from "@/shared/ui";

const ExchangeRatesScreen: React.FC = () => {
	const { refetch, isLoading, exchangeRates } = useExchangeRates();

	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<ScrollRefreshControl
				showsVerticalScrollIndicator={false}
				callback={refetch}
			>
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
