import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, ThemedView } from "@/components/shared";
import { AuthScreen } from "./";

const AuthLayout: React.FC = () => {
	return (
		<KeyboardAvoidingView
			className="h-full w-full"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ThemedView className="h-full w-full pt-16">
				<Container className="w-full h-full justify-center items-center">
					<AuthScreen />
				</Container>
			</ThemedView>
		</KeyboardAvoidingView>
	);
};

export default AuthLayout;
