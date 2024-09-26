import { StyleSheet } from "react-native";

export const BOX_SHADOW = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.15,
		shadowRadius: 10,
		elevation: 5,
	},
});
