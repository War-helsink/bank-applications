import type React from "react";
import { View, ScrollView } from "react-native";
import { Link as RouterLink } from "expo-router";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Container, Text } from "@/shared/ui";
import { SignUpForm } from "@/features/auth";

export const SignUpWidget: React.FC = () => {
	const linkColor = useThemeColor("primary");

	return (
		<Container className="flex-1 w-full justify-center items-center">
			<ScrollView
				className="flex-1 w-9/12"
				showsVerticalScrollIndicator={false}
			>
				<View className="gap-6">
					<View className="gap-2">
						<Text className="text-center text-4xl font-bold">
							Create an account
						</Text>
						<Text className="text-center text-sm font-light opacity-75">
							Welcome to Bank! Log in now to access your account all the feature
							build for you.
						</Text>
					</View>

					<SignUpForm />
				</View>
			</ScrollView>
			<View className="p-6 w-9/12">
				<Text className="text-center text-sm font-light">
					By clicking continue, you agree to our{" "}
					<RouterLink
						href="/(unauthenticated)/policy/terms-of-service"
						className="underline"
						style={{ color: linkColor }}
					>
						Terms of Service
					</RouterLink>{" "}
					and{" "}
					<RouterLink
						href="/(unauthenticated)/policy/privacy-policy"
						className="underline"
						style={{ color: linkColor }}
					>
						Privacy Policy
					</RouterLink>
					.
				</Text>
			</View>
		</Container>
	);
};
