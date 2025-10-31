import { useCachedAvatar } from "@/shared/hooks/useCached";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { ViewProps } from "react-native";
import { Image, View } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils";
import { Loader } from "./Loader";

const calculateFontSize = (avatarSize: number): number => {
	return Math.round(avatarSize * 0.42);
};

export interface AvatarProps extends Omit<ViewProps, "children"> {
	uid: string;
	name?: string;
	avatarUrl?: string | null;
	size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
	uid,
	name,
	avatarUrl,
	size = 36,
	style,
	className,
	...props
}) => {
	const backgroundColor = useThemeColor("mediumTint");
	const color = useThemeColor("white");

	const fontSize = calculateFontSize(size);
	const [uri, isLoading] = useCachedAvatar(uid, avatarUrl);

	return (
		<View
			className={cn("items-center justify-center overflow-hidden", className)}
			style={[
				{
					width: size,
					height: size,
					backgroundColor,
				},
				style,
			]}
			{...props}
		>
			{isLoading ? (
				<Loader size="small" />
			) : uri ? (
				<Image
					source={{ uri }}
					style={{
						width: size,
						height: size,
					}}
				/>
			) : (
				<Text className="font-medium" style={{ color, fontSize }}>
					{name?.slice(0, 1)}
				</Text>
			)}
		</View>
	);
};
