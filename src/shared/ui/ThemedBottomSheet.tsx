import BottomSheet, {
	BottomSheetView,
	type BottomSheetProps,
} from "@gorhom/bottom-sheet";

import { useThemeColor } from "@/shared/hooks/useThemeColor";

export interface ThemedBottomSheetProps extends BottomSheetProps {
	ref?: React.RefObject<BottomSheet>;
	bottomSheetViewProps?: Omit<
		React.ComponentProps<typeof BottomSheetView>,
		"children"
	>;
}

export const ThemedBottomSheet: React.FC<ThemedBottomSheetProps> = ({
	bottomSheetViewProps,
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
			<BottomSheetView className="flex-1" {...bottomSheetViewProps}>
				{props.children}
			</BottomSheetView>
		</BottomSheet>
	);
};
