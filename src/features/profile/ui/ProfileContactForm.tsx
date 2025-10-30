import { View } from "react-native";
import { FieldClear, Toolbar, Text } from "@/shared/ui";

export interface IProfileContactData {
	phone: string;
	email: string;
}
export interface ProfileContactFormProps extends IProfileContactData {
	setDataParam?: (value: string, key: keyof IProfileContactData) => void;
}

export const ProfileContactForm: React.FC<ProfileContactFormProps> = ({
	phone,
	email,
	setDataParam,
}) => {
	return (
		<View className="gap-4">
			<Toolbar className="rounded-xl px-0 py-0">
				<FieldClear
					placeholder="Email"
					value={email}
					onChange={(email) => setDataParam?.(email, "email")}
				/>
				<FieldClear
					className="border-0"
					placeholder="Phone"
					value={phone}
					onChange={(phone) => setDataParam?.(phone, "phone")}
				/>
			</Toolbar>

			<Text className="text-sm text-center">
				Email and phone are used to contact you.
			</Text>
		</View>
	);
};
