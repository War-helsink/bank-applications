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

export const GBIcon: React.FC<SvgProps> = (props) => {
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
				<Path fill="#0A17A7" d="M0 0h28v20H0z" mask={`url(#${maskId})`} />
				<Path
					fill="#FFF"
					d="M6.674 13.333H0V6.667h6.674L-2.774.294l1.492-2.21 11.949 8.06v-7.477h6.666v7.476l11.95-8.06 1.49 2.211-9.447 6.373H28v6.666h-6.674l9.448 6.373-1.492 2.21-11.949-8.06v7.477h-6.666v-7.476l-11.95 8.06-1.49-2.211 9.447-6.373z"
					mask={`url(#${maskId})`}
				/>
				<Path
					stroke="#DB1F35"
					strokeLinecap="round"
					strokeWidth=".667"
					d="M18.668 6.332 31.333-2"
					mask={`url(#${maskId})`}
				/>
				<Path
					stroke="#DB1F35"
					strokeLinecap="round"
					strokeWidth=".667"
					d="m20.013 21.35 11.354-7.652"
					mask={`url(#${maskId})`}
					transform="matrix(1 0 0 -1 0 35.048)"
				/>
				<Path
					stroke="#DB1F35"
					strokeLinecap="round"
					strokeWidth=".667"
					d="M8.006 6.31-3.837-1.67"
					mask={`url(#${maskId})`}
				/>
				<Path
					stroke="#DB1F35"
					strokeLinecap="round"
					strokeWidth=".667"
					d="m9.29 22.31-13.127-8.705"
					mask={`url(#${maskId})`}
					transform="matrix(1 0 0 -1 0 35.915)"
				/>
				<Path
					fill="#E6273E"
					d="M0 12h12v8h4v-8h12V8H16V0h-4v8H0z"
					mask={`url(#${maskId})`}
				/>
			</G>
		</Svg>
	);
};

GBIcon.displayName = "GBIcon";
