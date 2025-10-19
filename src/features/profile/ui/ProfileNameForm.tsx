import { FieldOpacity, Toolbar } from "@/shared/ui";

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
		<Toolbar className="rounded-xl px-0 py-0">
			<FieldOpacity
				value={firstName}
				onChange={(firstName) => setDataParam?.(firstName, "firstName")}
				placeholder="First name"
			/>
			<FieldOpacity
				value={secondName}
				onChange={(secondName) => setDataParam?.(secondName, "secondName")}
				placeholder="Second name"
			/>
			<FieldOpacity
				border={false}
				value={lastName}
				onChange={(lastName) => setDataParam?.(lastName, "lastName")}
				placeholder="Last name"
			/>
		</Toolbar>
	);
};
