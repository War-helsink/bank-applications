import BottomSheet, { type BottomSheetProps } from "@gorhom/bottom-sheet";

import { useThemeColor } from "@/shared/hooks/useThemeColor";

export interface ThemedBottomSheetProps extends BottomSheetProps {
	ref: React.RefObject<BottomSheet>;
}

export const ThemedBottomSheet: React.FC<ThemedBottomSheetProps> = ({
	ref,
	...props
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const indicatorColor = useThemeColor("medium");

	return (
		<BottomSheet
			ref={ref}
			{...props}
			backgroundStyle={{ backgroundColor }}
			handleIndicatorStyle={{ backgroundColor: indicatorColor }}
		/>
	);
};

