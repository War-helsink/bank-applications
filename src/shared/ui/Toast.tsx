import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ToastMessage, {
	BaseToast,
	type ToastConfig,
} from "react-native-toast-message";

export const Toast: React.FC = () => {
	const insets = useSafeAreaInsets();
	const colorSuccess = useThemeColor("success");
	const colorError = useThemeColor("danger");
	const colorInfo = useThemeColor("medium");
	const color = useThemeColor("white");

	const toastConfig: ToastConfig = {
		success: (internalState) => (
			<BaseToast
				{...internalState}
				style={{ borderLeftColor: colorSuccess, backgroundColor: colorSuccess }}
				text1Style={{ color: color }}
				text2Style={{ color: color }}
			/>
		),
		error: (internalState) => (
			<BaseToast
				{...internalState}
				style={{ borderLeftColor: colorError, backgroundColor: colorError }}
				text1Style={{ color: color }}
				text2Style={{ color: color }}
			/>
		),
		info: (internalState) => (
			<BaseToast
				{...internalState}
				style={{ borderLeftColor: colorInfo, backgroundColor: colorInfo }}
				text1Style={{ color: color }}
				text2Style={{ color: color }}
			/>
		),
	};

	return (
		<ToastMessage
			config={toastConfig}
			topOffset={insets.top}
			bottomOffset={insets.bottom}
		/>
	);
};
