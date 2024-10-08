import { Skeleton } from "moti/skeleton";
import type { MotiSkeletonProps } from "moti/build/skeleton/types";

import { useColorScheme } from "@/core/hooks/useColorScheme";

export const SkeletonLoader: React.FC<Omit<MotiSkeletonProps, "Gradient">> = ({
	...props
}) => {
	const theme = useColorScheme() ?? "light";

	return <Skeleton colorMode={theme} {...props} />;
};
