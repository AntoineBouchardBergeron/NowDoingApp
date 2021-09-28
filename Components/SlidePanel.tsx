import React, { ReactNode, useEffect, useState, useRef, Children } from 'react'
import { Image, Pressable, Animated, ScrollView } from 'react-native'
import styles from '../Style/Styles'
import { useTheme } from './ThemeProvider'
// import Menu from '../assets/menu.svg'

type Props = {
  children: ReactNode
  panelWidth: number | 250
}

const SlidePanel = (props: Props) => {
  const [isShown, setShown] = useState<boolean>(false)
  const [isAnimating, setAnimate] = useState<boolean>(false)
  const { colors } = useTheme()
  const animation = useRef(new Animated.Value(0)).current

  const slideIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start()
  }

  const slideOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
    }).start(() => {
      setShown(false)
    })
  }

  useEffect(() => {
    animation.stopAnimation()
    if (isAnimating) {
      slideIn()
      setShown(true)
    } else {
      slideOut()
    }
  }, [isAnimating])

  return (
    <Animated.ScrollView
      style={
        styles().slidingPanel && {
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-props.panelWidth, 0],
              }),
            },
          ],
        }
      }
    >
      <ScrollView style={styles().slidingPanel}>
        <Pressable
          onPress={() => {
            setAnimate((isAnimating) => !isAnimating)
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              transform: [{ translateX: 250 }],
            }}
            source={require('../assets/icon.png')}
          />
          {/* <Menu width={50} height={50} /> */}
        </Pressable>
        {isShown && props.children}
      </ScrollView>
    </Animated.ScrollView>
  )
}

export default SlidePanel
