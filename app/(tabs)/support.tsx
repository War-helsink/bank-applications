import { KeyboardAvoidingView, Platform } from "react-native";
import { ThemedView } from "@/components/shared";
import { Support } from "@/components/widgets/support";


const SupportScreen: React.FC = () => {
	return (
		<KeyboardAvoidingView
			className="h-full w-full"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ThemedView className="h-full w-full pt-16">
				<Support className="flex-1" />
			</ThemedView>
		</KeyboardAvoidingView>
	);
};

export default SupportScreen;
