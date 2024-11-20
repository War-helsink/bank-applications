import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, ThemedView } from "@/components/shared";
import { useAuth } from "@/core/hooks/useAuth";
import { Slot, Redirect } from "expo-router";

const AuthLayout: React.FC = () => {
	const { user } = useAuth();

	if (user) {
		return <Redirect href="/(tabs)/" />;
	}

	return (
		<KeyboardAvoidingView
			className="h-full w-full"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ThemedView className="h-full w-full pt-16">
				<Container className="w-full h-full justify-center items-center">
					<Slot />
				</Container>
			</ThemedView>
		</KeyboardAvoidingView>
	);
};

export default AuthLayout;
