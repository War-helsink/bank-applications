import { View } from "react-native";
import CarouselRN from "react-native-reanimated-carousel";
import type { CarouselRenderItem } from "react-native-reanimated-carousel";
import * as Haptics from "expo-haptics";

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

	const backgroundColor = useThemeColor("toolbarBackground");
	const inactiveDot = useThemeColor("medium");
	const activeDot = useThemeColor("primary");

	const handleProgressChange = (_: number, absoluteProgress: number) => {
		const currentIndex = Math.round(absoluteProgress);
		if (activeIndex !== currentIndex) {
			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
			setActiveIndex(currentIndex);
		}
	};

	return (
		<View>
			<View style={tw("mt-4 justify-center items-center")}>
				<CarouselRN
					loop={false}
					width={width}
					height={height}
					style={{ justifyContent: "center", alignItems: "center" }}
					data={data}
					scrollAnimationDuration={500}
					onProgressChange={handleProgressChange}
					pagingEnabled
					renderItem={renderItem}
				/>
			</View>
			<View style={tw("justify-center items-center my-1")}>
				<View
					style={[
						tw("flex-row rounded-xl py-1 px-3"),
						{ backgroundColor },
					]}
				>
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
			</View>
		</View>
	);
};
