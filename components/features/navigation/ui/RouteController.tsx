import { useSegments, useRouter } from "expo-router";
import { useAuth } from "@/core/hooks/useAuth";
import { useEffect } from "react";

export const RouteController: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const segments = useSegments();
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (user === null && router) {
			return router.replace("/auth");
		}
		if (segments[0] === "auth") {
			return router.replace("/");
		}
	}, [user, router, segments]);

	return children;
};
