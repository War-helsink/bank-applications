import { Redirect, Stack } from "expo-router";
import { useSession } from "@/entities/session";
import { ButtonBack } from "@/features/navigation";

const AuthLayout: React.FC = () => {
	const { session } = useSession();

	if (session) {
		return <Redirect href="/(authenticated)/(tabs)" />;
	}

	return (
		<Stack
			screenOptions={{ headerShown: true, headerLeft: () => <ButtonBack /> }}
		>
			<Stack.Screen name="login" options={{ headerShown: false }} />
			<Stack.Screen
				name="confirm-phone"
				options={{
					title: "Confirm Phone",
				}}
			/>
			<Stack.Screen
				name="phone"
				options={{
					title: "Phone",
				}}
			/>
			<Stack.Screen
				name="signup"
				options={{
					title: "Signup",
				}}
			/>
		</Stack>
	);
};

export default AuthLayout;
