import { ScrollView } from "react-native";
import { ThemedView, Container, Text } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { Services } from "@/components/widgets/services";

const ServicesScreen: React.FC = () => {
	return (
		<ThemedView className="h-full w-full pt-16">
			<Header />
			<ScrollView>
				<Container>
					<Text className="my-4 text-center" type="subtitle">
						Services
					</Text>
					<Services />
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default ServicesScreen;
