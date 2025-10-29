import type { Router } from "expo-router";

class CameraControllerService {
	private resolver: ((uri: string | null) => void) | null = null;

	public openCamera(router: Router): Promise<string | null> {
		return new Promise((resolve) => {
			this.resolver = resolve;
			router.navigate("/(authenticated)/camera");
		});
	}

	public resolveWithUri(uri: string | null): void {
		if (this.resolver) {
			this.resolver(uri);
			this.resolver = null;
		}
	}

	public cancel(): void {
		this.resolveWithUri(null);
	}
}

export const CameraService = new CameraControllerService();
