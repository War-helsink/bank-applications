import { useRouter } from "expo-router";
import { Camera } from "@/shared/ui";

const CameraScreen: React.FC = () => {
	const router = useRouter();

	const onBackUri = (uri: string) => {
		console.log(uri);
		router.back();
	};

	return <Camera setUri={onBackUri} />;
};

export default CameraScreen;
