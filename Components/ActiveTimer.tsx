import React, { useRef, useState, useEffect } from 'react'
import { Time } from '../Classes/Time'
import { View, StyleSheet, Button } from 'react-native'
import ClockTime from './ClockTime'
import Clock from './Clock'
import { DesiredTimeRepresentation } from '../Classes/DesiredTimeRepresentation'
import { useTheme } from './ThemeProvider'

type Props = {
  estimatedTime: Time
  timePassedDoingTask: Time
  toggle: boolean
  clockRepresentation: DesiredTimeRepresentation
  onTaskComplete: () => void
  onTimerExpired: () => void
}

//Active timer can tick too quick (everytime it is re-rendered, it starts a new timer, and does not delete the other one)

const ActiveTimer = (props: Props) => {
  const countdownAmount = useRef<number>(0)
  const [updateTaskTime, setUpdateTaskTime] = useState<Time>(
    new Time(props.timePassedDoingTask.seconds)
  )

  function tickDown() {
    return new Time(props.estimatedTime.seconds - updateTaskTime.seconds)
  }

  useEffect(() => {
    clearInterval(countdownAmount.current)
    if (tickDown().seconds <= 0 && !props.toggle) {
      props.onTimerExpired()
      return
    }
    if (!props.toggle) {
      countdownAmount.current = window.setInterval(() => {
        setUpdateTaskTime((updateTaskTime) => {
          return updateTaskTime.tick()
        })
      }, 1000)
    }
  }, [props.toggle, countdownAmount.current])

  return (
    <>
      <Clock
        representedTime={tickDown()}
        timeRepresentation={props.clockRepresentation.value}
        clockBackgroundColor={useTheme().colors.background}
      />
      <>
        {/* <ClockTime time={tickDown()} /> */}
        <Button title="TaskCompleted" onPress={props.onTaskComplete} />
      </>
    </>
  )
}

const style = StyleSheet.create({
  Timer: {
    padding: 10,
    marginBottom: 10,
  },
  taskComplete: {
    padding: '2%',
    left: '50%',
    width: '50%',
  },
})

export default ActiveTimer
