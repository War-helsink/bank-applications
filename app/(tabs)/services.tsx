import { ThemedView, Container } from "@/components/shared";
import { Header } from "@/components/widgets/header";

import { useTailwind } from "tailwind-rn";

const ServicesScreen: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<Header />
			<Container style={tw("w-full h-full justify-center items-center")}>

			</Container>
		</ThemedView>
	);
};

export default ServicesScreen;
