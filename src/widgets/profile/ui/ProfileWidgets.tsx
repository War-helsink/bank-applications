import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, ScrollView, View } from "react-native";
import {
	ProfileChangeHeader,
	ProfileContactForm,
	ProfileNameForm,
	useProfileForm,
	useProfileUpdate,
} from "@/features/profile";
import { useLogout } from "@/features/auth";
import { AvatarUploader } from "@/features/avatar";
import { useUser } from "@/entities/user";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text, Toolbar } from "@/shared/ui";

export const ProfileWidgets: React.FC = () => {
	const color = useThemeColor("danger");
	const { user } = useUser();
	const { mutate: logout } = useLogout();
	const { handleSave } = useProfileUpdate();

	const { formik, hasChanges } = useProfileForm({
		user,
		onSubmit: async (values) => {
			await handleSave(values, hasChanges);
		},
	});

	return (
		<View className="h-full flex-col justify-between gap-4">
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className="pt-4 flex gap-4">
					<ProfileChangeHeader
						changes={hasChanges}
						onCancel={() => formik.resetForm()}
						onSave={() => formik.handleSubmit()}
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
					<ProfileNameForm formik={formik} />
					<ProfileContactForm formik={formik} />
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
