import type {
	DocumentData,
	FirestoreDataConverter,
	SnapshotOptions,
} from "firebase/firestore";
import type { UserType } from "../types";

export function userConverter(): FirestoreDataConverter<
	UserType,
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
): UserType {
	const id = snapshot.id;
	const data = snapshot.data(options);

	if (data.birthday) {
		data.birthday = data.birthday.toDate();
	}
	if (data.updatedAt) {
		data.updatedAt = data.updatedAt.toDate();
	}
	data.createdAt = data.createdAt.toDate();

	return { ...data, id } as UserType;
}
