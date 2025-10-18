import { Container, Text, ThemedSafeAreaView } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { Services } from "@/widgets/services";
import { ScrollView } from "react-native";

const ServicesScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<Header />
			<ScrollView>
				<Container>
					<Text className="my-4 text-center text-xl font-bold">Services</Text>
					<Services />
				</Container>
			</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default ServicesScreen;
