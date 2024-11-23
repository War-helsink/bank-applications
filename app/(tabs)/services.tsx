import { ScrollView } from "react-native";
import { ThemedSafeAreaView, Container, Text } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { Services } from "@/components/widgets/services";

const ServicesScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<Header />
			<ScrollView>
				<Container>
					<Text className="my-4 text-center text-xl font-bold">
						Services
					</Text>
					<Services />
				</Container>
			</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default ServicesScreen;
