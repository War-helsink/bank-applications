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

export const NOIcon: React.FC<SvgProps> = (props) => {
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
					fill="#F14247"
					d="M0 0h28v20H0V0zm0 12h8v8h4v-8h16V8H12V0H8v8H0v4z"
					mask={`url(#${maskId})`}
				/>
				<Path
					fill="#0A3A85"
					d="M0 10.667h9.333V20h1.334v-9.333H28V9.333H10.667V0H9.333v9.333H0z"
					mask={`url(#${maskId})`}
				/>
			</G>
		</Svg>
	);
};

NOIcon.displayName = "NOIcon";
