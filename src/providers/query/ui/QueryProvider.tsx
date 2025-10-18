import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config";

export const QueryProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
