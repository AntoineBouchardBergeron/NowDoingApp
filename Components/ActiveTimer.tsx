import React, { useRef, useState, useEffect } from 'react'
import { Time } from '../Classes/Time'
import { Text, View, StyleSheet, Button } from 'react-native'
import ClockTime from './ClockTime'
import Clock from './Clock'

type Props = {
  estimatedTime: Time
  timePassedDoingTask: Time
  toggle: boolean
  onTaskComplete: () => void
}

//Active timer can tick to quick

const ActiveTimer = (props: Props) => {
  const countdownAmount = useRef<number>(0)
  const [updateTaskTime, setUpdateTaskTime] = useState<Time>(
    props.timePassedDoingTask
  )

  function tickDown() {
    return new Time(props.estimatedTime.seconds - updateTaskTime.seconds)
  }

  useEffect(() => {
    if (props.toggle) {
      clearInterval(countdownAmount.current)
    } else {
      countdownAmount.current = window.setInterval(() => {
        setUpdateTaskTime((updateTaskTime) => updateTaskTime.tick())
      }, 1000)
    }
  }, [props.toggle])

  return (
    <View style={style.Timer}>
      <Clock representedTime={tickDown()} />
      <ClockTime time={tickDown()} />
      <Button title="TaskCompleted" onPress={props.onTaskComplete} />
    </View>
  )
}

const style = StyleSheet.create({
  Timer: {
    backgroundColor: '#fff',
  },
})

export default ActiveTimer
