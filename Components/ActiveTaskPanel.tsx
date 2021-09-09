import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Task } from '../Types/Task'
import ClockTime from './ClockTime'
import PauseButton from './PauseButton'

type Props = {
  activeTask: Task | undefined
  isPaused: boolean
  onPauseEvent: () => void
}

const ActiveTaskPanel = (props: Props) => {
  const [isTimerPaused, setTimerPause] = useState<boolean>(true)
  function TogglePause() {
    setTimerPause((isTimerPaused) => !isTimerPaused)
    props.onPauseEvent()
  }

  function isTaskSet() {
    if (props.activeTask !== undefined) {
        // return <ClockTime time={props.activeTask.estimatedTime} />
    }
  }

  return (
    <View style={style.ActiveTaskPanel}>
      <Text>Active task</Text>
      <Text>{props.activeTask?.title}</Text>
      <Text>Description </Text>
      <Text>{props.activeTask?.description}</Text>
      {/* {isTaskSet()} */}
      <PauseButton onPauseEvent={TogglePause} isPaused={isTimerPaused} />
    </View>
  )
}

const style = StyleSheet.create({
  ActiveTaskPanel: {
    backgroundColor: '#fdb',
  },
})

export default ActiveTaskPanel
