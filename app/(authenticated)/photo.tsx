import { Image, ScrollView, View } from "react-native";
import {
	Button,
	Container,
	Link,
	Text,
	ThemedSafeAreaView,
	Toolbar,
} from "@/shared/ui";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { useSelectFile } from "@/shared/hooks/useSelectFile";
import { useUpdateAvatar } from "@/entities/user";
import { useRouter } from "expo-router";

const PhotoScreen: React.FC = () => {
	const router = useRouter();
	const primaryColor = useThemeColor("primary");
	const mutedColor = useThemeColor("medium");

	const { mutateAsync: updateAvatar, isPending } = useUpdateAvatar();

	const pickImageFromGallery = useSelectFile(async (file) => {
		await updateAvatar({
			avatarUrl: file.uri,
			name: file.fileName ?? null,
		});
		router.replace("/(authenticated)/(tabs)");
	});

	return (
		<ThemedSafeAreaView
			className="w-full h-full"
			edges={["bottom", "left", "right"]}
		>
			<Container className="flex-1 justify-between">
				<ScrollView
					showsVerticalScrollIndicator={false}
					className="flex-1"
					contentContainerClassName="pb-6"
				>
					<View className="w-full items-center gap-4">
						<View className="items-center justify-center mb-4">
							<Image
								source={require("@assets/images/screen/camera.png")}
								className="w-52 h-52"
								resizeMode="contain"
							/>
						</View>

						<View className="w-full px-2">
							<Text className="text-2xl font-bold text-center mb-2">
								Upload Your Photo
							</Text>
							<Text
								className="text-base text-center mb-6"
								style={{ color: mutedColor }}
							>
								Help other users recognize you
							</Text>
						</View>

						<Toolbar className="rounded-2xl p-6 w-full">
							<View className="gap-4">
								<Text className="text-lg font-semibold mb-2">
									Photo Usage Agreement
								</Text>

								<View className="flex-row gap-3">
									<View
										className="w-6 h-6 rounded-full items-center justify-center mt-0.5"
										style={{ backgroundColor: primaryColor }}
									>
										<Text className="text-white font-bold text-sm">1</Text>
									</View>
									<View className="flex-1">
										<Text className="text-base leading-6">
											Your photo will be used as your profile picture and will
											be visible to other users within the application.
										</Text>
									</View>
								</View>

								<View className="flex-row gap-3">
									<View
										className="w-6 h-6 rounded-full items-center justify-center mt-0.5"
										style={{ backgroundColor: primaryColor }}
									>
										<Text className="text-white font-bold text-sm">2</Text>
									</View>
									<View className="flex-1">
										<Text className="text-base leading-6">
											We use your photo solely for identification purposes and
											will not share it with third parties outside this
											application.
										</Text>
									</View>
								</View>
							</View>
						</Toolbar>
					</View>
				</ScrollView>

				<View className="gap-4 w-full items-center pt-4">
					<Button
						className="w-2/3 rounded-full"
						onPress={() => router.navigate("/(authenticated)/camera")}
						isLoading={isPending}
					>
						Open Camera
					</Button>
					<Button
						className="w-2/3 rounded-full"
						onPress={pickImageFromGallery}
						isLoading={isPending}
					>
						Choose from Gallery
					</Button>
					<Link
						routerType="dismissAll"
						href="/(authenticated)/(app)/add-card"
						disabled={isPending}
					>
						<Text
							className="text-base font-medium mt-2"
							style={{ color: mutedColor }}
						>
							Skip for now
						</Text>
					</Link>
				</View>
			</Container>
		</ThemedSafeAreaView>
	);
};

export default PhotoScreen;
