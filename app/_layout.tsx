import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
// Import your global CSS file
import "../global.css";
import { useEffect } from "react";
import { Modal } from "react-native";
import TimeProvider from "@/context/TimerContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) return null;
    if (!fontsLoaded && !error) return null;

    return (
        <TimeProvider>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="meditate/[id]"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="(modal)/adjust-meditation-duration"
                    options={{ headerShown: false, presentation: "modal" }}
                />
            </Stack>
        </TimeProvider>
    )
}


