import { useTailwind } from "tailwind-rn";
import { View, Container} from "@/components/shared";
import { Header } from "@/components/widgets/header";

const ServicesScreen: React.FC = () => {
	const tw = useTailwind();

	return (
		<View style={tw("h-full w-full pt-16")}>
			<Header />
			<Container style={tw("w-full h-full justify-center items-center")}>
			
			</Container>
		</View>
	);
}

export default ServicesScreen;

