import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, ViewStyle } from 'react-native'
import { Task } from '../Types/Task'
import ClockTime from './ClockTime'
import PauseButton from './PauseButton'
import { useTheme } from './ThemeProvider'

type Props = {
  activeTask: Task | undefined
  isPaused: boolean
  onPauseEvent: () => void
}

const ActiveTaskPanel = (props: Props) => {
  const { colors } = useTheme()
  function TogglePause() {
    props.onPauseEvent()
  }

  function isTaskSet() {
    if (props.activeTask !== undefined) {
      // return <ClockTime time={props.activeTask.estimatedTime} />
    }
  }

  const style = StyleSheet.create({
    // ActiveTaskPanel: {
    //   // backgroundColor: '#333',
    //   borderRadius: 10,
    //   padding: 10,
    // },
    title: {
      color: colors.text,
      padding: 2,
      margin: 2,
      fontSize: 22,
    },
    text: {
      color: colors.text,
      padding: 2,
      margin: 2,
      marginBottom: 10,
      fontSize: 12,
    },
  })

  useEffect(() => {}, [props.isPaused])

  return (
    <>
      <Text style={style.title}>{props.activeTask?.title}</Text>
      <Text style={style.text}>{props.activeTask?.description}</Text>
      {/* {isTaskSet()} */}
      <PauseButton onPauseEvent={TogglePause} isPaused={props.isPaused} />
    </>
  )
}

export default ActiveTaskPanel
