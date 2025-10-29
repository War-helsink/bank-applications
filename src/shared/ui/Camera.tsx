import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "./Text";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { useThemeColor } from "../hooks/useThemeColor";

const OFFSET = 16;
const BACKGROUND_COLOR = "#00000080";

export interface CameraProps {
	setUri(uri: string): void;
	leftButtons?: React.ReactNode;
	rightButtons?: React.ReactNode;
}

export const Camera: React.FC<CameraProps> = ({
	setUri,
	leftButtons,
	rightButtons,
}) => {
	const router = useRouter();
	const cameraRef = React.useRef<CameraView>(null);
	const insets = useSafeAreaInsets();
	const [permission, requestPermission] = useCameraPermissions();
	const [facing, setFacing] = React.useState<"back" | "front">("back");

	const buttonColor = useThemeColor("primary");

	if (!permission) {
		return (
			<View className="flex-1 items-center justify-center">
				<Loader />
			</View>
		);
	}

	if (!permission.granted) {
		return (
			<View className="flex-1 p-4 gap-4 items-center justify-center">
				<Text className="text-center">
					We need your permission to show the camera
				</Text>
				<Button className="w-3/4" onPress={requestPermission}>
					Grant permission
				</Button>
			</View>
		);
	}

	function toggleCameraFacing() {
		setFacing((current) => (current === "back" ? "front" : "back"));
	}

	async function takePicture() {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			if (photo) {
				setUri?.(photo.uri);
			}
		}
	}

	return (
		<View className="flex-1 relative justify-between">
			<View
				className="absolute top-0 left-0 right-0 z-10 pb-4"
				style={{
					paddingTop: insets.top,
					paddingLeft: insets.left + OFFSET,
					paddingRight: insets.right + OFFSET,
					backgroundColor: BACKGROUND_COLOR,
				}}
			>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="close" size={28} color={buttonColor} />
				</TouchableOpacity>
			</View>
			<CameraView ref={cameraRef} style={[{ flex: 1 }]} facing={facing} />
			<View
				className="absolute bottom-0 left-0 right-0 flex-row items-center pt-4 z-10"
				style={{
					paddingLeft: insets.left + OFFSET,
					paddingRight: insets.right + OFFSET,
					paddingBottom: insets.bottom,
					backgroundColor: BACKGROUND_COLOR,
				}}
			>
				<View className="flex-1 items-start justify-center">
					<TouchableOpacity activeOpacity={0.8} onPress={toggleCameraFacing}>
						<Ionicons name="repeat" size={28} color={buttonColor} />
					</TouchableOpacity>
					{leftButtons}
				</View>
				<View className="items-center justify-center">
					<View
						className="p-[2px] rounded-full border"
						style={[{ borderColor: buttonColor }]}
					>
						<TouchableOpacity
							className="w-16 h-16 rounded-full bg-white"
							activeOpacity={0.8}
							style={{ backgroundColor: buttonColor }}
							onPress={takePicture}
						/>
					</View>
				</View>

				<View className="flex-1 items-end justify-center">{rightButtons}</View>
			</View>
		</View>
	);
};
