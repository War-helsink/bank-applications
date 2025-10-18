import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text } from "@/shared/ui";
import { View } from "react-native";

export interface PercentProps {
	percent: number;
}

export const Percent: React.FC<PercentProps> = ({ percent }) => {
	const backgroundColor = useThemeColor("success");

	return (
		<View
			className="w-20 h-20 bg-transparent absolute -top-12 -right-12 justify-end items-center p-0 rotate-45"
			style={{ backgroundColor }}
		>
			<Text className="text-[10px] text-black">{percent}%</Text>
		</View>
	);
};
