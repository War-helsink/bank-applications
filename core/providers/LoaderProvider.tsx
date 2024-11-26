import { createContext, useState, useMemo } from "react";
import { Loader } from "@/components/shared";
import { View, Modal, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export interface ILoaderContext {
	showLoader: () => void;
	hideLoader: () => void;
}

export const LoaderContext = createContext<ILoaderContext>(
	{} as ILoaderContext,
);

export const LoaderProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);

	const value = useMemo(
		() => ({
			showLoader: () => setLoading(true),
			hideLoader: () => setLoading(false),
		}),
		[],
	);

	return (
		<LoaderContext.Provider value={value}>
			{children}

			<Modal visible={loading} transparent={true} animationType="fade">
				<View style={styles.fullscreenContainer}>
					<BlurView style={styles.blurView} intensity={50} tint="light" />
					<View style={styles.activityContainer}>
						<Loader />
					</View>
				</View>
			</Modal>
		</LoaderContext.Provider>
	);
};

const styles = StyleSheet.create({
	fullscreenContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 1000000,
	},
	blurView: {
		...StyleSheet.absoluteFillObject,
	},
	activityContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
