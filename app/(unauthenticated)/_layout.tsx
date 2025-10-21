import { Stack } from "expo-router";

const UnauthenticatedLayout: React.FC = () => {
	return (
		<Stack>
			<Stack.Screen name="auth" options={{ headerShown: false }} />
			<Stack.Screen name="policy" options={{ headerShown: false }} />
			<Stack.Screen name="welcome" options={{ headerShown: false }} />
		</Stack>
	);
};

export default UnauthenticatedLayout;
