import { useCallback } from "react";
import { Modal } from "react-native";
import type {
	BottomSheetBackdropProps,
	SNAP_POINT_TYPE,
} from "@gorhom/bottom-sheet";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
	ThemedBottomSheet,
	type ThemedBottomSheetProps,
} from "./ThemedBottomSheet";

export interface BottomModalProps extends ThemedBottomSheetProps {
	readonly isVisible: boolean;
	readonly onClose: VoidFunction;
}

export const BottomModal: React.FC<BottomModalProps> = ({
	isVisible,
	onClose,
	onChange,
	...props
}) => {
	const handleSheetChanges = useCallback(
		(index: number, position: number, type: SNAP_POINT_TYPE) => {
			if (index === -1) {
				onClose();
			}
			onChange?.(index, position, type);
		},
		[onClose, onChange],
	);

	return (
		<Modal transparent visible={isVisible} animationType="fade">
			<GestureHandlerRootView className="flex-1">
				<ThemedBottomSheet
					{...props}
					enablePanDownToClose
					backdropComponent={RenderBackdrop}
					onChange={handleSheetChanges}
				/>
			</GestureHandlerRootView>
		</Modal>
	);
};

const RenderBackdrop: React.FC<BottomSheetBackdropProps> = (props) => (
	<BottomSheetBackdrop
		{...props}
		disappearsOnIndex={-1}
		appearsOnIndex={0}
		pressBehavior="close"
	/>
);
