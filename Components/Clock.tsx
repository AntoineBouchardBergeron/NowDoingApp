import React, { useState, useEffect } from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import { DesiredTimeRepresentation } from '../Classes/DesiredTimeRepresentation'
import { Time } from '../Classes/Time'

type Props = {
  representedTime: Time
  timeRepresentation: number
  clockBackgroundColor: string
}


const TimeConfiguration: number[] = [900, 3600, 14400]
const ColorConfiguration: string[] = ['#f08080', '#ffa07a', '#ff7f50']

const getTotalTime = (index: number) => {
  if (index < 0 || index > TimeConfiguration.length)
    return TimeConfiguration[DesiredTimeRepresentation.defaultTimeConfigurationValue]
  return TimeConfiguration[index]
}

const getColorConfiguration = (index: number) => {
  if (index < 0 || index > ColorConfiguration.length)
    return ColorConfiguration[DesiredTimeRepresentation.defaultTimeConfigurationValue]
  return ColorConfiguration[index]
}

const getRadius = () => {
  const width = useWindowDimensions().width
  const height = useWindowDimensions().height
  const min = Math.min(width, height)
  return min * 0.8
}

const getTransform = (position: number) => {
  return transforms[position]
}

const transforms = [
  [{ scaleX: -1 }],
  [{ rotate: '90deg' }],
  [{ scaleY: -1 }, { rotate: '90deg' }],
  [{ rotate: '180deg' }],
  [{ scaleY: -1 }],
  [{ rotate: '270deg' }],
  [{ scaleX: -1 }, { rotate: '90deg' }],
  [{ scaleX: 1 }],
]

const Clock = (props: Props) => {
  // TODO: Check props.timeRepresenation < props.representedTime.seconds

  const [radius, setRadius] = useState<number>(getRadius())
  const [clockColour, setClockColour] = useState<string>(
    getColorConfiguration(props.timeRepresentation)
  )
  const [activeTransform, setActiveTransform] = useState(getTransform(0))
  const [bRightColor, setbRightColor] = useState<string>(props.clockBackgroundColor)
  const [bBottomColor, setbBottomColor] = useState<string>('transparent')
  const [bottom, setBottom] = useState<string>('200%')
  const [left, setLeft] = useState<string>('50%')
  const [alpha, setAlpha] = useState<number>(
    props.representedTime.seconds / getTotalTime(props.timeRepresentation)
  )

  useEffect(() => {
    setActiveTransform((activeTransform) => {
      return getTransform(
        7 -
          Math.trunc(
            (props.representedTime.seconds /
              getTotalTime(props.timeRepresentation)) *
              8
          )
      )
    })
    setClockColour((color) => {
      return getColorConfiguration(props.timeRepresentation)
    })
    setbRightColor((color) => {
      return Math.trunc(
        (props.representedTime.seconds /
          getTotalTime(props.timeRepresentation)) *
          8
      ) %
        2 ===
        1
        ? props.clockBackgroundColor
        : 'transparent'
    })
    setbBottomColor((color) => {
      return Math.trunc(
        (props.representedTime.seconds /
          getTotalTime(props.timeRepresentation)) *
          8
      ) %
        2 ===
        0
        ? props.clockBackgroundColor
        : 'transparent'
    })
    setBottom((bottom) => {
      return 0.25 <=
        props.representedTime.seconds /
          getTotalTime(props.timeRepresentation) &&
        props.representedTime.seconds / getTotalTime(props.timeRepresentation) <
          0.75
        ? '150%'
        : '200%'
    })
    setLeft((left) => {
      return 0.5 <
        (props.representedTime.seconds + 1) /
          getTotalTime(props.timeRepresentation)
        ? '50%'
        : '0%'
    })
    setAlpha((alpha) => {
      var a =
        (props.representedTime.seconds /
          (getTotalTime(props.timeRepresentation) * 0.25)) %
        1
      return a > 0.5 ? (1 - a) * radius : a * radius
    })
  }, [props.representedTime])

  const style = StyleSheet.create({
    clock: {
      backgroundColor: clockColour,
      height: radius,
      width: radius,
      borderRadius: radius / 2,
    },
    firstQuadrant: {
      backgroundColor:
        Math.trunc(
          (props.representedTime.seconds * 4) /
            getTotalTime(props.timeRepresentation)
        ) >= 3
          ? 'transparent'
          : props.clockBackgroundColor,
      height: '50%',
      width: '50%',
      bottom: '0%',
      left: '50%',
    },
    secondQuadrant: {
      backgroundColor:
        Math.trunc(
          (props.representedTime.seconds * 4) /
            getTotalTime(props.timeRepresentation)
        ) >= 2
          ? 'transparent'
          : props.clockBackgroundColor,
      height: '50%',
      width: '50%',
      bottom: '0%',
      left: '50%',
    },
    thirdQuadrant: {
      backgroundColor:
        Math.trunc(
          (props.representedTime.seconds * 4) /
            getTotalTime(props.timeRepresentation)
        ) >= 1
          ? 'transparent'
          : props.clockBackgroundColor,
      height: '50%',
      width: '50%',
      bottom: '50%',
    },
    forthQuadrant: {
      backgroundColor:
        Math.trunc(
          (props.representedTime.seconds * 4) /
            getTotalTime(props.timeRepresentation)
        ) >= 0
          ? 'transparent'
          : props.clockBackgroundColor,
      height: '50%',
      width: '50%',
      bottom: '150%',
    },
    Triangle: {
      width: '50%',
      height: '50%',
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: alpha,
      borderBottomWidth: radius / 2,
      transform: activeTransform,
      borderRightColor: bRightColor,
      borderBottomColor: bBottomColor,
      bottom: bottom,
      left: left,
    },
  })

  return (
    <View style={style.clock}>
      <View style={style.firstQuadrant} />
      <View style={style.secondQuadrant} />
      <View style={style.thirdQuadrant} />
      <View style={style.forthQuadrant} />
      <View style={style.Triangle} />
    </View>
  )
}

export default Clock
