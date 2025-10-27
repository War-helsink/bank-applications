import { z } from "zod";

export const SignupSchema = z
	.object({
		firstName: z.string().min(1, "First name is required"),
		secondName: z.string().min(1, "Second name is required"),
		lastName: z.string().min(1, "Last name is required"),
		email: z.string().min(1, "Email is required").email("Incorrect E-mail"),
		password: z
			.string()
			.min(1, "Password is required")
			.min(6, "Password must be at least 6 characters"),
		repeatPassword: z
			.string()
			.min(1, "Repeat password is required")
			.min(6, "Repeat password must be at least 6 characters"),
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: "Passwords do not match",
		path: ["repeatPassword"],
	});

export type SignupValues = z.infer<typeof SignupSchema>;

export const SIGNUP_FORM_INITIAL_VALUES = {
	firstName: "",
	secondName: "",
	lastName: "",
	email: "",
	password: "",
	repeatPassword: "",
};
