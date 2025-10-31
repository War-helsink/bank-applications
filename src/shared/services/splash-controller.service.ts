import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";

export class SplashControllerService {
	private tasks = new Set<string>();
	private listeners = new Set<() => void>();

	start() {
		return preventAutoHideAsync();
	}

	register(task: string) {
		this.tasks.add(task);
	}

	finish(task: string) {
		this.tasks.delete(task);
		this.notify();
		if (this.tasks.size === 0) {
			return hideAsync();
		}
	}

	onReadyChange(listener: () => void) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}

	private notify() {
		if (this.ready) for (const listener of this.listeners) listener();
	}

	get ready() {
		return this.tasks.size === 0;
	}
}

export const SplashController = new SplashControllerService();
