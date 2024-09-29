import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/core/navigation";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export default function TabLayout() {
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
}
