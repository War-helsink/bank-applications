import { memo } from "react";
import { StyleSheet, View } from "react-native";

const horizontalSections = ["top", "middle", "bottom"];
const verticalSections = ["left", "middle", "right"];

const CropSectionComponent: React.FC = () => {
	return horizontalSections.map((horizontalSection) => (
		<View style={{ flexDirection: "row", flex: 1 }} key={horizontalSection}>
			{verticalSections.map((verticalSection) => {
				const key = horizontalSection + verticalSection;
				const showCover = [
					"topleft",
					"topright",
					"bottomleft",
					"bottomright",
				].includes(key);

				return (
					<View style={styles.defaultSection} key={key}>
						{showCover && (
							<View
								style={[
									styles.cornerMarker,
									horizontalSection === "top"
										? { top: -4, borderTopWidth: 7 }
										: { bottom: -4, borderBottomWidth: 7 },
									verticalSection === "left"
										? { left: -4, borderLeftWidth: 7 }
										: { right: -4, borderRightWidth: 7 },
								]}
							/>
						)}
					</View>
				);
			})}
		</View>
	));
};

export const CropSection = memo(CropSectionComponent);

const styles = StyleSheet.create({
	defaultSection: {
		flex: 1,
		borderWidth: 0.5,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#ffffff88",
	},
	cornerMarker: {
		borderColor: "#FFFFFF",
		position: "absolute",
		height: 30,
		width: 30,
	},
});
