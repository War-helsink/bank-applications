import { AccountSlideCreate } from "./AccountSlideCreate";
import { AccountSlide } from "./AccountSlide";
import { Carousel } from "@/components/shared";
import { Dimensions } from "react-native";

import { useAuth } from "@/core/hooks/useAuth";
import { useAccounts } from "@/core/hooks/useAccounts";

const { width: viewportWidth } = Dimensions.get("window");

const cardWidth = Math.round(viewportWidth - 32);
const cardHeight = Math.round(cardWidth * 0.6);

export const AccountSlides: React.FC = () => {
	const { profile } = useAuth();

	if (profile === null) {
		return;
	}

	const accounts = useAccounts(profile.id);
	const data = [...accounts, { createAccount: true }];

	return (
		<Carousel
			data={data}
			width={viewportWidth}
			height={cardHeight}
			renderItem={({ item }) => {
				if (item.createAccount === true) {
					return <AccountSlideCreate width={cardWidth} height={cardHeight} />;
				}
				return (
					<AccountSlide width={cardWidth} height={cardHeight} account={item} />
				);
			}}
		/>
	);
};
