import { Skeleton } from "moti/skeleton";

import { useColorScheme } from "@/shared/hooks/useColorScheme";

export const SkeletonLoader: React.FC<Omit< React.ComponentProps<typeof Skeleton>, "Gradient">> = ({
	...props
}) => {
	const theme = useColorScheme() ?? "light";

	return <Skeleton colorMode={theme} {...props} />;
};
