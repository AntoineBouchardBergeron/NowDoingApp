import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { AppearanceProvider } from "react-native-appearance";
import { ActivityProvider } from "./Providers/ActivityProvider";
import MainActivity from "./Components/MainActivity";
import SettingPanel from "./Components/SettingPanel";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";

import styles from "./Style/Styles";
import { TimeProvider } from "./Providers/TimeProvider";

export default function App() {
  const { colors, isDark } = useTheme();

  useEffect(() => {
    // changeNavigationBarColor(colors.background, !isDark, false);
  }, [isDark]);

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <ActivityProvider>
          <TimeProvider>
            <SafeAreaView style={styles().app}>
              <StatusBar
                animated
                hidden={true}
                style={isDark ? "dark" : "light"}
              />
              <MainActivity />
              <SettingPanel />
              {/* SETTINGS PANEL IsShown APPEARS ON START TIMER WHEN IT SHOULD NOT */}
            </SafeAreaView>
          </TimeProvider>
        </ActivityProvider>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
