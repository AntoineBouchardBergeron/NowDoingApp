import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native-appearance'
import { ligthTheme, darkTheme, Colors } from '../theme/ColorTheme'

export interface Theme {
  isDark: boolean
  colors: Colors
  setScheme: (val: 'dark' | 'light') => void
}

export const ThemeContext = React.createContext<Theme>({
  isDark: true,
  colors: ligthTheme,
  setScheme: () => {},
})

export const ThemeProvider: React.FC<{}> = (props) => {
  const colorTheme = useColorScheme()

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
