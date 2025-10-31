import type React from "react";
import { View } from "react-native";
import { Text, Link, Container } from "@/shared/ui";
import { Link as RouterLink } from "expo-router";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { LoginForm } from "@/features/auth";

export const LoginWidget: React.FC = () => {
	const linkColor = useThemeColor("primary");

	return (
		<Container className="flex-1 w-full flex items-center">
			<View className="flex-1 justify-center gap-6 w-9/12">
				<View className="gap-2">
					<Text className="text-center text-4xl font-bold">Bank Login Now</Text>
					<Text className="text-center text-sm font-light opacity-75">
						Welcome to Bank! Log in now to access your account all the feature
						build for you.
					</Text>
				</View>

				<LoginForm />

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
			<View className="p-6">
				<Link href="/(unauthenticated)/auth/phone">
					<Text className="text-center text-base">
						New to account? <Text style={{ color: linkColor }}>Sign up</Text>
					</Text>
				</Link>
			</View>
		</Container>
	);
};
