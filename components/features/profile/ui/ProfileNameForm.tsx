import Toast from "react-native-toast-message";
import { Field, Button } from "@/components/shared";
import { hasObjectChanged } from "@/core/helpers";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import { useLoader } from "@/core/hooks/useLoader";
import { useTailwind } from "tailwind-rn";

interface IProfileData {
	firstName: string;
	secondName: string;
	lastName: string;
}

export const ProfileNameForm: React.FC = () => {
	const tw = useTailwind();
	const { profile } = useAuth();

	if (profile === null) {
		return;
	}

	const { showLoader, hideLoader } = useLoader();
	const [data, setData] = useState<IProfileData>({
		firstName: profile.firstName,
		secondName: profile.secondName,
		lastName: profile.lastName,
	});

	const updateProfile = async () => {
		const { firstName, secondName, lastName } = profile;

		if (hasObjectChanged({ firstName, secondName, lastName }, data)) {
			showLoader();
			profile.setData(data);

			return await profile.update().then(() => {
				hideLoader();
				Toast.show({
					type: "success",
					text1: "Changes saved successfully",
				});
			});
		}

		Toast.show({
			type: "error",
			text1: "To save the data, make changes",
		});
	};

	return (
		<>
			<Field
				style={tw("mt-3")}
				value={data.firstName}
				onChange={(firstName) => setData({ ...data, firstName })}
				placeholder="First name"
			/>
			<Field
				style={tw("mt-3")}
				value={data.secondName}
				onChange={(secondName) => setData({ ...data, secondName })}
				placeholder="Second name"
			/>
			<Field
				style={tw("mt-3")}
				value={data.lastName}
				onChange={(lastName) => setData({ ...data, lastName })}
				placeholder="Last name"
			/>

			<Button style={tw("my-4")} onPress={updateProfile}>
				Update Profile
			</Button>
		</>
	);
};
