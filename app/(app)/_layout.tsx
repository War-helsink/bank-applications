import { useSession } from "@/entities/session";
import { ButtonBack } from "@/features/navigation";
import { Redirect, Stack } from "expo-router";

const AppLayout: React.FC = () => {
	const { session } = useSession();

	if (!session) {
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
				name="friends"
				options={{
					title: "Friends",
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
				name="statistics"
				options={{
					title: "Statistics",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
			<Stack.Screen
				name="transfer"
				options={{
					title: "Money transfer",
					headerShown: true,
					headerLeft: () => <ButtonBack />,
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
