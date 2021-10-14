import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { AppearanceProvider } from "react-native-appearance";
import { ActivityProvider } from "./Components/ActivityProvider";
import MainActivity from "./Components/MainActivity";
import SettingPanel from "./Components/SettingPanel";
import { ThemeProvider, useTheme } from "./Components/ThemeProvider";
import styles from "./Style/Styles";

export default function App() {
  const { colors } = useTheme();
  const [timerStarted, setTimerActive] = useState<boolean>(false);

  useEffect(() => {}, [colors]);

  const hideSettings = () => {
    setTimerActive(true);
  };
  const showSettings = () => {
    setTimerActive(false);
  };

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <ActivityProvider>
          <View style={styles().app}>
            <StatusBar animated hidden={true} />
            <MainActivity
              onTimerStart={() => hideSettings()}
              onTimerStop={() => showSettings()}
            />
            <SettingPanel isActive={!timerStarted} />
            {/* SETTINGS PANEL IsShown APPEARS ON START TIMER WHEN IT SHOULD NOT */}
          </View>
        </ActivityProvider>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
