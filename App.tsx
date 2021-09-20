import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ViewStyle, Button, Switch } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import MainActivity from './Components/MainActivity'
import { ThemeProvider, useTheme } from './Components/ThemeProvider'
import ThemeSwitch from './theme/ThemeSwitch'
import { Task } from './types/Task'

export default function App() {
  const [ActiveTask, setActiveTask] = useState<Task>()

  const { colors, isDark } = useTheme()

  useEffect(() => {}, [colors])

  const styles = StyleSheet.create({
    app: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: colors.background,
    },
  })

  return (
    <AppearanceProvider>
      <ThemeProvider>
        {/* <View style={styles.app}> */}
          <StatusBar
            animated
            hidden={true}
            barStyle={isDark?'dark-content': 'light-content'}
          />
          <MainActivity />
        {/* </View> */}
        {/* <TaskSelector /> */}
      </ThemeProvider>
    </AppearanceProvider>
  )
}
