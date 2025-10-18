import { useThemeColor } from "@/shared/hooks/useThemeColor";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { View } from "react-native";
import type { CarouselRenderItem } from "react-native-reanimated-carousel";
import CarouselRN from "react-native-reanimated-carousel";

export interface CarouselProps<T = any> {
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
			<View className="mt-4 justify-center items-center">
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
			<View className="justify-center items-center my-2">
				<View
					className="flex-row rounded-xl py-1 px-3"
					style={{ backgroundColor }}
				>
					{data.map((_, index) => (
						<View
							key={index}
							className="w-1.5 h-1.5 mx-1 rounded-full"
							style={
								activeIndex === index
									? { backgroundColor: activeDot }
									: { backgroundColor: inactiveDot }
							}
						/>
					))}
				</View>
			</View>
		</View>
	);
};
