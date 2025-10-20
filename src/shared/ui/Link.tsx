import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import { type Href, useRouter } from "expo-router";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { cn } from "../utils";

export interface LinkProps extends TouchableOpacityProps {
	href?: Href;
	button?: boolean;
	routerType?: "push" | "replace" | "navigate";
	haptics?: boolean;
	typeHaptics?: ImpactFeedbackStyle;
}

export const Link: React.FC<LinkProps> = ({
	href,
	className,
	style,
	routerType = "push",
	button = false,
	haptics = true,
	typeHaptics = ImpactFeedbackStyle.Soft,
	...props
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => {
				if (!haptics || !href) {
					return;
				}

				impactAsync(typeHaptics);

				switch (routerType) {
					case "push": {
						return router.push(href);
					}
					case "replace": {
						return router.replace(href);
					}
					case "navigate": {
						return router.navigate(href);
					}
				}
			}}
			className={cn(
				{ "p-2.5 rounded-xl justify-center items-center": button },
				className,
			)}
			style={[button && { backgroundColor }, style]}
			{...props}
		/>
	);
};
