import { Text } from "react-native";
import { ThemedBottomSheet } from "@/components/shared";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemedSafeAreaView } from "@/components/shared";

import { useMemo, useRef } from "react";

import type BottomSheet from "@gorhom/bottom-sheet";

const StatisticsScreen: React.FC = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

	return (
		<GestureHandlerRootView className="flex-1">
			<ThemedSafeAreaView className="w-full h-full" edges={["bottom"]}>
				<ThemedBottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
					
				</ThemedBottomSheet>
			</ThemedSafeAreaView>
		</GestureHandlerRootView>
	);
};

export default StatisticsScreen;
