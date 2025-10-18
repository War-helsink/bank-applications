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

export const DKIcon: React.FC<SvgProps> = (props) => {
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
					fill="#EF264D"
					d="M0 1.99C0 .892.9 0 1.991 0H26.01C27.109 0 28 .898 28 1.99v16.02c0 1.099-.9 1.99-1.991 1.99H1.99A1.995 1.995 0 0 1 0 18.01V1.99zM0 12h8v8h4v-8h16V8H12V0H8v8H0v4z"
					mask={`url(#${maskId})`}
				/>
			</G>
		</Svg>
	);
};

DKIcon.displayName = "DKIcon";
