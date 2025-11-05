import {
	collection,
	doc,
	limit,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	where,
	type Unsubscribe,
} from "firebase/firestore";
import { firestore } from "@/shared/utils";
import { supportMessageConverter } from "../lib/converter";
import { limitMessage, SUPPORT_COLLECTION } from "../config";
import type { SupportMessageType } from "../types";

export function subscribeToSupportMessages(
	uid: string,
	callback: (messages: SupportMessageType[]) => void,
): Unsubscribe {
	const q = query(
		collection(firestore, SUPPORT_COLLECTION),
		where("uid", "==", uid),
		orderBy("createdAt", "desc"),
		limit(limitMessage),
	).withConverter(supportMessageConverter());

	return onSnapshot(q, (querySnapshot) =>
		callback(querySnapshot.docs.map((doc) => doc.data())),
	);
}

export function createSupportMessage(
	message: Omit<SupportMessageType, "id">,
): Promise<void> {
	const ref = doc(collection(firestore, SUPPORT_COLLECTION)).withConverter(
		supportMessageConverter(),
	);

	return setDoc(ref, { ...message, id: ref.id });
}
