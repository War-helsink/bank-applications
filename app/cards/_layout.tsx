import { View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView, Container, Toolbar, Text } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import { useAuth } from "@/core/hooks/useAuth";
import { useCards } from "@/core/hooks/useCards";
import { useRouter } from "expo-router";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import { CardTypeGradients, CardTypeDisplayNames } from "@/core/config/card";
import { PaymentNetworkImg } from "@/core/config/payment";

const CardsLayout: React.FC = () => {
	const { user } = useAuth();

	if (user === null) {
		return;
	}

	const tw = useTailwind();
	const backgroundColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");
	const color = useThemeColor("primary");
	const router = useRouter();

	const cards = useCards();

	return (
		<ThemedView style={tw("h-full w-full")}>
			<ScrollView>
				<Container>
					<Toolbar style={tw("my-6")}>
						<View style={tw("flex-row justify-between my-2")}>
							<Text>Cards</Text>
							<TouchableOpacity onPress={() => router.push("/add-card")}>
								<Text style={{ color }}>Add</Text>
							</TouchableOpacity>
						</View>
						<View>
							{cards.map((card) => {
								const SVG = PaymentNetworkImg[card.paymentNetwork];

								return (
									<TouchableOpacity
										key={card.cardNumber}
										style={tw("w-full flex-row my-2")}
										onPress={() =>
											Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
										}
									>
										<LinearGradient
											colors={CardTypeGradients[card.cardType].colors}
											start={CardTypeGradients[card.cardType].start}
											end={CardTypeGradients[card.cardType].end}
											style={tw(
												"w-24 h-16 rounded-xl p-2 flex justify-between",
											)}
										>
											<View style={tw("flex-row")}>
												<View
													style={[
														tw("w-4 h-1 rounded-xl"),
														{ backgroundColor },
													]}
												/>
												<View
													style={[
														tw("w-4 h-1 rounded-xl ml-2"),
														{ backgroundColor },
													]}
												/>
											</View>

											<View
												style={[tw("w-8 h-1 rounded-xl"), { backgroundColor }]}
											/>
										</LinearGradient>

										<View
											style={[
												tw("mx-4 pb-2 flex-1 border-b border-solid"),
												{ borderColor },
											]}
										>
											<Text style={tw("text-sm")}>
												{CardTypeDisplayNames[card.cardType]}
											</Text>
											<View style={tw("flex-row items-center")}>
												<SVG width={32} height={32} />
												<Text style={tw("ml-2 text-xs")}>
													{card.maskCardNumberMiddle}
												</Text>
											</View>
											<Text style={tw("text-sm font-medium")}>
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

export default CardsLayout;
