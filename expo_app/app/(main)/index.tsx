import {Text, View} from "@/components/Themed";
import {makeRedirectUri, useAuthRequest} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import {useEffect} from "react";
import {Button, StyleSheet} from "react-native";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
	authorizationEndpoint: "https://github.com/login/oauth/authorize",
	tokenEndpoint: "https://github.com/login/oauth/access_token",
	revocationEndpoint:
		"https://github.com/settings/connections/applications/1335c2d3d35a886cff2e",
};

export default function TabOneScreen() {
	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: "1335c2d3d35a886cff2e",
			scopes: ["identity"],
			redirectUri: makeRedirectUri({
				scheme: "sdla.app",
			}),
		},
		discovery,
	);

	useEffect(() => {
		console.log("response", response?.type);
		if (response?.type === "success") {
			const { code } = response.params;
		}
	}, [response]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign in with github</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Button
				disabled={!request}
				title="Login"
				onPress={() => {
					promptAsync();
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
