import type React from "react";
import { ActivityIndicator } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { TypeColors } from "@/shared/types";

export interface WithButtonLoadingProps {
	isLoading?: boolean;
	loadingColor?: TypeColors;
}

export function withButtonLoading<
	P extends React.PropsWithChildren & { disabled?: boolean; asChild?: boolean },
>(Component: React.ComponentType<P>) {
	const WrappedComponent: React.FC<P & WithButtonLoadingProps> = (props) => {
		const {
			isLoading,
			loadingColor = "primary",
			disabled,
			children,
			asChild,
			...restProps
		} = props;
		const color = useThemeColor(`${loadingColor}Contrast`);

		return (
			<Component
				disabled={disabled || isLoading}
				asChild={asChild || isLoading}
				{...(restProps as P)}
			>
				{isLoading ? (
					<ActivityIndicator size="small" color={color} />
				) : (
					children
				)}
			</Component>
		);
	};

	WrappedComponent.displayName = `withLoading(${Component.displayName || Component.name || "Component"})`;

	return WrappedComponent;
}
