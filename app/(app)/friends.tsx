import { Container, ThemedSafeAreaView } from "@/components/shared";
import {
	SearchFriendInput,
	SelectFriends,
	YourFriends,
} from "@/components/features/friend";

import { useState } from "react";
import { useSearchFriends } from "@/core/hooks/useFriends";

const FriendsScreen: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>();
	const { searchUsers } = useSearchFriends(searchValue);

	return (
		<ThemedSafeAreaView className="h-full w-full pt-4" edges={["bottom"]}>
			<Container className="w-full h-full flex gap-4">
				<SearchFriendInput value={searchValue} onChange={setSearchValue} />
				<SelectFriends
					users={searchUsers}
					// selectUser={(user) => console.log("User: ", user.toData())}
				/>
				<YourFriends title="YOUR FRIENDS" />
			</Container>
		</ThemedSafeAreaView>
	);
};

export default FriendsScreen;
