import { View } from "react-native";
import CarouselRN from "react-native-reanimated-carousel";
import type { CarouselRenderItem } from "react-native-reanimated-carousel";

import { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface CarouselProps<T extends any = any> {
	width: number;
	height: number;
	data: T[];
	renderItem: CarouselRenderItem<T>;
}

export const Carousel: React.FC<CarouselProps> = ({
	width,
	height,
	data,
	renderItem,
}) => {
	const tw = useTailwind();
	const [activeIndex, setActiveIndex] = useState(0);

	const inactiveDot = useThemeColor("medium");
	const activeDot = useThemeColor("primary");

	const handleSnapToItem = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<>
			<View style={tw("mt-4 justify-center items-center")}>
				<CarouselRN
					loop={false}
					width={width}
					height={height}
					style={{ justifyContent: "center", alignItems: "center" }}
					data={data}
					scrollAnimationDuration={500}
					onSnapToItem={handleSnapToItem}
					pagingEnabled
					renderItem={renderItem}
				/>
			</View>
			<View style={[tw("flex-row justify-center"), { marginTop: height + 10 }]}>
				{data.map((_, index) => (
					<View
						key={index}
						style={[
							tw("w-1.5 h-1.5 mx-1 rounded-full"),
							activeIndex === index
								? { backgroundColor: activeDot }
								: { backgroundColor: inactiveDot },
						]}
					/>
				))}
			</View>
		</>
	);
};
