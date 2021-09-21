import React from 'react'
import { View, TextInput as RNTextInput } from 'react-native'
import { useTheme } from './ThemeProvider'

type Props = {
  defaultValue: string
  isOneLine: boolean
  onTextChangeEvent: () => void
}

const TextInput = (props: Props) => {
  const { colors } = useTheme()
//   const ChangeFocusColor = (e:any) => {
//       e.
//   }

  return (
    <View>
      <RNTextInput value={props.defaultValue} on={ChangeFocusColor} />
    </View>
  )
}

export default TextInput
