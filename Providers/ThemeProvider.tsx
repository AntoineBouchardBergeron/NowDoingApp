import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native-appearance'
import { ligthTheme, darkTheme, Colors } from '../Theme/ColorTheme'

export interface Theme {
  isDark: boolean
  colors: Colors
  setScheme: (val: 'dark' | 'light') => void
}

export const ThemeContext = React.createContext<Theme>({
  isDark: true,
  colors: darkTheme,
  setScheme: () => {},
})

export const ThemeProvider: React.FC<{}> = (props) => {
  const colorTheme = useColorScheme()
  /// I wonder, do we setup device's input here, so that it know, dark mode from phone settings

  const [isDark, setTheme] = useState<boolean>(colorTheme === 'dark')

  useEffect(() => {
    setTheme(colorTheme === 'dark')
  }, [colorTheme])

  const defaultTheme: Theme = {
    isDark,
    colors: isDark ? darkTheme : ligthTheme,
    setScheme: (scheme) => {
      setTheme(scheme === 'dark')
    },
  }

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
