import { Container, CustomModalDrawer } from "@/shared/ui";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ProfileScreen } from "./ProfileScreen";

interface ProfileModalProps {
	isVisible: boolean;
	onClose?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
	isVisible,
	onClose,
}) => {
	return (
		<CustomModalDrawer isVisible={isVisible} onClose={onClose}>
			<KeyboardAvoidingView
				className="w-full h-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Container className="w-full h-full">
					<ProfileScreen />
				</Container>
			</KeyboardAvoidingView>
		</CustomModalDrawer>
	);
};
