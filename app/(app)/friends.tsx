import { Container, ThemedSafeAreaView } from "@/components/shared";
import { SearchFriendInput, YourFriends } from "@/components/features/friend";

import { useState } from "react";

const FriendsScreen: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>();

	return (
		<ThemedSafeAreaView className="h-full w-full pt-4" edges={["bottom"]}>
			<Container className="w-full h-full flex gap-4">
				<SearchFriendInput value={searchValue} onChange={setSearchValue} />

				<YourFriends title="YOUR FRIENDS" />
			</Container>
		</ThemedSafeAreaView>
	);
};

export default FriendsScreen;
