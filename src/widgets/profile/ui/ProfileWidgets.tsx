import { useUpdateUser, useUser } from "@/entities/user";
import { useLogout } from "@/features/auth";
import { hasObjectChanged } from "@/shared/utils";
import { useLoader } from "@/shared/hooks/useLoader";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { AvatarUploader, Text, Toolbar } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NotificationFeedbackType, notificationAsync } from "expo-haptics";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Toast from "react-native-toast-message";
import {
	ProfileChangeHeader,
	ProfileContactForm,
	ProfileNameForm,
} from "@/features/profile";

export const ProfileWidgets: React.FC = () => {
	const { user } = useUser();
	const { mutate: updateUser } = useUpdateUser();
	const { mutate: logout } = useLogout();
	const color = useThemeColor("danger");
	const [changes, setChanges] = useState(false);
	const { showLoader, hideLoader } = useLoader();

	const [data, setData] = useState({
		firstName: user?.firstName ?? "",
		secondName: user?.secondName ?? "",
		lastName: user?.lastName ?? "",

		phone: user?.phone ?? "",
		email: user?.email ?? "",
	});

	const setDate = (value: string, key: keyof typeof data) => {
		const newData = { ...data };
		newData[key] = value;
		setData(newData);

		const {
			firstName = "",
			secondName = "",
			lastName = "",
			phone = "",
			email = "",
		} = user ?? {};

		setChanges(
			hasObjectChanged(newData, {
				firstName,
				secondName,
				lastName,
				phone,
				email,
			}),
		);
	};

	const cancel = useCallback(() => {
		setData({
			firstName: user?.firstName ?? "",
			secondName: user?.secondName ?? "",
			lastName: user?.lastName ?? "",

			phone: user?.phone ?? "",
			email: user?.email ?? "",
		});
		setChanges(false);
	}, [user]);

	const save = async () => {
		if (!user) {
			return;
		}

		if (changes) {
			showLoader();

			await updateUser(data);

			hideLoader();

			notificationAsync(NotificationFeedbackType.Success);
			Toast.show({
				type: "success",
				text1: "Changes saved successfully",
			});
			setChanges(false);

			return;
		}

		notificationAsync(NotificationFeedbackType.Error);
		Toast.show({
			type: "error",
			text1: "To save the data, make changes",
		});
	};

	return (
		<View className="h-full flex-col justify-between gap-4">
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className="pt-4 flex gap-4">
					<ProfileChangeHeader
						changes={changes}
						onCancel={cancel}
						onSave={save}
					/>
					<View className="w-full items-center justify-center">
						<AvatarUploader
							className="rounded-full"
							uid={user?.id ?? "default"}
							name={user?.lastName ?? ""}
							avatarUrl={user?.avatarUrl}
							size={100}
							sizeIcon={18}
						/>
					</View>
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
				</View>
			</ScrollView>

			<Toolbar className="rounded-xl">
				<Pressable
					className="w-full items-center py-2"
					onPress={() => logout()}
				>
					<View className="flex-row items-center gap-1">
						<Ionicons name="exit" size={24} color={color} />
						<Text style={{ color }}>Log out</Text>
					</View>
				</Pressable>
			</Toolbar>
		</View>
	);
};
