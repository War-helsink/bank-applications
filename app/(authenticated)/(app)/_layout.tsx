import { ButtonBack } from "@/features/navigation";
import { Stack } from "expo-router";

const AppLayout: React.FC = () => {
	return (
		<Stack
			screenOptions={{ headerShown: true, headerLeft: () => <ButtonBack /> }}
		>
			<Stack.Screen
				name="add-card"
				options={{
					title: "Add a bank card",
				}}
			/>
			<Stack.Screen
				name="card-creating"
				options={{
					title: "Creating a bank card",
				}}
			/>
			<Stack.Screen
				name="cards"
				options={{
					title: "All cards",
				}}
			/>
			<Stack.Screen
				name="exchange-rates"
				options={{
					title: "Exchange Rates",
				}}
			/>
			<Stack.Screen
				name="friends"
				options={{
					title: "Friends",
				}}
			/>
			<Stack.Screen
				name="messages"
				options={{
					title: "Messages",
				}}
			/>
			<Stack.Screen
				name="statistics"
				options={{
					title: "Statistics",
				}}
			/>
			<Stack.Screen
				name="transfer"
				options={{
					title: "Money transfer",
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
