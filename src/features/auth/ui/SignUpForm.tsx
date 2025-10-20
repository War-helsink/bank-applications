import type React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import { Link as LickText } from "expo-router";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Button, Text, Link, FieldPassword, FieldClear } from "@/shared/ui";
import {
	SignupSchema,
	type SignupValues,
	SIGNUP_FORM_INITIAL_VALUES,
} from "../lib/schema/signup";
import { useSignUp } from "../hooks/useSignUp";

export const SignUpForm: React.FC = () => {
	const { mutate: signUp, isPending: isSignUpPending } = useSignUp();

	const backgroundColor = useThemeColor("light");
	const linkColor = useThemeColor("success");
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
		return await signUp(values);
	};

	return (
		<View className="flex-1 w-9/12 flex">
			<View className="flex-1 justify-center gap-6">
				<Text className="text-center text-4xl font-bold">
					Create an account
				</Text>
				<Link href="/auth/login">
					<Text className="text-center text-base">
						Already have an account?{" "}
						<Text style={{ color: linkColor }}>Login</Text>
					</Text>
				</Link>

				<Formik
					initialValues={SIGNUP_FORM_INITIAL_VALUES}
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
								disabled={isSignUpPending}
								onPress={() => formik.handleSubmit()}
								className="rounded-full p-4"
							>
								Continue
							</Button>
						</View>
					)}
				</Formik>
			</View>
			<View className="p-6">
				<Text className="text-center text-sm font-light">
					By clicking continue, you agree to our{" "}
					<LickText
						href="/policy/terms-of-service"
						className="underline"
						style={{ color: linkColor }}
					>
						Terms of Service
					</LickText>{" "}
					and{" "}
					<LickText
						href="/policy/privacy-policy"
						className="underline"
						style={{ color: linkColor }}
					>
						Privacy Policy
					</LickText>
					.
				</Text>
			</View>
		</View>
	);
};
