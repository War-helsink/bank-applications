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

export const SEIcon: React.FC<SvgProps> = (props) => {
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
				<Path fill="#157CBB" d="M0 0h28v20H0z" mask={`url(#${maskId})`} />
				<Path
					fill="#FFD34D"
					d="M0 12h8v8h4v-8h16V8H12V0H8v8H0z"
					mask={`url(#${maskId})`}
				/>
			</G>
		</Svg>
	);
};

SEIcon.displayName = "SEIcon";
