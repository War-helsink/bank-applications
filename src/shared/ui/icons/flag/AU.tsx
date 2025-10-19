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

export const AUIcon: React.FC<SvgProps> = (props) => {
	const uniqueId = useId();
	const rectId = `${uniqueId}-a`;
	const maskId = `${uniqueId}-b`;
	const pathCId = `${uniqueId}-c`;
	const gradDId = `${uniqueId}-d`;
	const gradEId = `${uniqueId}-e`;

	return (
		<Svg width="28" height="20" viewBox="0 0 28 20" {...props}>
			<Defs>
				<LinearGradient id={gradDId} x1="50%" x2="50%" y1="0%" y2="100%">
					<Stop offset="0%" stopColor="#FFF" />
					<Stop offset="100%" stopColor="#F0F0F0" />
				</LinearGradient>
				<LinearGradient id={gradEId} x1="50%" x2="50%" y1="0%" y2="100%">
					<Stop offset="0%" stopColor="#FF2E3B" />
					<Stop offset="100%" stopColor="#FC0D1B" />
				</LinearGradient>
				<Rect id={rectId} width="28" height="20" rx="2" />
				<Path
					id={pathCId}
					d="M4.667 4 0 0h.667l4.666 3.333h1.334L12 0v.333a.716.716 0 0 1-.278.532L7.333 4v1.333l4.416 3.785c.139.119.096.215-.082.215-.184 0-.449-.082-.612-.198L6.667 6H5.333L0 9.333v-.666l4.667-3.334V4z"
				/>
			</Defs>
			<G fill="none" fillRule="evenodd">
				<Mask id={maskId} fill="#fff">
					<Use href={`#${rectId}`} />
				</Mask>
				<Use href={`#${rectId}`} fill="#FFF" />
				<Path fill="#0A17A7" d="M0 0h28v20H0z" mask={`url(#${maskId})`} />
				<G mask={`url(#${maskId})`}>
					<Use href={`#${pathCId}`} fill="#FF2E3B" />
					<Path
						stroke="#FFF"
						strokeWidth=".667"
						d="M4.333 4.153-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
					/>
				</G>
				<Path
					fill={`url(#${gradDId})`}
					d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 0 0 .673-.66V6h4.658a.677.677 0 0 0 .676-.673v-1.32a.674.674 0 0 0-.676-.674H7.333V0H4.667v3.333H0z"
					mask={`url(#${maskId})`}
				/>
				<Path
					fill={`url(#${gradEId})`}
					d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z"
					mask={`url(#${maskId})`}
				/>
				<Path
					fill="#FFF"
					d="m6 16.333-1.176.618.225-1.309-.951-.927 1.314-.191L6 13.333l.588 1.191 1.314.191-.951.927.225 1.309zm14 1-.943.276.276-.942-.276-.943L20 16l.943-.276-.276.943.276.942zm0-12.666-.943.276.276-.943-.276-.943.943.276.943-.276-.276.943.276.943zm4 4-.943.276.276-.943-.276-.943.943.276.943-.276-.276.943.276.943zM16 10l-.943.276.276-.943-.276-.942.943.276.943-.276-.276.942.276.943zm6 1.667-.471.138.138-.472-.138-.471L22 11l.471-.138-.138.471.138.472z"
					mask={`url(#${maskId})`}
				/>
			</G>
		</Svg>
	);
};

AUIcon.displayName = "AUIcon";
