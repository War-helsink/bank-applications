import { forwardRef } from "react";
import BottomSheet, { type BottomSheetProps } from "@gorhom/bottom-sheet";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface ThemedBottomSheetProps extends BottomSheetProps {}

export const ThemedBottomSheet = forwardRef<
	BottomSheet,
	ThemedBottomSheetProps
>((props, ref) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const indicatorColor = useThemeColor("medium");

	return (
		<BottomSheet ref={ref} {...props} backgroundStyle={{ backgroundColor }} handleIndicatorStyle={{backgroundColor: indicatorColor}} />
	);
});
