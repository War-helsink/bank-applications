import { useId } from "react";
import {
	Defs,
	G,
	Mask,
	Path,
	Rect,
	Svg,
	type SvgProps,
	Use,
} from "react-native-svg";

export const ILIcon: React.FC<SvgProps> = (props) => {
	const uniqueId = useId();
	const rectId = `${uniqueId}-a`;
	const maskId = `${uniqueId}-b`;

	return (
		<Svg width="28" height="20" viewBox="0 0 28 20" {...props}>
			<Defs>
				<Rect id={rectId} width="28" height="20" rx="2" />
			</Defs>
			<G fill="none" fillRule="evenodd">
				<Mask id={maskId} fill="#fff">
					<Use href={`#${rectId}`} />
				</Mask>
				<Use href={`#${rectId}`} fill="#FFF" />
				<Rect
					width="27.5"
					height="19.5"
					x=".25"
					y=".25"
					stroke="#F5F5F5"
					strokeWidth=".5"
					rx="2"
				/>
				<Path
					fill="#0E46D4"
					d="M0 0h28v4H0zm0 16h28v4H0z"
					mask={`url(#${maskId})`}
				/>
				<Path
					stroke="#093EC5"
					strokeWidth=".667"
					d="m9.566 10.547 6.887-4.13-.132 8.03-6.755-3.9z"
					mask={`url(#${maskId})`}
					transform="rotate(-30 13.167 10.443)"
				/>
				<Path
					stroke="#093EC5"
					strokeWidth=".667"
					d="m9.566 9.66 6.887-4.13-.132 8.03-6.755-3.9z"
					mask={`url(#${maskId})`}
					transform="scale(1 -1) rotate(-30 -22.5 0)"
				/>
			</G>
		</Svg>
	);
};

ILIcon.displayName = "ILIcon";
