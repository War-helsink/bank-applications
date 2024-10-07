import { Toolbar, Text } from "@/components/shared";
import { ExchangeRatesBlock } from "@/components/entities/exchange-rates";

export const Information: React.FC = () => {
	return (
		<Toolbar className="py-4 rounded-2xl">
			<Text>Information</Text>
			<ExchangeRatesBlock />
		</Toolbar>
	);
};
