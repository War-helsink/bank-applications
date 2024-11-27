import { Container, ThemedSafeAreaView } from "@/components/shared";
import {
	SearchFriendInput,
	SelectFriends,
	YourFriends,
} from "@/components/features/friend";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import {
	useSearchFriends,
	useRefetchFriends,
	useGetFriends,
} from "@/core/hooks/useFriends";

import type { UserProfile } from "@/core/entities/user";

const FriendsScreen: React.FC = () => {
	const { user } = useAuth();
	const [searchValue, setSearchValue] = useState<string>();
	const { searchUsers } = useSearchFriends(user?.uid, searchValue);
	const refetch = useRefetchFriends(user?.uid);

	const { friends } = useGetFriends(user?.uid);

	const addNewFriend = (user: UserProfile) => {
		if (!friends) {
			return;
		}
		friends
			.addUsers({
				uid: user.id,
				firstName: user.firstName,
				secondName: user.secondName,
				lastName: user.lastName,
				avatarUrl: user.avatarUrl,
			})
			.then(() => refetch());
	};

	return (
		<ThemedSafeAreaView className="h-full w-full pt-4" edges={["bottom"]}>
			<Container className="w-full h-full flex gap-4">
				<SearchFriendInput value={searchValue} onChange={setSearchValue} />
				<SelectFriends
					users={searchUsers}
					selectUser={(user) => addNewFriend(user)}
				/>
				<YourFriends title="YOUR FRIENDS" name />
			</Container>
		</ThemedSafeAreaView>
	);
};

export default FriendsScreen;
