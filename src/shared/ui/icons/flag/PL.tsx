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

export const PLIcon: React.FC<SvgProps> = (props) => {
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
				<Path fill="#EB2A50" d="M0 9.333h28V20H0z" mask={`url(#${maskId})`} />
			</G>
		</Svg>
	);
};

PLIcon.displayName = "PLIcon";
