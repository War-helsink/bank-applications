import {
	ThemedView,
	ScrollRefreshControl,
	Container,
} from "@/components/shared";
import {
	BasicCoursesBlock,
	ExchangeRateNBU,
	useExchangeRates,
} from "@/components/entities/exchange-rates";

const ExchangeRatesLayout: React.FC = () => {
	const { trigger, isLoading, exchangeRates } = useExchangeRates();

	console.log("ExchangeRatesLayout render");

	return (
		<ThemedView className="h-full w-full">
			<ScrollRefreshControl callback={trigger}>
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
		</ThemedView>
	);
};

export default ExchangeRatesLayout;
