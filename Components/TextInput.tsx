import React, { useState } from 'react'
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native'
import { useTheme } from './ThemeProvider'

type Props = {
  defaultValue: string
  isOneLine: boolean
  onTextChangeEvent: () => void
}

const TextInput = (props: Props) => {
  const [text, setText] = useState<string>(props.defaultValue)
  const { colors } = useTheme()
  const ChangeFocusColor = (e: any) => {}

  const style = StyleSheet.create({
    InputColor: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'stretch',
      color: colors.text,
      margin: 2,
      padding: 3,
      borderWidth: 2,
      borderColor: colors.textInputBackground,
      flexGrow: 1,
      borderRadius: 2,
    },
  })

  return (
    <View>
      <RNTextInput
        style={style.InputColor}
        value={text}
        clearTextOnFocus={true}
        onChangeText={() => setText((value) => value)}
      />
    </View>
  )
}

export default TextInput
