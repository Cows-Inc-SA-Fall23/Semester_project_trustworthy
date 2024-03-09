import {useClientOnlyValue} from "@/components/useClientOnlyValue";
import {useColorScheme} from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Link, Stack} from "expo-router";
import type {ComponentProps} from "react";
import {Pressable} from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Stack
			screenOptions={{
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, true),
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Sign In",
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
		</Stack>
	);
}
