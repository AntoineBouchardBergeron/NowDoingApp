import React from 'react'
import { Text } from 'react-native'
import { Time } from '../Classes/Time'

type Props = {
  time: Time
}

const ClockTime = (props: Props) => {
  // if(props)
  return (
    <Text>
      time left:
      {' ' + props.time.hours}:
      {props.time.minutes < 10 ? '0' + props.time.minutes : props.time.minutes}
    </Text>
  )
}

export default ClockTime
