import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";

import { useRouter, type Href } from "expo-router";

export interface LinkProps extends TouchableOpacityProps {
	href?: Href;
	routerType?: "push" | "replace";
	haptics?: boolean;
	typeHaptics?: ImpactFeedbackStyle;
}

export const Link: React.FC<LinkProps> = ({
	href,
	routerType = "push",
	haptics = true,
	typeHaptics = ImpactFeedbackStyle.Soft,
	...props
}) => {
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
			{...props}
		/>
	);
};
