import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/navigation";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
		</Tabs>
	);
}
