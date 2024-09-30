import Toast, { BaseToast, type ToastConfig } from "react-native-toast-message";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const ToastEl: React.FC = () => {
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

	return <Toast config={toastConfig} />;
};
