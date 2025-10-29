import { useCachedAvatar } from "@/shared/hooks/useCached";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { ViewProps } from "react-native";
import { Image, View } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils";
import { Loader } from "./Loader";

export interface AvatarProps extends Omit<ViewProps, "children"> {
	uid: string;
	name?: string;
	avatarUrl?: string | null;
	size?: "small" | "large";
}

export const Avatar: React.FC<AvatarProps> = ({
	uid,
	name,
	avatarUrl,
	size = "small",
	style,
	className,
	...props
}) => {
	const backgroundColor = useThemeColor("mediumTint");
	const color = useThemeColor("white");
	const isSmall = size === "small";

	const [uri, isLoading] = useCachedAvatar(uid, avatarUrl);

	return (
		<View
			className={cn(
				`rounded-2xl items-center justify-center ${isSmall ? "w-9 h-9" : "w-14 h-14"}`,
				className,
			)}
			style={[{ backgroundColor }, style]}
			{...props}
		>
			{isLoading ? (
				<Loader size="small" />
			) : uri ? (
				<Image source={{ uri }} className="rounded-2xl w-full h-full" />
			) : (
				<Text
					className={`${isSmall ? "text-lg" : "text-xl"} font-medium`}
					style={{ color }}
				>
					{name?.slice(0, 1)}
				</Text>
			)}
		</View>
	);
};
