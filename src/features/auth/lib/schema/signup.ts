import { z } from "zod";

export const SignupSchema = z.object({
	email: z.string().min(1, "Email is required").email("Incorrect E-mail"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(6, "Password must be at least 6 characters"),
});

export type SignupValues = z.infer<typeof SignupSchema>;

export const SIGNUP_FORM_INITIAL_VALUES = {
	email: "",
	password: "",
};
