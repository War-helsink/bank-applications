import { Toolbar, Text } from "@/components/shared";
import { ExchangeRatesBlock } from "@/components/entities/exchange-rates";

import { useTailwind } from "tailwind-rn";

export const Information: React.FC = () => {
	const tw = useTailwind();

	return (
		<Toolbar style={tw("py-4 rounded-2xl")}>
			<Text>Information</Text>
			<ExchangeRatesBlock />
		</Toolbar>
	);
};
