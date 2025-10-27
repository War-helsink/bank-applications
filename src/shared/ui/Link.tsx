import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import {
	type Href,
	type Router as ExpoRouterRouter,
	useRouter,
} from "expo-router";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { cn } from "../utils";

type RouterMethodName = keyof ExpoRouterRouter;

type RouterArgs<K extends RouterMethodName> = Parameters<ExpoRouterRouter[K]>;

export interface LinkBaseProps extends TouchableOpacityProps {
	button?: boolean;
	haptics?: boolean;
	typeHaptics?: ImpactFeedbackStyle;
}

export type LinkProps<K extends RouterMethodName = "push"> = LinkBaseProps & {
	href?: Href;
	routerType?: K;
	routerArgs?: RouterArgs<K>;
};

export function Link<K extends RouterMethodName = "push">({
	href,
	className,
	style,
	routerType = "push" as K,
	button = false,
	haptics = true,
	typeHaptics = ImpactFeedbackStyle.Soft,
	routerArgs,
	...props
}: LinkProps<K>) {
	const backgroundColor = useThemeColor("toolbarBackground");
	const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => {
				if (haptics) {
					impactAsync(typeHaptics);
				}
				const method = router[routerType];
				if (typeof method !== "function") return;
				const args: unknown[] = Array.isArray(routerArgs)
					? (routerArgs as unknown[])
					: href !== undefined
						? [href]
						: [];

				(method as (...args: unknown[]) => void)(...args);
			}}
			className={cn(
				{ "p-2.5 rounded-xl justify-center items-center": button },
				className,
			)}
			style={[button && { backgroundColor }, style]}
			{...props}
		/>
	);
}
