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

export const CAIcon: React.FC<SvgProps> = (props) => {
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
					fill="#FF3131"
					d="M20 0h8v20h-8zM0 0h8v20H0zm15.566 9.768c-.129.128-.204.089-.166-.1l.6-3.001-1.333.666-.667-2-.667 2L12 6.667l.6 3.001c.037.183-.038.227-.166.1l-.868-.87a.331.331 0 0 0-.473.01l-.426.425-1.334-.666L10 10l-.426.426a.337.337 0 0 0-.011.47l1.77 1.77h2l.334 2h.666l.334-2h2l1.77-1.77a.33.33 0 0 0-.011-.47L18 10l.667-1.333-1.334.666-.426-.426a.335.335 0 0 0-.473-.008l-.868.869z"
					mask={`url(#${maskId})`}
				/>
			</G>
		</Svg>
	);
};

CAIcon.displayName = "CAIcon";
