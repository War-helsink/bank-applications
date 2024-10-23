import { View } from "react-native";
import { MenuItem } from "./MenuItem";

import { menu } from "../config";

export const Menu: React.FC = () => {
	return (
		<View>
			{menu.map((item) => (
				<MenuItem key={item.title} item={item} />
			))}
		</View>
	);
};
