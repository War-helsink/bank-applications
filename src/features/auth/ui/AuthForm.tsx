import { Button, Field, Loader, Text } from "@/shared/ui";
import type React from "react";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

interface IData {
	email: string;
	password: string;
}

export const AuthForm: React.FC = () => {
	const [isReg, setIsReg] = useState(false);
	const [data, setData] = useState<IData>({} as IData);

	const { mutate: register, isPending: isRegisterPending } = useRegister();
	const { mutate: login, isPending: isLoginPending } = useLogin();

	const submit = async () => {
		const { email, password } = data;

		if (isReg) {
			return await register({ email, password });
		}
		return await login({ email, password });
	};

	return (
		<View className="w-9/12">
			<Text className="text-center text-2xl font-bold mb-2">
				{isReg ? "Sing Up" : "Sing In"}
			</Text>

			{isRegisterPending || isLoginPending ? (
				<Loader />
			) : (
				<>
					<Field
						value={data.email}
						className="mt-3"
						placeholder="Enter email"
						onChange={(value) => setData((dat) => ({ ...dat, email: value }))}
					/>
					<Field
						value={data.password}
						className="mt-3"
						placeholder="Enter password"
						isSecure
						onChange={(value) =>
							setData((dat) => ({ ...dat, password: value }))
						}
					/>

					<Button className="my-4" onPress={submit}>
						{isReg ? "Sing up" : "Log in"}
					</Button>

					<Pressable onPress={() => setIsReg((pre) => !pre)}>
						<Text className="text-right text-sm">
							{isReg ? "Login" : "Register"}
						</Text>
					</Pressable>
				</>
			)}
		</View>
	);
};
