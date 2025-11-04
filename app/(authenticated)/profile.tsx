import { KeyboardAvoidingView, Platform } from "react-native";
import { ProfileWidgets } from "@/widgets/profile";
import { Container, ThemedSafeAreaView } from "@/shared/ui";

const ProfileScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView
			className="flex-1 w-full"
			edges={["bottom", "left", "right"]}
		>
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={150}
			>
				<Container className="w-full h-full">
					<ProfileWidgets />
				</Container>
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default ProfileScreen;
