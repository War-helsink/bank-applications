import Toast from "react-native-toast-message";
import { Field, Button } from "@/components/shared";
import * as Haptics from "expo-haptics";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import { useLoader } from "@/core/hooks/useLoader";

import { hasObjectChanged } from "@/core/helpers";

export interface IProfileContactData {
	phone: string;
	email: string;
}

export const ProfileContactForm: React.FC = () => {
	const { profile } = useAuth();

	if (profile === null) {
		return;
	}

	const { showLoader, hideLoader } = useLoader();
	const [data, setData] = useState<IProfileContactData>({
		phone: profile.phone,
		email: profile.email,
	});

	const updateProfile = async () => {
		const { phone, email } = profile;

		if (hasObjectChanged({ phone, email }, data)) {
			showLoader();
			profile.setData(data);

			return await profile.update().then(() => {
				hideLoader();

				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				Toast.show({
					type: "success",
					text1: "Changes saved successfully",
				});
			});
		}

		Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		Toast.show({
			type: "error",
			text1: "To save the data, make changes",
		});
	};

	return (
		<>
			<Field
				className="mt-3"
				value={data.email}
				onChange={(email) => setData({ ...data, email })}
				placeholder="Email"
			/>
			<Field
				className="mt-3"
				value={data.phone}
				onChange={(phone) => setData({ ...data, phone })}
				placeholder="Phone"
			/>

			<Button className="my-4" onPress={updateProfile}>
				Update Profile
			</Button>
		</>
	);
};
