import { useSession } from "@/entities/session";
import type { UserType } from "@/entities/user";
import {
	SearchFriendInput,
	SelectFriends,
	YourFriends,
} from "@/features/friend";
import {
	useGetFriends,
	useRefetchFriends,
	useSearchFriends,
} from "@/entities/friends";
import { Container, ThemedSafeAreaView } from "@/shared/ui";
import { useState } from "react";

const FriendsScreen: React.FC = () => {
	const { session } = useSession();
	const [searchValue, setSearchValue] = useState<string>();
	const { searchUsers } = useSearchFriends(session?.uid, searchValue);
	const refetch = useRefetchFriends(session?.uid);

	const { friends } = useGetFriends(session?.uid);

	const addNewFriend = (user: UserType) => {
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
