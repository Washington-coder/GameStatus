import React from "react";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { AuthProvider } from "./src/hooks/auth";

import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
