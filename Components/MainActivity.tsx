import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Time } from '../Classes/Time'

import { TimerProps } from '../types/Time'
import ActiveTaskPanel from './ActiveTaskPanel'
import ActiveTimer from './ActiveTimer'
import { Task } from '../types/Task'
import { SAMPLE_TASK_ARRAY } from '../types/TaskList'

const timeTemp: TimerProps = {
  estimatedTime: new Time(4500),
  timePassedDoingTask: new Time(500),
}

const MainActivity = () => {
  const [activeTask, setActiveTask] = useState<Task>(SAMPLE_TASK_ARRAY[0])
  const [isTimerPaused, setTimerPause] = useState<boolean>(true)

  function togglePause() {
    setTimerPause((isTimerPaused) => !isTimerPaused)
  }

  function completeActiveTask () {
    console.log("Completed task!")
  }

  return (
    <View style={styles.container}>
      <ActiveTaskPanel
        activeTask={activeTask}
        isPaused={isTimerPaused}
        onPauseEvent={togglePause}
      />
      <ActiveTimer
        estimatedTime={activeTask.estimatedTime}
        timePassedDoingTask={activeTask.timePassed}
        toggle={isTimerPaused}
        onTaskComplete={completeActiveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccf',
    flex: 1,
    justifyContent: 'center',
  },
})

export default MainActivity
