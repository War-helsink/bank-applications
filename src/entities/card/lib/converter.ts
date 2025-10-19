import type {
	DocumentData,
	FirestoreDataConverter,
	SnapshotOptions,
} from "firebase/firestore";
import type { Card } from "../types";

export function cardConverter(): FirestoreDataConverter<Card, DocumentData> {
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
): Card {
	const id = snapshot.id;
	const data = snapshot.data(options);

	data.createdAt = data.createdAt.toDate();

	return { ...data, id };
}
