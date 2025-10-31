import { useRouter } from "expo-router";
import { Camera } from "@/shared/ui";
import { CameraService } from "@/shared/services";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";

const CameraScreen: React.FC = () => {
	const router = useRouter();
	const buttonColor = useThemeColor("primary");

	const capturePhoto = (uri: string) => {
		CameraService.resolveWithUri(uri);
		router.back();
	};

	const closeCamera = () => {
		CameraService.cancel();
		router.back();
	};

	return (
		<Camera
			setUri={capturePhoto}
			topButtons={
				<TouchableOpacity onPress={closeCamera}>
					<Ionicons name="close" size={28} color={buttonColor} />
				</TouchableOpacity>
			}
		/>
	);
};

export default CameraScreen;
