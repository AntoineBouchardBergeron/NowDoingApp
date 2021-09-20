import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import MainActivity from './Components/MainActivity'
import { ThemeProvider, useTheme } from './Components/ThemeProvider'
import { Task } from './types/Task'

export default function App() {
  const [ActiveTask, setActiveTask] = useState<Task>()

  const { colors } = useTheme()

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
        <StatusBar animated hidden={true} />
        <MainActivity />
      </ThemeProvider>
    </AppearanceProvider>
  )
}
