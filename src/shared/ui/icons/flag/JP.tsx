import { useId } from "react";
import {
	Circle,
	Defs,
	LinearGradient,
	Rect,
	Stop,
	Svg,
	type SvgProps,
} from "react-native-svg";

export const JPIcon: React.FC<SvgProps> = (props) => {
	const uniqueId = useId();
	const gradientId = `${uniqueId}-a`;

	return (
		<Svg width="24" height="18" viewBox="0 0 28 20" {...props}>
			<Defs>
				<LinearGradient id={gradientId} x1="50%" x2="50%" y1="0%" y2="100%">
					<Stop offset="0%" stopColor="#D81441" />
					<Stop offset="100%" stopColor="#BB0831" />
				</LinearGradient>
			</Defs>
			<Rect width="28" height="20" fill="#fff" rx="2" />
			<Circle cx="14" cy="10" r="6" fill={`url(#${gradientId})`} />
		</Svg>
	);
};

JPIcon.displayName = "JPIcon";
