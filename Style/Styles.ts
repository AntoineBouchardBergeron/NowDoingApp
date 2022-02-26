import { StyleSheet, useWindowDimensions } from "react-native";
import { useTheme } from "../Components/ThemeProvider";

const styles = () => {
  const { colors } = useTheme();

  // const {platform} = usePlatform();
  const maxWidth = useWindowDimensions().width;
  const maxHeight = useWindowDimensions().height;
  const minVal = maxHeight < maxWidth ? maxHeight : maxWidth;
  const maxVal = maxHeight > maxWidth ? maxHeight : maxWidth;

  return StyleSheet.create({
    app: {
      alignItems: "baseline", // alignItems describes how to align children along the cross axis of their container. It is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis.
      alignContent: "center",
      flex: 1,
      backgroundColor: colors.background,
      width: "100%",
      height: "100%",
    },
    navBar: {
      color: colors.background,
      backgroundColor: colors.background,
    },
    mainActivity: {
      position: "absolute",
      backgroundColor: colors.background,
      flexDirection: "column",
      flexWrap: maxWidth === minVal ? "nowrap" : "wrap",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-evenly",
      width: "100%",
      height: "100%",
    },
    Container: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 10,
      padding: 10,
      maxWidth: minVal == maxWidth ? minVal * 0.88 : maxWidth * 0.5,
      margin: 5,
      elevation: 3,
    },
    SafeAreaActivity: {
      backgroundColor: colors.secondaryBackground,
      alignSelf: "stretch",
      alignItems: "stretch",
    },
    title: {
      color: colors.text,
      padding: 12,
      margin: 2,
      fontSize: 22,
      alignContent: "center",
      alignSelf: "center",
    },
    titleTextView: {
      color: colors.text,
      padding: 12,
      margin: 12,
      fontSize: 22,
      alignContent: "center",
      alignSelf: "center",
    },
    smallTitle: {
      color: colors.text,
      padding: 2,
      margin: 2,
      fontSize: 16,
      alignContent: "center",
      alignSelf: "center",
    },
    basicText: {
      color: colors.text,
      padding: 2,
      marginLeft: 10,
      margin: 2,
      marginBottom: 10,
      fontSize: 12,
    },
    selected: {
      color: colors.text,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 4,
      padding: 2,
      margin: 2,
      marginBottom: 10,
      fontSize: 20,
    },
    buttons: {
      padding: 12,
      margin: 12,
      elevation: 5,
      zIndex: 100,
      maxWidth: 280,
    },
    Timer: {
      padding: 10,
      marginTop: 10,
    },
    ActivityComplete: {
      marginTop: 4,
      left: "20%",
    },
    onTopPanel: {
      position: "absolute",
      margin: 15,
      width: "100%",
      height: "100%",
      alignSelf: "center",
      justifyContent: "center",
    },
    ViewRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      alignContent: "center",
      alignItems: "center",
      // alignSelf: "center",
      // justifyContent: "center",
    },
    ViewColumn: {
      flexDirection: "row",
      flexWrap: "nowrap",
      alignContent: "space-between",
      justifyContent: "space-evenly",
      alignSelf: "stretch",
      width: "100%",
    },
    Switch: {
      backgroundColor: "transparent",
    },
    scrollView: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 10,
      flexWrap: "nowrap",
      flexGrow: 0,
      flexShrink: 1,
    },
    settingsPanel: {
      height: 50,
    },
    ActivityPreview: {
      padding: 10,
      borderRadius: 10,
      width: "100%",
      alignSelf: "center",
      justifyContent: "space-evenly",
      flex: 1,
      backgroundColor: colors.tertiaryBackground,
    },
    ClockPreviewView: {
      alignItems: "center",
    },
    SelectNewActivity: {
      position: "absolute",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      height: "90%",
      width: "90%",
      maxWidth: "90%",
    },
    ActivityListSelector:{
      maxHeight: minVal*.6
    },
  });
};

export default styles;
