import { G, Path, Svg, type SvgProps } from "react-native-svg";

export const MastercardIcon: React.FC<SvgProps> = (props) => {
	return (
		<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
			<G fill="none" fillRule="evenodd">
				<Path d="M1 5h22v14.667H1z" />
				<Path
					fill="#FFF"
					d="M8.508 8.283c2.37 0 4.29 1.813 4.29 4.05 0 2.236-1.92 4.05-4.29 4.05-2.368 0-4.29-1.814-4.29-4.05 0-2.237 1.922-4.05 4.29-4.05z"
				/>
				<Path
					fill="#FFAF38"
					d="M15.307 8.283c2.37 0 4.292 1.813 4.292 4.05 0 2.236-1.922 4.05-4.292 4.05s-4.29-1.814-4.29-4.05c0-2.237 1.921-4.05 4.29-4.05z"
				/>
				<Path
					fill="#EB3636"
					d="M8.508 8.283c2.37 0 4.29 1.813 4.29 4.05 0 2.236-1.92 4.05-4.29 4.05-2.368 0-4.29-1.814-4.29-4.05 0-2.237 1.922-4.05 4.29-4.05z"
				/>
				<Path
					fill="#F57137"
					d="M11.045 12.319c0 .927.335 1.779.89 2.462.55-.68.88-1.528.88-2.448a3.88 3.88 0 0 0-.891-2.463 3.89 3.89 0 0 0-.879 2.449z"
				/>
			</G>
		</Svg>
	);
};

MastercardIcon.displayName = "MastercardIcon";
