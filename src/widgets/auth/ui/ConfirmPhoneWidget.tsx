import { useState } from "react";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import { FieldCode, Text, Button, TextButton, Container } from "@/shared/ui";
import { useThemeColor } from "@/shared/hooks/useThemeColor";

interface ConfirmPhoneWidgetProps {
	phone: string;
}

export const ConfirmPhoneWidget: React.FC<ConfirmPhoneWidgetProps> = ({
	phone,
}) => {
	const router = useRouter();
	const [code, setCode] = useState("");
	const linkColor = useThemeColor("primary");
	const [isResendLoading, setIsResendLoading] = useState(false);

	const onVerify = () => {
		if (code.length !== 6) {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
			return;
		}
		Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		router.navigate({
			pathname: "/(unauthenticated)/auth/signup",
		});
	};

	const onResend = () => {
		setIsResendLoading(true);
		setTimeout(() => {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
			setIsResendLoading(false);
		}, 3000);
	};
	return (
		<Container className="flex-1 w-full pt-8">
			<View className="flex-1 gap-6">
				<View className="gap-2 items-center">
					<Text className="text-center text-3xl font-bold">
						OTP verification
					</Text>
					<Image
						source={require("@assets/images/screen/phone-verified.png")}
						className="w-40 h-40"
					/>

					<Text className="text-center text-sm font-light">
						Enter the code from the SMS we send to{" "}
						<Text className="underline" style={{ color: linkColor }}>
							{phone}
						</Text>
						.
					</Text>
				</View>

				<FieldCode onTextChange={setCode} />

				<Text className="text-center text-base">
					I didn&apos;t receive the code?{" "}
					<TextButton
						className="underline"
						style={{ color: linkColor }}
						onPress={onResend}
					>
						Resend
					</TextButton>
				</Text>
			</View>

			<View className="p-6 justify-center items-center">
				<Button
					isLoading={isResendLoading}
					className="w-64 rounded-full py-4"
					onPress={onVerify}
				>
					Verify
				</Button>
			</View>
		</Container>
	);
};
