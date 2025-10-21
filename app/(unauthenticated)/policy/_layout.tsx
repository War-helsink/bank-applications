import { Stack } from "expo-router";
import { ButtonBack } from "@/features/navigation";

const PolicyLayout: React.FC = () => {
	return (
		<Stack>
			<Stack.Screen
				name="privacy-policy"
				options={{
					title: "Privacy Policy",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="terms-of-service"
				options={{
					title: "Terms of Service",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
		</Stack>
	);
};

export default PolicyLayout;
