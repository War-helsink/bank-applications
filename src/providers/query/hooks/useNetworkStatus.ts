import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

interface NetworkStatus {
	isOnline: boolean;
	isConnected: boolean | null;
	type: string | null;
}

export function useNetworkStatus(): NetworkStatus {
	const [networkState, setNetworkState] = useState<NetworkStatus>({
		isOnline: true,
		isConnected: null,
		type: null,
	});

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			setNetworkState({
				isOnline: !!state.isConnected,
				isConnected: state.isConnected,
				type: state.type,
			});
		});

		NetInfo.fetch().then((state) => {
			setNetworkState({
				isOnline: !!state.isConnected,
				isConnected: state.isConnected,
				type: state.type,
			});
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return networkState;
}
