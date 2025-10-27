import { OtpInput, type OtpInputProps } from "react-native-otp-entry";
import { useThemeColor } from "../hooks/useThemeColor";

type FieldCodeProps = Omit<
	OtpInputProps,
	"type" | "numberOfDigits" | "focusColor" | "textProps"
>;

export const FieldCode: React.FC<FieldCodeProps> = ({ ...props }) => {
	const color = useThemeColor("text");
	const focusedColor = useThemeColor("primary");

	return (
		<OtpInput
			type="numeric"
			numberOfDigits={6}
			focusColor={focusedColor}
			textProps={{
				style: { color },
			}}
			{...props}
		/>
	);
};
