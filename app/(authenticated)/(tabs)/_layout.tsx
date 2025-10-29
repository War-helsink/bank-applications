import { TabBarIcon } from "@/features/navigation";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Tabs } from "expo-router";

const TabLayout: React.FC = () => {
	const tabBarActiveTintColor = useThemeColor("primary");

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: tabBarActiveTintColor,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "home" : "home-outline"}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="services"
				options={{
					title: "Services",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "grid" : "grid-outline"}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="support"
				options={{
					title: "Support",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={
								focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
							}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					title: "More",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={
								focused
									? "ellipsis-horizontal-sharp"
									: "ellipsis-horizontal-outline"
							}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
