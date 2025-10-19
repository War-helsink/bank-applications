import type { SvgProps } from "react-native-svg";
import { MastercardIcon, VisaIcon } from "../ui";

export enum PaymentNetwork {
	Mastercard = "mastercard",
	Visa = "visa",
}

export const PaymentNetworkImg: Record<PaymentNetwork, React.FC<SvgProps>> = {
	[PaymentNetwork.Mastercard]: MastercardIcon,
	[PaymentNetwork.Visa]: VisaIcon,
};
