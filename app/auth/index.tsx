import { Pressable, View } from "react-native";
import { Loader, Field, Button, Text } from "@/components/shared";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";

interface IData {
	email: string;
	password: string;
}

export const AuthScreen: React.FC = () => {
	const { isLoading, login, register } = useAuth();
	const [isReg, setIsReg] = useState(false);
	const [data, setData] = useState<IData>({} as IData);

	const submit = async () => {
		const { email, password } = data;

		if (isReg) {
			return await register(email, password);
		}
		return await login(email, password);
	};

	return (
		<View className="w-9/12">
			<Text className="text-center text-2xl font-bold mb-2">
				{isReg ? "Sing Up" : "Sing In"}
			</Text>

			{isLoading ? (
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
