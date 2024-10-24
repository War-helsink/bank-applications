import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, ThemedView } from "@/components/shared";
import { ProfileScreen } from "./";

const ProfileLayout: React.FC = () => {
	return (
		<KeyboardAvoidingView
			className="h-full w-full"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ThemedView className="h-full w-full">
				<Container className="w-full h-full">
					<ProfileScreen />
				</Container>
			</ThemedView>
		</KeyboardAvoidingView>
	);
};

export default ProfileLayout;
