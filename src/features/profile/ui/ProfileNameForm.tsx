import { View } from "react-native";
import type { FormikProps } from "formik";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { FieldClear, Toolbar, Text } from "@/shared/ui";
import type { ProfileFormValues } from "../lib/schema";

export interface ProfileNameFormProps {
	formik: FormikProps<ProfileFormValues>;
}

export const ProfileNameForm: React.FC<ProfileNameFormProps> = ({ formik }) => {
	const errorColor = useThemeColor("danger");

	return (
		<View className="gap-4 mb-8">
			<Toolbar className="rounded-xl px-0 py-0">
				<FieldClear
					value={formik.values.firstName}
					onChange={(value) => formik.setFieldValue("firstName", value)}
					onBlur={() => formik.setFieldTouched("firstName")}
					placeholder="First name"
					style={
						formik.touched.firstName && formik.errors.firstName
							? { borderColor: errorColor }
							: undefined
					}
				/>
				<FieldClear
					value={formik.values.secondName}
					onChange={(value) => formik.setFieldValue("secondName", value)}
					onBlur={() => formik.setFieldTouched("secondName")}
					placeholder="Second name"
					style={
						formik.touched.secondName && formik.errors.secondName
							? { borderColor: errorColor }
							: undefined
					}
				/>
				<FieldClear
					className="border-0"
					value={formik.values.lastName}
					onChange={(value) => formik.setFieldValue("lastName", value)}
					onBlur={() => formik.setFieldTouched("lastName")}
					placeholder="Last name"
					style={
						formik.touched.lastName && formik.errors.lastName
							? { borderBottomWidth: 1, borderColor: errorColor }
							: undefined
					}
				/>
			</Toolbar>

			<Text className="text-sm text-center">
				First name, second name and last name are used to identify you in the
				system.
			</Text>
		</View>
	);
};
