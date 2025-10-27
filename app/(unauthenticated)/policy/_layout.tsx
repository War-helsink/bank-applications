import { Stack } from "expo-router";
import { ButtonBack } from "@/features/navigation";

const PolicyLayout: React.FC = () => {
	return (
		<Stack
			screenOptions={{ headerShown: true, headerLeft: () => <ButtonBack /> }}
		>
			<Stack.Screen
				name="privacy-policy"
				options={{
					title: "Privacy Policy",
				}}
			/>
			<Stack.Screen
				name="terms-of-service"
				options={{
					title: "Terms of Service",
				}}
			/>
		</Stack>
	);
};

export default PolicyLayout;
