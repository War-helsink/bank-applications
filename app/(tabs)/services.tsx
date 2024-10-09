import { ScrollView, View } from "react-native";
import { ThemedView, Container, Text } from "@/components/shared";
import { Header } from "@/components/widgets/header";
import { ServiceItem, services } from "@/components/entities/services";

const ServicesScreen: React.FC = () => {
	return (
		<ThemedView className="h-full w-full pt-16">
			<Header />
			<ScrollView>
				<Container>
					<Text className="my-4 text-center" type="subtitle">
						Services
					</Text>
					<View className="flex-row flex-wrap justify-center">
						{services.map((service) => (
							<ServiceItem key={service.title} service={service} />
						))}
					</View>
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default ServicesScreen;
