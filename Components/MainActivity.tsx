import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View, ViewStyle } from 'react-native'
import TaskPanelEditor from './TaskPanelEditor'
import ActiveTaskPanel from './ActiveTaskPanel'
import ActiveTimer from './ActiveTimer'
import { Task } from '../types/Task'
import { SAMPLE_TASK_ARRAY } from '../types/TaskList'
import { useTheme } from './ThemeProvider'
import ThemeSwitch from '../theme/ThemeSwitch'

const MainActivity = () => {
  const [activeTask, setActiveTask] = useState<Task>(SAMPLE_TASK_ARRAY[0])
  const [isTimerPaused, setTimerPause] = useState<boolean>(true)
  const { colors } = useTheme()

  const styleApp: ViewStyle = {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  }

  function togglePause() {
    setTimerPause((isTimerPaused) => !isTimerPaused)
  }

  function completeActiveTask() {
    setTimerPause((isTimerPaused) => true)
    Alert.alert('Completed task!')
  }

  useEffect(() => {
    console.log(
      activeTask.title +
        '; ' +
        activeTask.estimatedTime.seconds +
        ' and time updated: ' +
        activeTask.updateQuantity
    )
  }, [activeTask])

  function timerHasExpiredAlert() {
    setTimerPause((isTimerPaused) => true)
    Alert.alert('Time Is Up', 'Do you need more time to complete the task?', [
      {
        text: 'Yes',
        onPress: () => {
          console.log('More Time needed')
          // activeTask.timePassed = activeTask.estimatedTime,
          // activeTask.updateQuantity++
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('complete')
          // activeTask.status = 'Completed'
          // activeTask.timePassed = activeTask.estimatedTime
        },
      },
    ])
  }

  return (
    <View style={styleApp}>
      <ActiveTaskPanel
        activeTask={activeTask}
        isPaused={isTimerPaused}
        onPauseEvent={togglePause}
      />
      <ActiveTimer
        estimatedTime={activeTask.estimatedTime}
        timePassedDoingTask={activeTask.timePassed}
        toggle={isTimerPaused}
        clockRepresentation={activeTask.desiredRepresentation}
        onTaskComplete={completeActiveTask}
        onTimerExpired={timerHasExpiredAlert}
      />

      <ThemeSwitch  />
      {/* <TaskPanelEditor /> */}
    </View>
  )
}

export default MainActivity
