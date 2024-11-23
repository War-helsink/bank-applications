import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, ThemedSafeAreaView } from "@/components/shared";
import { Slot } from "expo-router";

const ProfileLayout: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Container className="w-full h-full">
					<Slot />
				</Container>
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default ProfileLayout;
