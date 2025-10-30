import { View } from "react-native";
import { FieldClear, Toolbar, Text } from "@/shared/ui";

export interface IProfileNameData {
	firstName: string;
	secondName: string;
	lastName: string;
}

export interface ProfileNameFormProps extends IProfileNameData {
	setDataParam?: (value: string, key: keyof IProfileNameData) => void;
}

export const ProfileNameForm: React.FC<ProfileNameFormProps> = ({
	firstName,
	secondName,
	lastName,
	setDataParam,
}) => {
	return (
		<View className="gap-4 mb-8">
			<Toolbar className="rounded-xl px-0 py-0">
				<FieldClear
					value={firstName}
					onChange={(firstName) => setDataParam?.(firstName, "firstName")}
					placeholder="First name"
				/>
				<FieldClear
					value={secondName}
					onChange={(secondName) => setDataParam?.(secondName, "secondName")}
					placeholder="Second name"
				/>
				<FieldClear
					className="border-0"
					value={lastName}
					onChange={(lastName) => setDataParam?.(lastName, "lastName")}
					placeholder="Last name"
				/>
			</Toolbar>

			<Text className="text-sm text-center">
				First name, second name and last name are used to identify you in the
				system.
			</Text>
		</View>
	);
};
