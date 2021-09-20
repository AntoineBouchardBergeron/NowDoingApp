import React, { useState } from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native'

const TaskPanelEditor = () => {
  const [windowWidth, setWindowWidth] = useState(
    useWindowDimensions().width * 0.9
  )

  const [windowHeigth, setWindowHeigth] = useState(
    useWindowDimensions().height * 0.9
  )

  const style = StyleSheet.create({
    onTopPanel: {
      position: 'absolute',
      backgroundColor: '#353535',
      borderRadius: 10,
      padding: 10,
      width: windowWidth,
      height: windowHeigth,
      zIndex: 1,
      alignSelf: 'center',
      opacity: 0.98,
    },
  })

  return (
    <View style={style.onTopPanel}>
      <Text >temporary</Text>
    </View>
  )
}

export default TaskPanelEditor
