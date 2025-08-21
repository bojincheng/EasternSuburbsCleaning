import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function MarketingLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <StatusBar style="dark" />
            <Stack screenOptions={{ headerShown: false }} />
        </View>
    );
}
