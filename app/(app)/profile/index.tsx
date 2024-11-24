import Toast from "react-native-toast-message";
import { Pressable, View, ScrollView } from "react-native";
import { Text, Toolbar, AvatarUploader } from "@/components/shared";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";
import {
	ProfileChangeHeader,
	ProfileContactForm,
	ProfileNameForm,
} from "@/components/features/profile";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState, useCallback } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import { useLoader } from "@/core/hooks/useLoader";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { hasObjectChanged } from "@/core/helpers";

const ProfileScreen: React.FC = () => {
	const color = useThemeColor("danger");
	const [changes, setChanges] = useState(false);
	const { logout, profile } = useAuth();
	const { showLoader, hideLoader } = useLoader();

	if (profile === null) {
		return;
	}

	const [data, setData] = useState({
		firstName: profile.firstName,
		secondName: profile.secondName,
		lastName: profile.lastName,

		avatarUrl: profile.avatarUrl,
		phone: profile.phone,
		email: profile.email,
	});

	const setDate = (value: string, key: keyof typeof data) => {
		const newData = { ...data };
		newData[key] = value;
		setData(newData);

		const { firstName, secondName, lastName, avatarUrl, phone, email } =
			profile;

		setChanges(
			hasObjectChanged(newData, {
				firstName,
				secondName,
				lastName,
				avatarUrl,
				phone,
				email,
			}),
		);
	};

	const cancel = useCallback(() => {
		setData({
			firstName: profile.firstName,
			secondName: profile.secondName,
			lastName: profile.lastName,

			avatarUrl: profile.avatarUrl,
			phone: profile.phone,
			email: profile.email,
		});
		setChanges(false);
	}, [profile]);

	const save = async () => {
		if (changes) {
			showLoader();
			profile.setData(data);

			return await profile.update().then(() => {
				hideLoader();

				notificationAsync(NotificationFeedbackType.Success);
				Toast.show({
					type: "success",
					text1: "Changes saved successfully",
				});
				setChanges(false);
			});
		}

		notificationAsync(NotificationFeedbackType.Error);
		Toast.show({
			type: "error",
			text1: "To save the data, make changes",
		});
	};

	return (
		<ScrollView>
			<View className="pt-4 flex gap-4">
				<ProfileChangeHeader
					changes={changes}
					onCancel={cancel}
					onSave={save}
				/>

				<AvatarUploader
					name={profile?.lastName}
					avatarUrl={data.avatarUrl}
					onChangeAvatar={(avatarUrl) => setDate(avatarUrl, "avatarUrl")}
				/>

				<ProfileNameForm
					firstName={data.firstName}
					secondName={data.secondName}
					lastName={data.lastName}
					setDataParam={setDate}
				/>
				<ProfileContactForm
					phone={data.phone}
					email={data.email}
					setDataParam={setDate}
				/>

				<Toolbar className="rounded-xl">
					<Pressable className="w-full items-center py-2" onPress={logout}>
						<View className="flex-row items-center gap-1">
							<Ionicons name="exit" size={24} color={color} />
							<Text style={{ color }}>Log out</Text>
						</View>
					</Pressable>
				</Toolbar>
			</View>
		</ScrollView>
	);
};

export default ProfileScreen;
