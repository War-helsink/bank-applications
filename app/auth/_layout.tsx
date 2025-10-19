import { useSession } from "@/entities/session";
import { Container, ThemedSafeAreaView } from "@/shared/ui";
import { Redirect, Slot } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";

const AuthLayout: React.FC = () => {
	const { session } = useSession();

	if (session) {
		return <Redirect href="/(tabs)" />;
	}

	return (
		<ThemedSafeAreaView className="h-full w-full">
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Container className="w-full h-full justify-center items-center">
					<Slot />
				</Container>
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default AuthLayout;
