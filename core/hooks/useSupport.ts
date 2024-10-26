import { Support } from "@/core/entities/support";
import { useState, useEffect, useRef } from "react";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";

import { onSnapshot, query, orderBy, limit } from "firebase/firestore";
import type { Unsubscribe } from "firebase/firestore";

const limitMessage = 20;

export const useSupport = (uid?: string) => {
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
						messages.push(doc.data());
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

		try {
			const message = new Support({ text, uid });

			await message.create();

			notificationAsync(NotificationFeedbackType.Success);
		} catch (_) {
			notificationAsync(NotificationFeedbackType.Error);
		}
	};

	return { messages, sendMessage };
};
