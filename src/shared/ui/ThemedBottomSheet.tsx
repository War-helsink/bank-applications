import BottomSheet, {
	BottomSheetView,
	type BottomSheetProps,
} from "@gorhom/bottom-sheet";

import { useThemeColor } from "@/shared/hooks/useThemeColor";

export interface ThemedBottomSheetProps extends BottomSheetProps {
	ref?: React.RefObject<BottomSheet>;
}

export const ThemedBottomSheet: React.FC<ThemedBottomSheetProps> = ({
	...props
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const indicatorColor = useThemeColor("medium");

	return (
		<BottomSheet
			{...props}
			backgroundStyle={{ backgroundColor }}
			handleIndicatorStyle={{ backgroundColor: indicatorColor }}
		>
			<BottomSheetView className="flex-1">{props.children}</BottomSheetView>
		</BottomSheet>
	);
};
