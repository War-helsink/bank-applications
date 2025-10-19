import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, type ScrollViewProps } from "react-native";

import { useThemeGradient } from "@/shared/hooks/useThemeGradient";

export interface ScrollRefreshControlProps extends ScrollViewProps {
	callback: () => Promise<unknown>;
}

export const ScrollRefreshControl: React.FC<ScrollRefreshControlProps> = ({
	callback,
	...props
}) => {
	const [refreshing, setRefreshing] = useState(false);
	const colors = useThemeGradient("refreshControl");

	const onRefresh = useCallback(() => {
		setRefreshing(true);

		callback()
			.then(() => setRefreshing(false))
			.catch(() => {
				setRefreshing(false);
			});
	}, [callback]);

	return (
		<ScrollView
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					colors={colors}
				/>
			}
			{...props}
		/>
	);
};
