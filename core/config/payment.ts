import type { SvgProps } from "react-native-svg";
import Mastercard from "../../assets/icons/payment/mastercard.svg";
import Visa from "../../assets/icons/payment/visa.svg";

export enum PaymentNetwork {
	Mastercard = "mastercard",
	Visa = "visa",
}

export const PaymentNetworkImg: Record<PaymentNetwork, React.FC<SvgProps>> = {
	[PaymentNetwork.Mastercard]: Mastercard,
	[PaymentNetwork.Visa]: Visa,
};
