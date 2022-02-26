import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { AppearanceProvider } from "react-native-appearance";
import { ActivityProvider } from "./Components/ActivityProvider";
import MainActivity from "./Components/MainActivity";
import SettingPanel from "./Components/SettingPanel";
import { ThemeProvider, useTheme } from "./Components/ThemeProvider";
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from "react-native-navigation-bar-color";
import styles from "./Style/Styles";

export default function App() {
  const { colors, isDark } = useTheme();
  const [timerStarted, setTimerActive] = useState<boolean>(false);

  const hideSettings = () => {
    setTimerActive(true);
    // hideNavigationBar();
  };
  const showSettings = () => {
    setTimerActive(false);
    // showNavigationBar();
  };
  useEffect(() => {
    // changeNavigationBarColor(colors.background, !isDark, false);
  }, [isDark]);

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <ActivityProvider>
          <SafeAreaView style={styles().app}>
            <StatusBar
              animated
              hidden={true}
              style={isDark ? "dark" : "light"}
            />
            <MainActivity
              onTimerStart={() => hideSettings()}
              onTimerStop={() => showSettings()}
            />
            <SettingPanel isActive={!timerStarted} />
            {/* SETTINGS PANEL IsShown APPEARS ON START TIMER WHEN IT SHOULD NOT */}
          </SafeAreaView>
        </ActivityProvider>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
