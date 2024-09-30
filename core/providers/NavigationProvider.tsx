import { useSegments, useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useAuth } from "@/core/hooks/useAuth";
import { useEffect } from "react";

export const NavigationProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const color = useThemeColor("text");
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
