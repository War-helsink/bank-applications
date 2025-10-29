import { useRouter } from "expo-router";
import { Camera } from "@/shared/ui";
import { CameraService } from "@/shared/services";

const CameraScreen: React.FC = () => {
	const router = useRouter();

	const handleCapturePhoto = (uri: string) => {
		CameraService.resolveWithUri(uri);
		router.back();
	};

	return <Camera setUri={handleCapturePhoto} />;
};

export default CameraScreen;
