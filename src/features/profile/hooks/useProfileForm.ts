import { useFormik } from "formik";
import { useMemo } from "react";
import { ProfileFormSchema, type ProfileFormValues } from "../lib/schema";
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
			const result = ProfileFormSchema.safeParse(values);
			if (result.success) return {};
			const errors: Record<string, string> = {};

			result.error.errors.forEach((error) => {
				if (error.path?.length > 0) {
					errors[error.path[0] as string] = error.message;
				}
			});

			return errors;
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
