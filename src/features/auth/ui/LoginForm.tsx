import type React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import { Button, Text, FieldClear, FieldPassword } from "@/shared/ui";
import { useLogin } from "../hooks/useLogin";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import {
	LoginSchema,
	type LoginValues,
	LOGIN_FORM_INITIAL_VALUES,
} from "../lib/schema/login";

export const LoginForm: React.FC = () => {
	const { mutate: login, isPending: isLoginPending } = useLogin();

	const backgroundColor = useThemeColor("light");
	const errorColor = useThemeColor("danger");

	const validate = (values: LoginValues) => {
		const result = LoginSchema.safeParse(values);
		if (result.success) return {};
		const errors: Record<string, string> = {};

		result.error.errors.forEach((error) => {
			if (error.path?.length > 0) {
				errors[error.path[0] as string] = error.message;
			}
		});

		return errors;
	};

	const submit = async (values: LoginValues): Promise<void> => {
		return await login(values);
	};

	return (
		<Formik
			initialValues={LOGIN_FORM_INITIAL_VALUES}
			validate={validate}
			onSubmit={submit}
		>
			{(formik) => (
				<View className="gap-4">
					<View>
						<FieldClear
							value={formik.values.email}
							className="p-0 pr-8 border-0"
							placeholder="Enter email"
							onChange={(value) => formik.setFieldValue("email", value)}
							containerProps={{
								className: "rounded-full px-6 py-4 border border-solid",
								style: {
									backgroundColor,
									borderColor:
										formik.touched.email && formik.errors.email
											? errorColor
											: undefined,
								},
							}}
						/>
						{formik.touched.email && formik.errors.email && (
							<Text className="text-sm" style={{ color: errorColor }}>
								{formik.errors.email}
							</Text>
						)}
					</View>
					<View>
						<FieldPassword
							className="p-0 pr-8 border-0"
							value={formik.values.password}
							placeholder="Enter password"
							onChange={(value) => formik.setFieldValue("password", value)}
							containerProps={{
								className: "rounded-full px-6 py-4 border border-solid",
								style: {
									backgroundColor,
									borderColor:
										formik.touched.password && formik.errors.password
											? errorColor
											: undefined,
								},
							}}
						/>
						{formik.touched.password && formik.errors.password && (
							<Text className="text-sm" style={{ color: errorColor }}>
								{formik.errors.password}
							</Text>
						)}
					</View>

					<Button
						isLoading={isLoginPending}
						onPress={() => formik.handleSubmit()}
						className="rounded-full p-4"
					>
						Log in
					</Button>
				</View>
			)}
		</Formik>
	);
};
