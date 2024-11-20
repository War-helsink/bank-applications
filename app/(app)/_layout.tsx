import { Stack, Redirect } from "expo-router";
import { ButtonBack } from "@/components/features/navigation";

import { useAuth } from "@/core/hooks/useAuth";

const AppLayout: React.FC = () => {
	const { user } = useAuth();

	if (!user) {
		return <Redirect href="/auth" />;
	}

	return (
		<Stack>
			<Stack.Screen
				name="add-card"
				options={{
					title: "Add a bank card",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="card-creating"
				options={{
					title: "Creating a bank card",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="cards"
				options={{
					title: "All cards",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="exchange-rates"
				options={{
					title: "Exchange Rates",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="messages"
				options={{
					title: "Messages",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>

			<Stack.Screen
				name="statistics"
				options={{
					title: "Statistics",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
