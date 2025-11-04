import { z } from "zod";

export const ProfileFormSchema = z.object({
	firstName: z
		.string()
		.min(2, "First name must be at least 2 characters")
		.max(50, "First name must not exceed 50 characters"),
	secondName: z
		.string()
		.min(2, "Second name must be at least 2 characters")
		.max(50, "Second name must not exceed 50 characters"),
	lastName: z
		.string()
		.min(2, "Last name must be at least 2 characters")
		.max(50, "Last name must not exceed 50 characters"),
	phone: z.string().min(10, "Phone number must be at least 10 characters"),
	email: z.string().email("Invalid email address"),
});

export type ProfileFormValues = z.infer<typeof ProfileFormSchema>;
