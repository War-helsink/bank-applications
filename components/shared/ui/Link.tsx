import clsx from "clsx";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";

import { useRouter, type Href } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface LinkProps extends TouchableOpacityProps {
	href?: Href;
	button?: boolean;
	routerType?: "push" | "replace";
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
				}
			}}
			className={clsx(
				{ "p-2.5 rounded-xl justify-center items-center": button },
				className,
			)}
			style={[button && { backgroundColor }, style]}
			{...props}
		/>
	);
};
