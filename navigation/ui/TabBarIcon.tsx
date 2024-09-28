import Ionicons from "@expo/vector-icons/Ionicons";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";
import type { ComponentProps } from "react";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withRepeat,
	withSequence,
} from "react-native-reanimated";

export interface TabBarIconProps
	extends IconProps<ComponentProps<typeof Ionicons>["name"]> {
	focused?: boolean;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({
	style,
	focused,
	...rest
}) => {
	const rotationAnimation = useSharedValue(0);

	rotationAnimation.value = withRepeat(
		withSequence(
			withTiming(1.2, { duration: 200 }),
			withTiming(1, { duration: 200 }),
		),
		2,
	);
	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: rotationAnimation.value }],
	}));

	return (
		<Animated.View style={focused && animatedStyle}>
			<Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
		</Animated.View>
	);
};
