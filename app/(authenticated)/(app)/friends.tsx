import { useState } from "react";
import {
	SearchFriendInput,
	SelectFriends,
	YourFriends,
} from "@/features/friend";
import { useSession } from "@/entities/session";
import type { UserType } from "@/entities/user";
import { useAddFriend, useSearchFriends } from "@/entities/friends";
import { Container, ThemedSafeAreaView } from "@/shared/ui";

const FriendsScreen: React.FC = () => {
	const { session } = useSession();
	const [searchValue, setSearchValue] = useState<string>();
	const { searchUsers } = useSearchFriends(session?.uid, searchValue);

	const { addFriend, getDisabled } = useAddFriend();

	const addNewFriend = (user: UserType) => {
		addFriend({
			uid: user.id,
			firstName: user.firstName,
			secondName: user.secondName,
			lastName: user.lastName,
			avatarUrl: user.avatarUrl,
		});
	};

	return (
		<ThemedSafeAreaView className="h-full w-full pt-4" edges={["bottom"]}>
			<Container className="w-full h-full flex gap-4">
				<SearchFriendInput value={searchValue} onChange={setSearchValue} />
				<SelectFriends
					getDisabled={getDisabled}
					users={searchUsers}
					selectUser={(user) => addNewFriend(user)}
				/>
				<YourFriends title="YOUR FRIENDS" name />
			</Container>
		</ThemedSafeAreaView>
	);
};

export default FriendsScreen;
