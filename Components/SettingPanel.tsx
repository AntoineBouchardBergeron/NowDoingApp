import React, { useEffect, useState, useRef } from 'react'
import { View, Animated } from 'react-native'
import ThemeSwitch from '../Theme/ThemeSwitch'
import SlidePanel from '../Components/SlidePanel'
import styles from '../Style/Styles'

type Props = { isActive: boolean }

const SettingPanel = (props: Props) => {
  const [isShown, setShown] = useState<boolean>(false)
  const animation = useRef(new Animated.Value(0)).current

  const slideIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start()
  }

  const slideOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => setShown(false))
  }

  useEffect(() => {
    if (props.isActive) {
      setShown(true)
      slideIn()
    } else {
      slideOut()
    }
  }, [props.isActive])

  return (
    <Animated.View
      style={
        styles().settingsPanel && {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            },
          ],
        }
      }
    >
      <SlidePanel panelWidth={250}>
        {isShown && <ThemeSwitch />}

        <ThemeSwitch />
        <ThemeSwitch />
        <ThemeSwitch />
        {/* <StatsPanel />*/}
        {/* <UserMamangeent />
          <OtherOptions />
          <GraphicOptions/>
          <SoundOption /> */}
      </SlidePanel>
    </Animated.View>
  )
}

export default SettingPanel
