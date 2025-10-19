import { Path, Rect, Svg, type SvgProps } from "react-native-svg";

export const CHIcon: React.FC<SvgProps> = (props) => {
	return (
		<Svg width="24" height="18" viewBox="0 0 28 20" {...props}>
			<Rect width="28" height="20" fill="#fff" rx="2" />
			<Path fill="red" d="M0 0h28v20H0z" />
			<Path
				fill="#fff"
				d="M12 12H8.341A.34.34 0 0 1 8 11.659V8.341A.34.34 0 0 1 8.341 8H12V4.341A.34.34 0 0 1 12.341 4h3.318a.34.34 0 0 1 .341.341V8h3.659a.34.34 0 0 1 .341.341v3.318a.34.34 0 0 1-.341.341H16v3.659a.34.34 0 0 1-.341.341h-3.318a.34.34 0 0 1-.341-.341V12z"
			/>
		</Svg>
	);
};

CHIcon.displayName = "CHIcon";
