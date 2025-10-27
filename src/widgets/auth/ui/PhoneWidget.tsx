import type React from "react";
import { useState } from "react";
import { View } from "react-native";
import * as Haptics from "expo-haptics";
import { Link as RouterLink, useRouter } from "expo-router";
import { FieldPhone, Link, Text, Button, Container } from "@/shared/ui";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { formatPhoneNumber } from "@/shared/utils";

export const PhoneWidget: React.FC = () => {
	const router = useRouter();
	const linkColor = useThemeColor("primary");
	const [phone, setPhone] = useState("");

	const onContinue = () => {
		if (phone.length !== 9) {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
			return;
		}
		Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		router.navigate({
			pathname: "/(unauthenticated)/auth/confirm-phone",
			params: { phone: formatPhoneNumber(phone) },
		});
	};

	return (
		<Container className="flex-1 pt-8">
			<View className="flex-1 gap-6">
				<View className="gap-2">
					<Text className="text-center text-3xl font-bold">
						What&apos;s your phone number?
					</Text>
					<Text className="text-center text-sm font-light opacity-75">
						We&apos;ll use this to verify your identity and send you
						notifications.
					</Text>
				</View>

				<FieldPhone
					placeholder="Enter your phone number"
					value={phone}
					onChange={setPhone}
				/>

				<Link href="/(unauthenticated)/auth/login" routerType="dismissTo">
					<Text className="text-center text-base">
						Have an account?{" "}
						<Text style={{ color: linkColor }}>Login in here</Text>
					</Text>
				</Link>
			</View>
			<View className="p-6 gap-8 justify-center items-center">
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
				<Button className="w-64 rounded-full py-4" onPress={onContinue}>
					Continue
				</Button>
			</View>
		</Container>
	);
};
