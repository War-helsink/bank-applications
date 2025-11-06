import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useNetworkStatus } from "../hooks/useNetworkStatus";
import Toast from "react-native-toast-message";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const NetworkStatusIndicator: React.FC = () => {
	const insets = useSafeAreaInsets();
	const { isOnline } = useNetworkStatus();
	const backgroundColor = useThemeColor("danger");
	const slideAnim = useRef(new Animated.Value(isOnline ? -100 : 0));

	useEffect(() => {
		Animated.timing(slideAnim.current, {
			toValue: isOnline ? -100 : 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
		if (!isOnline) {
			Toast.show({
				type: "error",
				text1: "No internet connection",
				text2: "Swipe to dismiss",
				autoHide: false,
				topOffset: insets.top + 10,
				visibilityTime: 0,
			});
		} else {
			Toast.hide();
		}
	}, [isOnline, insets.top]);

	if (isOnline) {
		return null;
	}

	return (
		<Animated.View
			className="absolute top-0 left-0 right-0 z-50"
			style={{
				height: insets.top,
				backgroundColor,
				transform: [{ translateY: slideAnim.current }],
			}}
		/>
	);
};
