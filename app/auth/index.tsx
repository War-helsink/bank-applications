import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import {
	Loader,
	Field,
	Button,
	View,
	Text,
} from "@/components/shared/ui";

interface IData {
	email: string;
	password: string;
}

export const Auth: React.FC = () => {
	const tw = useTailwind();
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
		<View style={tw("w-9/12")}>
			<Text
				style={tw("text-center text-2xl font-bold mb-2")}
			>
				{isReg ? "Sing Up" : "Sing In"}
			</Text>

			{isLoading ? (
				<Loader />
			) : (
				<>
					<Field
						value={data.email}
						placeholder="Enter email"
						onChange={(value) => setData((dat) => ({ ...dat, email: value }))}
					/>
					<Field
						value={data.password}
						placeholder="Enter password"
						isSecure
						onChange={(value) =>
							setData((dat) => ({ ...dat, password: value }))
						}
					/>

					<Button onPress={submit}>{isReg ? "Sing up" : "Log in"}</Button>

					<Pressable onPress={() => setIsReg((pre) => !pre)}>
						<Text style={tw("text-right text-sm")}>
							{isReg ? "Login" : "Register"}
						</Text>
					</Pressable>
				</>
			)}
		</View>
	);
};
