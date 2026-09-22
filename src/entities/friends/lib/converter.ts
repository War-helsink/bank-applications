import type {
	DocumentData,
	FirestoreDataConverter,
	SnapshotOptions,
} from "firebase/firestore";
import type { FriendsData } from "../types";

export function friendsConverter(): FirestoreDataConverter<
	FriendsData,
	DocumentData
> {
	return {
		fromFirestore: (snapshot, options) => fromFirestore(snapshot, options),
		toFirestore: (entityData) => {
			const { id: _, ...data } = entityData;
			return data;
		},
	};
}

function fromFirestore(
	snapshot: DocumentData,
	options?: SnapshotOptions,
): FriendsData {
	const id = snapshot.id;
	const data = snapshot.data(options);

	return { ...data, id } as FriendsData;
}
