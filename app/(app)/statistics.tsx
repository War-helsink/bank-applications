import { ThemedBottomSheet, ThemedSafeAreaView } from "@/shared/ui";
import { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const StatisticsScreen: React.FC = () => {
	const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

	return (
		<GestureHandlerRootView className="flex-1">
			<ThemedSafeAreaView className="w-full h-full" edges={["bottom"]}>
				<ThemedBottomSheet snapPoints={snapPoints}></ThemedBottomSheet>
			</ThemedSafeAreaView>
		</GestureHandlerRootView>
	);
};

export default StatisticsScreen;
