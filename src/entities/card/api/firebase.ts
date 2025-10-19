import {
	query,
	where,
	getDocs,
	collection,
	onSnapshot,
	type Unsubscribe,
	doc,
	setDoc,
	orderBy,
} from "firebase/firestore";
import { CARD_COLLECTION } from "../config/collection";
import { firestore } from "@/shared/utils/firebase";
import { cardConverter } from "../lib/converter";
import type { Card, CreateCardProps } from "../types";
import { generateCard } from "../utils";

export async function getUserCards(uid: string): Promise<Card[]> {
	const q = query(
		collection(firestore, CARD_COLLECTION),
		where("uid", "==", uid),
		orderBy("createdAt", "desc"),
	).withConverter(cardConverter());

	return getDocs(q).then((querySnapshot) => {
		const documents: Card[] = [];

		querySnapshot.forEach((doc) => {
			const document = doc.data();
			document.id = doc.id;

			documents.push(document);
		});

		return documents;
	});
}

export function subscribeToUserCards(
	uid: string,
	callback: (cards: Card[]) => void,
): Unsubscribe {
	const q = query(
		collection(firestore, CARD_COLLECTION),
		where("uid", "==", uid),
		orderBy("createdAt", "desc"),
	).withConverter(cardConverter());

	return onSnapshot(q, (querySnapshot) =>
		callback(querySnapshot.docs.map((doc) => doc.data())),
	);
}

export async function createCard(props: CreateCardProps): Promise<void> {
	const card = generateCard(props);

	const docRef = doc(firestore, CARD_COLLECTION, card.id).withConverter(
		cardConverter(),
	);

	return setDoc(docRef, card);
}
