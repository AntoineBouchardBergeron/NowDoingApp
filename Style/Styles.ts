import { StyleSheet, useWindowDimensions } from 'react-native'
import { useTheme } from '../Components/ThemeProvider'

const styles = () => {
  const { colors } = useTheme()
  return StyleSheet.create({
    app: {
      alignContent: 'center',
      alignSelf: 'center',
      flex: 1,
      // flexDirection: 'row',
      // // flexWrap: 'wrap',
      backgroundColor: colors.background,
      width: useWindowDimensions().width,
      height: useWindowDimensions().height,
    },
    mainActivity: {
      position: 'absolute',
      backgroundColor: colors.background,
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'space-around',
      width: '100%',
      height: '100%',
      // paddingTop: 20,
    },
    ActivityPanel: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 10,
      padding: 10,
      alignContent: 'stretch',
      alignSelf: 'stretch',
      alignItems: 'center',
      width: '100%',
      maxWidth: 300,
      // flexDirection: `row`,
      // flex: 1,
    },
    title: {
      color: colors.text,
      padding: 2,
      margin: 2,
      fontSize: 22,
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
      left: '20%',
      // width: '50%',
      // flexDirection: 'row-reverse',
    },
    onTopPanel: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 10,
      padding: 10,
      width: '90%',
      height: '90%',
      alignSelf: 'center',
      opacity: 0.98,
    },
    ViewRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    ViewColumn: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'space-between',
      justifyContent: 'space-evenly',
      alignSelf: 'stretch',
      width:'100%',
    },
    Switch: {
      backgroundColor: 'transparent',
    },
    scrollView: {
      backgroundColor: colors.secondaryBackground,
    },
    settingsPanel: {
      flex: 1,
      elevation: 5,
      zIndex: 1,
      backgroundColor: '#000',
    },
    slidingPanel: {
      // position: 'absolute',
      backgroundColor: colors.backdrop,
      elevation: 1,
      width: 300,
    },
  })
}

export default styles
