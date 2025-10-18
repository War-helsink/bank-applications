import { Support } from "../model/support";
import type { Unsubscribe } from "firebase/firestore";
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

const limitMessage = 20;

export function useSupport(uid?: string) {
	const unsubscribe = useRef<Unsubscribe | null>(null);
	const [messages, setMessages] = useState<Support[]>([]);

	useEffect(() => {
		if (uid === null) {
			if (unsubscribe.current !== null) {
				unsubscribe.current();
				unsubscribe.current = null;
			}
			setMessages([]);
			return;
		}
		if (unsubscribe.current === null) {
			unsubscribe.current = onSnapshot(
				query(
					Support.getQueryCollectionRef("uid", "==", uid),
					orderBy("createdAt", "desc"),
					limit(limitMessage),
				),
				(querySnapshot) => {
					const messages: Support[] = [];
					querySnapshot.forEach((doc) => {
						messages.push(doc.data() as Support);
					});

					setMessages(messages);
				},
			);
		}
	}, [uid]);

	const sendMessage = async (text: string) => {
		if (!uid) {
			return;
		}

		const message = new Support({ text, uid });

		await message.create();
	};

	return { messages, sendMessage };
}
