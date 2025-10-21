import { Redirect, Stack } from "expo-router";
import { useSession } from "@/entities/session";

const AuthLayout: React.FC = () => {
	const { session } = useSession();

	if (session) {
		return <Redirect href="/(tabs)" />;
	}

	return (
		<Stack>
			<Stack.Screen
				name="login"
				options={{ headerShown: false, animation: "none" }}
			/>
			<Stack.Screen
				name="signup"
				options={{ headerShown: false, animation: "none" }}
			/>
		</Stack>
	);
};

export default AuthLayout;
