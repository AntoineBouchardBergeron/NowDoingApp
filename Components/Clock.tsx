import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Time } from '../Classes/Time'

type Props = {
  representedTime: Time
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
  const [radius, setRadius] = useState<number>(getRadius())
  const [clockColour, setClockColour] = useState<string>('#ff4500')
  const [activeTransform, setActiveTransform] = useState(getTransform(0))
  const [bRightColor, setbRightColor] = useState<string>('#fff')
  const [bBottomColor, setbBottomColor] = useState<string>('transparent')
  const [bottom, setBottom] = useState<string>('200%')
  const [left, setLeft] = useState<string>('50%')
  const [alpha, setAlpha] = useState<number>(
    props.representedTime.seconds / 3600
  )

  useEffect(() => {
    setActiveTransform((activeTransform) => {
      return getTransform(
        7 - Math.trunc((props.representedTime.seconds / 3600) * 8)
      )
    })
    setClockColour((color) => {
      return props.representedTime.seconds > 3600 ? '#4169e1' : '#ff4500'
    })
    setbRightColor((color) => {
      return Math.trunc((props.representedTime.seconds / 3600) * 8) % 2 === 1
        ? '#fff'
        : 'transparent'
    })
    setbBottomColor((color) => {
      return Math.trunc((props.representedTime.seconds / 3600) * 8) % 2 === 0
        ? '#fff'
        : 'transparent'
    })
    setBottom((bottom) => {
      return 0.25 < props.representedTime.seconds / 3600 &&
        props.representedTime.seconds / 3600 < 0.75
        ? '150%'
        : '200%'
    })
    setLeft((left) => {
      return 0.5 < props.representedTime.seconds / 3600 ? '50%' : '0%'
    })
    setAlpha((alpha) => {
      var a = (props.representedTime.seconds / 900) % 1
      return a % 1 > 0.5 ? (1 - a) * radius : a * radius
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
        Math.trunc((props.representedTime.seconds * 4) / 3600) >= 3
          ? 'transparent'
          : '#fff',
      height: '50%',
      width: '50%',
      bottom: '0%',
      left: '50%',
    },
    secondQuadrant: {
      backgroundColor:
        Math.trunc((props.representedTime.seconds * 4) / 3600) >= 2
          ? 'transparent'
          : '#fff',
      height: '50%',
      width: '50%',
      bottom: '0%',
      left: '50%',
    },
    thirdQuadrant: {
      backgroundColor:
        Math.trunc((props.representedTime.seconds * 4) / 3600) >= 1
          ? 'transparent'
          : '#fff',
      height: '50%',
      width: '50%',
      bottom: '50%',
    },
    forthQuadrant: {
      backgroundColor:
        Math.trunc((props.representedTime.seconds * 4) / 3600) >= 0
          ? 'transparent'
          : '#fff',
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
      <View style={[style.Triangle]} />
    </View>
  )
}

export default Clock
