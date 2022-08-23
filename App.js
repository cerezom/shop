import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

import AppNavigator from "./navigation/index";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./fonts/Lato-Bold.ttf"),
    "Lato-Light": require("./fonts/Lato-Light.ttf"),
    "Lato-Black": require("./fonts/Lato-Black.ttf"),
    "Lato-Thin": require("./fonts/Lato-Thin.ttf"),
    "Lato-Italic": require("./fonts/Lato-Italic.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return <AppNavigator />;
}