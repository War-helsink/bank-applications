import { ThemedBottomSheet, ThemedSafeAreaView } from "@/components/shared";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useMemo } from "react";

const StatisticsScreen: React.FC = () => {
	const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

	return (
		<GestureHandlerRootView className="flex-1">
			<ThemedSafeAreaView className="w-full h-full" edges={["bottom"]}>
				<ThemedBottomSheet snapPoints={snapPoints}>
					
				</ThemedBottomSheet>
			</ThemedSafeAreaView>
		</GestureHandlerRootView>
	);
};

export default StatisticsScreen;
