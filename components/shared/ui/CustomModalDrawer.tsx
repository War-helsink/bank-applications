import type React from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/core/hooks/useThemeColor";

interface CustomDrawerProps {
	isVisible: boolean;
	onClose?: () => void;
	children: React.ReactNode;
}

export const CustomModalDrawer: React.FC<CustomDrawerProps> = ({
	isVisible,
	onClose,
	children,
}) => {
	const insets = useSafeAreaInsets();
	const backgroundColor = useThemeColor("background");

	return (
		<Modal
			visible={isVisible}
			animationType="slide"
			transparent
			onRequestClose={onClose}
		>
			<TouchableWithoutFeedback onPress={onClose}>
				<View
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.5)",
					}}
					className="absolute left-0 w-full h-full -z-10"
				/>
			</TouchableWithoutFeedback>
			<View
				className="h-full w-4/5 py-16"
				style={{
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					backgroundColor,
				}}
			>
				{children}
			</View>
		</Modal>
	);
};
