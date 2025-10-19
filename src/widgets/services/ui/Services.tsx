import { ServiceItem, services } from "@/entities/services";
import { View } from "react-native";

export const Services: React.FC = () => {
	return (
		<View className="flex-row flex-wrap justify-center">
			{services.map((service) => (
				<ServiceItem key={service.title} service={service} />
			))}
		</View>
	);
};
