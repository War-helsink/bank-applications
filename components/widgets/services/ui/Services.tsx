import { View } from "react-native";
import { ServiceItem, services } from "@/components/entities/services";

export const Services: React.FC = () => {
	return (
		<View className="flex-row flex-wrap justify-center">
			{services.map((service) => (
				<ServiceItem key={service.title} service={service} />
			))}
		</View>
	);
};
