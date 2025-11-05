import type {
	DocumentData,
	FirestoreDataConverter,
	SnapshotOptions,
} from "firebase/firestore";
import type { SupportMessageType } from "../types";

export function supportMessageConverter(): FirestoreDataConverter<
	SupportMessageType,
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
): SupportMessageType {
	const id = snapshot.id;
	const data = snapshot.data(options);

	data.createdAt = data.createdAt.toDate();

	return { ...data, id };
}
