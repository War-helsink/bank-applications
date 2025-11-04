import { View } from "react-native";
import type { FormikProps } from "formik";
import { FieldClear, Toolbar, Text } from "@/shared/ui";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { ProfileFormValues } from "../lib/schema";

export interface ProfileContactFormProps {
	formik: FormikProps<ProfileFormValues>;
}

export const ProfileContactForm: React.FC<ProfileContactFormProps> = ({
	formik,
}) => {
	const errorColor = useThemeColor("danger");

	return (
		<View className="gap-4">
			<Toolbar className="rounded-xl px-0 py-0">
				<FieldClear
					placeholder="Email"
					value={formik.values.email}
					onChange={(value) => formik.setFieldValue("email", value)}
					onBlur={() => formik.setFieldTouched("email")}
					style={
						formik.touched.email && formik.errors.email
							? { borderColor: errorColor }
							: undefined
					}
				/>
				<FieldClear
					className="border-0"
					placeholder="Phone"
					value={formik.values.phone}
					onChange={(value) => formik.setFieldValue("phone", value)}
					onBlur={() => formik.setFieldTouched("phone")}
					style={
						formik.touched.phone && formik.errors.phone
							? { borderBottomWidth: 1, borderColor: errorColor }
							: undefined
					}
				/>
			</Toolbar>

			<Text className="text-sm text-center">
				Email and phone are used to contact you.
			</Text>
		</View>
	);
};
