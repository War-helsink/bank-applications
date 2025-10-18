import { useId } from "react";
import {
	Defs,
	G,
	LinearGradient,
	Mask,
	Path,
	Rect,
	Stop,
	Svg,
	type SvgProps,
	Use,
} from "react-native-svg";

export const USIcon: React.FC<SvgProps> = (props) => {
	const uniqueId = useId();
	const rectId = `${uniqueId}-a`;
	const maskId = `${uniqueId}-b`;
	const gradientId = `${uniqueId}-e`;
	const starsId = `${uniqueId}-d`;

	return (
		<Svg width="28" height="20" viewBox="0 0 28 20" {...props}>
			<Defs>
				<LinearGradient id={gradientId} x1="50%" x2="50%" y1="0%" y2="100%">
					<Stop offset="0%" stopColor="#FFF" />
					<Stop offset="100%" stopColor="#F0F0F0" />
				</LinearGradient>
				<Rect id={rectId} width="28" height="20" rx="2" />
				<Path
					id={starsId}
					d="M2 2.667a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zm2.667 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zm2.666 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zm2.667 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zM3.333 4a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333zM6 4a.667.667 0 1 1 0-1.333A.667.667 0 0 1 6 4zm2.667 0a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333zM10 5.333A.667.667 0 1 1 10 4a.667.667 0 0 1 0 1.333zm-2.667 0a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333zm-2.666 0a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333zM2 5.333A.667.667 0 1 1 2 4a.667.667 0 0 1 0 1.333zm1.333 1.334a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zm2.667 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zm2.667 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zM10 8a.667.667 0 1 1 0-1.333A.667.667 0 0 1 10 8zM7.333 8a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333zM4.667 8a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333zM2 8a.667.667 0 1 1 0-1.333A.667.667 0 0 1 2 8z"
				/>
			</Defs>
			<G fill="none" fillRule="evenodd">
				<Mask id={maskId} fill="#fff">
					<Use href={`#${rectId}`} />
				</Mask>
				<Use href={`#${rectId}`} fill="#FFF" />
				<Path
					fill="#D02F44"
					d="M0 0h28v1.333H0V0zm0 2.667h28V4H0V2.667zm0 2.666h28v1.334H0V5.333zM0 8h28v1.333H0V8zm0 2.667h28V12H0v-1.333zm0 2.666h28v1.334H0v-1.334zM0 16h28v1.333H0V16zm0 2.667h28V20H0v-1.333z"
					mask={`url(#${maskId})`}
				/>
				<Path fill="#46467F" d="M0 0h12v9.333H0z" mask={`url(#${maskId})`} />
				<G mask={`url(#${maskId})`}>
					<Use href={`#${starsId}`} fill={`url(#${gradientId})`} />
				</G>
			</G>
		</Svg>
	);
};

USIcon.displayName = "USIcon";
