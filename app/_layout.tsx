import { Stack } from "expo-router";
import "./globals.css";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Image, Text } from "react-native";
import { useFonts } from "expo-font";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [loaded, error] = useFonts({
    "Custom-font": require("../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
    regular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    semibold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    bold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !loaded) {
    return <SplashScreen />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="OtpVerificationPage"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
