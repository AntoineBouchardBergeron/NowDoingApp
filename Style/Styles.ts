import { StyleSheet, useWindowDimensions } from "react-native";
import { useTheme } from "../Components/ThemeProvider";

const styles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    app: {
      alignContent: "center",
      alignSelf: "center",
      flex: 1,
      backgroundColor: colors.background,
      width: useWindowDimensions().width,
      height: useWindowDimensions().height,
    },
    mainActivity: {
      position: "absolute",
      backgroundColor: colors.background,
      flex: 1,
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignContent: "space-around",
      width: "100%",
      height: "100%",
      // paddingTop: 20,
    },
    ActivityPanel: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 10,
      padding: 10,
      alignContent: "stretch",
      alignSelf: "stretch",
      alignItems: "center",
      width: "100%",
      maxWidth: 300,
      // flexDirection: `row`,
      // flex: 1,
    },
    title: {
      color: colors.text,
      top: 0,
      padding: 12,
      margin: 2,
      fontSize: 22,
      alignContent: "center",
      alignSelf: "center",
    },
    titleTextView: {
      color: colors.text,
      padding: 12,
      margin: 2,
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
      // width: '80%',
      // flexDirection: 'row',
      padding: 2,
      elevation: 5,
      maxWidth: 280,
    },
    Timer: {
      padding: 10,
      marginTop: 10,
    },
    ActivityComplete: {
      marginTop: 4,
      // flex: 1,
      left: "20%",
      // width: '50%',
      // flexDirection: 'row-reverse',
    },
    onTopPanel: {
      // backgroundColor: colors.secondaryBackground,
      // borderRadius: 10,
      // padding: 10,
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
      alignSelf: "center",
      justifyContent: "center",
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
    },
    settingsPanel: {
      flex: 1,
      elevation: 5,
      zIndex: 1,
      backgroundColor: "#000",
    },
    slidingPanel: {
      backgroundColor: colors.backdrop,
      elevation: 3,
      width: 300,
    },
    ActivityPreview: {
      padding: 10,
      borderRadius: 10,
      width: "100%",
      alignSelf: "stretch",
      justifyContent: "center",
      backgroundColor: colors.tertiaryBackground,
      maxWidth: 400,
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
    },
  });
};

export default styles;
