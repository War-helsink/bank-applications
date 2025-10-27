import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemedSafeAreaView } from "@/shared/ui";

const PhotoScreen: React.FC = () => {
	return (
		<GestureHandlerRootView className="flex-1">
			<ThemedSafeAreaView
				className="w-full h-full"
				edges={["bottom"]}
			></ThemedSafeAreaView>
		</GestureHandlerRootView>
	);
};

export default PhotoScreen;
