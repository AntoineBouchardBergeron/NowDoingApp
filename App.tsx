import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MainActivity from './Components/MainActivity'
import { Task } from './types/Task'

export default function App() {
  const [ActiveTask, setActiveTask] = useState<Task>()

  // useEffect(() => {}, [])
  return (
    <View style={style.app}>
      <MainActivity />
      {/* <TaskSelector /> */}
      <StatusBar style="auto" />
    </View>
  )
}

const style = StyleSheet.create({
  app: {
    backgroundColor: '#bdf',
    flex: 1,
    alignItems: 'center',
  },
})
