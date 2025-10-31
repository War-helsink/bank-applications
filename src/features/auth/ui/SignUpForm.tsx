import type React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Button, Text, FieldPassword, FieldClear } from "@/shared/ui";
import {
	SignupSchema,
	type SignupValues,
	SIGNUP_FORM_INITIAL_VALUES,
} from "../lib/schema/signup";
import { useSignUp } from "../hooks/useSignUp";

export const SignUpForm: React.FC = () => {
	const { mutate: signUp, isPending: isSignUpPending } = useSignUp();

	const backgroundColor = useThemeColor("light");
	const errorColor = useThemeColor("danger");

	const validate = (values: SignupValues) => {
		const result = SignupSchema.safeParse(values);
		if (result.success) return {};
		const errors: Record<string, string> = {};

		result.error.errors.forEach((error) => {
			if (error.path?.length > 0) {
				errors[error.path[0] as string] = error.message;
			}
		});

		return errors;
	};

	const submit = async (values: SignupValues): Promise<void> => {
		return await signUp({ ...values, phone: "" });
	};

	return (
		<Formik
			initialValues={SIGNUP_FORM_INITIAL_VALUES}
			validate={validate}
			onSubmit={submit}
		>
			{(formik) => (
				<View className="gap-4">
					<View>
						<FieldClear
							value={formik.values.firstName}
							className="p-0 pr-8 border-0"
							placeholder="First name"
							onChange={(value) => formik.setFieldValue("firstName", value)}
							containerProps={{
								className: "rounded-full px-6 py-4 border border-solid",
								style: {
									backgroundColor,
									borderColor:
										formik.touched.firstName && formik.errors.firstName
											? errorColor
											: undefined,
								},
							}}
						/>
						{formik.touched.firstName && formik.errors.firstName && (
							<Text className="text-sm" style={{ color: errorColor }}>
								{formik.errors.firstName}
							</Text>
						)}
					</View>
					<View>
						<FieldClear
							value={formik.values.secondName}
							className="p-0 pr-8 border-0"
							placeholder="Second name"
							onChange={(value) => formik.setFieldValue("secondName", value)}
							containerProps={{
								className: "rounded-full px-6 py-4 border border-solid",
								style: {
									backgroundColor,
									borderColor:
										formik.touched.secondName && formik.errors.secondName
											? errorColor
											: undefined,
								},
							}}
						/>
						{formik.touched.secondName && formik.errors.secondName && (
							<Text className="text-sm" style={{ color: errorColor }}>
								{formik.errors.secondName}
							</Text>
						)}
					</View>
					<View>
						<FieldClear
							value={formik.values.lastName}
							className="p-0 pr-8 border-0"
							placeholder="Last name"
							onChange={(value) => formik.setFieldValue("lastName", value)}
							containerProps={{
								className: "rounded-full px-6 py-4 border border-solid",
								style: {
									backgroundColor,
									borderColor:
										formik.touched.email && formik.errors.lastName
											? errorColor
											: undefined,
								},
							}}
						/>
						{formik.touched.lastName && formik.errors.lastName && (
							<Text className="text-sm" style={{ color: errorColor }}>
								{formik.errors.lastName}
							</Text>
						)}
					</View>
					<View>
						<FieldClear
							value={formik.values.email}
							className="p-0 pr-8 border-0"
							placeholder="Email"
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
					<View>
						<FieldPassword
							className="p-0 pr-8 border-0"
							value={formik.values.repeatPassword}
							placeholder="Repeat password"
							onChange={(value) =>
								formik.setFieldValue("repeatPassword", value)
							}
							containerProps={{
								className: "rounded-full px-6 py-4 border border-solid",
								style: {
									backgroundColor,
									borderColor:
										formik.touched.repeatPassword &&
										formik.errors.repeatPassword
											? errorColor
											: undefined,
								},
							}}
						/>
						{formik.touched.repeatPassword && formik.errors.repeatPassword && (
							<Text className="text-sm" style={{ color: errorColor }}>
								{formik.errors.repeatPassword}
							</Text>
						)}
					</View>

					<Button
						isLoading={isSignUpPending}
						onPress={() => formik.handleSubmit()}
						className="rounded-full p-4"
					>
						Continue
					</Button>
				</View>
			)}
		</Formik>
	);
};
