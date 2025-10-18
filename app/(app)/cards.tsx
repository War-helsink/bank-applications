import { useSession } from "@/entities/session";
import { PaymentNetworkImg } from "@/shared/config";
import { CardTypeDisplayNames, CardTypeGradients } from "@/entities/card";
import { useCards } from "@/shared/hooks/useCards";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import {
	Container,
	Link,
	Text,
	ThemedSafeAreaView,
	Toolbar,
} from "@/shared/ui";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const CardsScreen: React.FC = () => {
	const { session } = useSession();

	if (!session) {
		return;
	}

	const backgroundColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");
	const color = useThemeColor("primary");

	const cards = useCards();

	return (
		<ThemedSafeAreaView className="w-full h-full" edges={["bottom"]}>
			<ScrollView>
				<Container>
					<Toolbar className="my-6 rounded-md">
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
											style={style.linearGradient}
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
		</ThemedSafeAreaView>
	);
};

const style = StyleSheet.create({
	linearGradient: {
		width: 96,
		height: 64,
		padding: 8,
		borderRadius: 12,
		justifyContent: "space-between",
	},
});

export default CardsScreen;
