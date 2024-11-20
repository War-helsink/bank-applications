import { View, ScrollView, TouchableOpacity } from "react-native";
import {
	ThemedView,
	Container,
	Toolbar,
	Text,
	Link,
} from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import { useAuth } from "@/core/hooks/useAuth";
import { useCards } from "@/core/hooks/useCards";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import { CardTypeGradients, CardTypeDisplayNames } from "@/core/config/card";
import { PaymentNetworkImg } from "@/core/config/payment";

const CardsScreen: React.FC = () => {
	const { user } = useAuth();

	if (user === null) {
		return;
	}

	const backgroundColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");
	const color = useThemeColor("primary");

	const cards = useCards();

	return (
		<ThemedView className="w-full h-full">
			<ScrollView>
				<Container>
					<Toolbar className="my-6">
						<View className="flex-row justify-between my-2">
							<Text>Cards</Text>
							<Link href="/add-card">
								<Text style={{ color }}>Add</Text>
							</Link>
						</View>
						<View>
							{cards.map((card) => {
								const SVG = PaymentNetworkImg[card.paymentNetwork];

								return (
									<TouchableOpacity
										key={card.cardNumber}
										className="w-full flex-row my-2"
										onPress={() =>
											Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
										}
									>
										<LinearGradient
											colors={CardTypeGradients[card.cardType].colors}
											start={CardTypeGradients[card.cardType].start}
											end={CardTypeGradients[card.cardType].end}
											className="w-24 h-16 rounded-xl p-2 flex justify-between"
										>
											<View className="flex-row">
												<View
													className="w-4 h-1 rounded-xl"
													style={{ backgroundColor }}
												/>
												<View
													className="w-4 h-1 rounded-xl ml-2"
													style={{ backgroundColor }}
												/>
											</View>

											<View
												className="w-8 h-1 rounded-xl"
												style={{ backgroundColor }}
											/>
										</LinearGradient>

										<View
											className="mx-4 pb-2 flex-1 border-b border-solid"
											style={{ borderColor }}
										>
											<Text className="text-sm">
												{CardTypeDisplayNames[card.cardType]}
											</Text>
											<View className="flex-row items-center">
												<SVG width={32} height={32} />
												<Text className="ml-2 text-xs">
													{card.maskCardNumberMiddle}
												</Text>
											</View>
											<Text className="text-sm font-medium">
												{`${card.balance} ${card.currency}`}
											</Text>
										</View>
									</TouchableOpacity>
								);
							})}
						</View>
					</Toolbar>
				</Container>
			</ScrollView>
		</ThemedView>
	);
};

export default CardsScreen;
