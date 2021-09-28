import React, { useRef, useState, useEffect } from 'react'
import { Time } from '../Classes/Time'
import { View, Button } from 'react-native'
import Clock from './Clock'
import { useTheme } from './ThemeProvider'
import { useActiveActivity } from './ActivityProvider'
import styles from '../Style/Styles'

type Props = {
  toggle: boolean
  // onActivityComplete: () => void
  onTimerExpired: () => void
}

//Active timer can tick too quick (everytime it is re-rendered, it starts a new timer, and does not delete the other one)

const ActiveTimer = (props: Props) => {
  const { timePassed, estimatedTime, desiredRepresentation } =
    useActiveActivity()
  const countdownAmount = useRef<number>(0)
  const [updateActivityTime, setUpdateActivityTime] = useState<Time>(
    new Time(timePassed.seconds)
  )

  function tickDown() {
    return new Time(estimatedTime.seconds - updateActivityTime.seconds)
  }

  useEffect(() => {
    clearInterval(countdownAmount.current)
    if (tickDown().seconds <= 0 && !props.toggle) {
      props.onTimerExpired()
      return
    }
    if (!props.toggle) {
      countdownAmount.current = window.setInterval(() => {
        setUpdateActivityTime((updateActivityTime) => {
          return updateActivityTime.tick()
        })
      }, 1000)
    }
  }, [props.toggle, countdownAmount.current])

  return (
    <View style={styles().ActivityPanel}>
      <Clock
        representedTime={tickDown()}
        timeRepresentation={desiredRepresentation.value}
        clockBackgroundColor={useTheme().colors.secondaryBackground}
        clockColor={useTheme().colors.clockColors}
      />
      {/* <View style={styles().ActivityComplete}>
        <Button title="Activity Completed" onPress={props.onActivityComplete} />
      </View> */}
    </View>
  )
}

export default ActiveTimer
