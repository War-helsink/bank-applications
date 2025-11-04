import { useFormik } from "formik";
import { useMemo } from "react";
import { profileFormSchema, type ProfileFormValues } from "../lib/schema";
import type { UserType } from "@/entities/user";
import { hasObjectChanged } from "@/shared/utils";

export interface UseProfileFormProps {
	user: UserType | null | undefined;
	onSubmit: (values: ProfileFormValues) => void | Promise<void>;
}

export const useProfileForm = ({ user, onSubmit }: UseProfileFormProps) => {
	const initialValues: ProfileFormValues = useMemo(
		() => ({
			firstName: user?.firstName ?? "",
			secondName: user?.secondName ?? "",
			lastName: user?.lastName ?? "",
			phone: user?.phone ?? "",
			email: user?.email ?? "",
		}),
		[user],
	);

	const formik = useFormik<ProfileFormValues>({
		initialValues,
		validate: (values) => {
			try {
				profileFormSchema.parse(values);
				return {};
			} catch (error) {
				const errors: Record<string, string> = {};
				if (error && typeof error === "object" && "errors" in error) {
					const zodError = error as {
						errors: Array<{ path?: string[]; message: string }>;
					};
					zodError.errors?.forEach((err) => {
						if (err.path?.[0]) {
							errors[err.path[0]] = err.message;
						}
					});
				}
				return errors;
			}
		},
		onSubmit,
		enableReinitialize: true,
		validateOnChange: true,
		validateOnBlur: true,
	});

	const hasChanges = useMemo(() => {
		const originalData = {
			firstName: user?.firstName ?? "",
			secondName: user?.secondName ?? "",
			lastName: user?.lastName ?? "",
			phone: user?.phone ?? "",
			email: user?.email ?? "",
		};
		return hasObjectChanged(formik.values, originalData);
	}, [formik.values, user]);

	return {
		formik,
		hasChanges,
	};
};
