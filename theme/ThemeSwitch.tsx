import React, { useState } from 'react'
import { Text, Switch, StyleSheet, View } from 'react-native'
import { useTheme } from '../Components/ThemeProvider'

const ThemeSwitch = () => {
  const { isDark, colors, setScheme } = useTheme()

  const ChangeTheme = () => {
    setScheme(isDark ? 'light' : 'dark')
  }

  const style = StyleSheet.create({
    themeSwitch: {
      backgroundColor: colors.background,
    },
    themeText: {
      color: colors.text,
    },
    themeView: {
      flexDirection: 'row',
      padding: 5,
      margin: 3,
      justifyContent: 'space-evenly',
      width: 300,
    },
  })

  return (
    <View style={style.themeView}>
      <Text style={style.themeText}>Dark Mode</Text>
      <Switch
        style={style.themeSwitch}
        value={isDark}
        onValueChange={ChangeTheme}
      />
    </View>
  )
}

export default ThemeSwitch
