import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Link, Text, Toolbar } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export const InformationBlock: React.FC = () => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const colorMess = useThemeColor("tertiary");
	const colorSupport = useThemeColor("primary");
	const colorQuestions = useThemeColor("danger");
	const colorStatements = useThemeColor("warning");
	const colorTariffs = useThemeColor("success");

	return (
		<Toolbar className="py-4 rounded-2xl my-2">
			<Text className="text-xs">INFORMATION</Text>

			<View className="mt-4 flex-row flex-wrap justify-between">
				<Link
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
					href="/messages"
				>
					<Ionicons name="notifications" size={30} color={colorMess} />
					<Text className="text-[10px] font-semibold">Message</Text>
				</Link>
				<Link
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
					href="/support"
				>
					<Ionicons name="chatbubble-ellipses" size={30} color={colorSupport} />
					<Text className="text-[10px] font-semibold">Support service</Text>
				</Link>
				<Link
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
					<Ionicons name="help-circle" size={30} color={colorQuestions} />
					<Text className="text-[10px] font-semibold">
						Frequently asked questions
					</Text>
				</Link>
				<Link
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
					<Ionicons name="documents" size={30} color={colorStatements} />
					<Text className="text-[10px] font-semibold">
						Statements and references
					</Text>
				</Link>
				<Link
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
					<Ionicons name="document-text" size={30} color={colorTariffs} />
					<Text className="text-[10px] font-semibold">Terms and tariffs</Text>
				</Link>
			</View>
		</Toolbar>
	);
};
