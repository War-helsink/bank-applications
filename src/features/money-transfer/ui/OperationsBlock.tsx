import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Link, Text, Toolbar } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export const OperationsBlock: React.FC = () => {
	const color = useThemeColor("text");
	const backgroundColor = useThemeColor("mainSurfaceSecondary");

	function getLastMonthExpensesPhrase() {
		const now = new Date();
		const lastMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);

		const year = lastMonthDate.getFullYear();
		const month = lastMonthDate.toLocaleString("en-US", { month: "short" });

		return `Expenses in ${month} ${year}`;
	}

	return (
		<View className="flex-row my-2">
			<Toolbar className="grow items-start gap-2 py-4 rounded-2xl mr-1">
				<Link button style={{ backgroundColor }} href="/(authenticated)/(tabs)">
					<Ionicons name="wallet" size={18} color={color} />
				</Link>

				<Text className="text-xs">ALL OPERATIONS</Text>
				<Text className="text-[10px] opacity-75">
					{getLastMonthExpensesPhrase()}
				</Text>
				<Text className="text-xl font-bold">$0</Text>
			</Toolbar>

			<Toolbar className="grow items-start gap-2 py-4 rounded-2xl ml-1">
				<Link button style={{ backgroundColor }} href="/(authenticated)/(tabs)">
					<Ionicons name="cart" size={18} color={color} />
				</Link>
				<Text className="text-xs">CONSUMER LOAN</Text>
				<Text className="text-[10px] opacity-75">
					{getLastMonthExpensesPhrase()}
				</Text>
				<Text className="text-xl font-bold">-$0</Text>
			</Toolbar>
		</View>
	);
};
