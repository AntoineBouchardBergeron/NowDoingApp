import React, { useEffect, useState } from "react";
import { Text, Switch, StyleSheet, View, ColorValue } from "react-native";
import { useTheme } from "../Providers/ThemeProvider";
import CheckBox from "@react-native-community/checkbox";
import { useActiveActivity } from "../Providers/ActivityProvider";
import styles from "../Style/Styles";

const ThemeSwitch = () => {
  const { isDark, colors, setScheme } = useTheme();
  const { id } = useActiveActivity();
  const [isThemeDefault, setThemeDefault] = useState<boolean>(false);

  const toggleSwitchAvailability = () => {
    setThemeDefault((isThemeDefault: boolean) => !isThemeDefault);
  };

  const ChangeTheme = () => {
    setScheme(isDark ? "light" : "dark");
  };

  const style = StyleSheet.create({
    themeSwitch: {
      backgroundColor: "transparent",
    },
    themeText: {
      color: colors.text,
    },
    themeView: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 5,
      margin: 3,
      justifyContent: "space-between",
      width: 200,
    },
    checkBoxTheme: {
      color: colors.text,
    },
  });

  return (
    <View style={style.themeView}>
      <>
        <Text style={style.themeText}>Dark Mode</Text>
        <Switch
          style={styles().Switch}
          trackColor={{
            false: colors.greyColors[id - 1],
            true: colors.trackColors[id - 1],
          }}
          thumbColor={
            !isDark ? colors.greyColors[id - 1] : colors.clockColors[id - 1]
          }
          value={isDark}
          onValueChange={ChangeTheme}
          disabled={isThemeDefault}
        />
      </>
      <>
        <Text style={style.themeText}>Use device's settings</Text>
        {/* <CheckBox
          value={isThemeDefault}
          onChange={toggleSwitchAvailability}
          tintColor={"#fff"}
          onCheckColor={"#fff"}
          onFillColor={"#fff"}
          onTintColor={"#fff"}
          tintColors={{ true: colors.clockColors[id - 1], false: colors.text }}
        /> */}
      </>
    </View>
  );
};

export default ThemeSwitch;
