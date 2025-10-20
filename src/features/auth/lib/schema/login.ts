import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().min(1, "Email is required").email("Incorrect E-mail"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(6, "Password must be at least 6 characters"),
});

export type LoginValues = z.infer<typeof LoginSchema>;

export const LOGIN_FORM_INITIAL_VALUES = {
	email: "",
	password: "",
};
