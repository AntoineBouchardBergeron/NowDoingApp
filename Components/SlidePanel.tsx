import React, { ReactNode, useEffect, useState, useRef, Children } from "react";
import { Image, Pressable, Animated, ScrollView } from "react-native";
import { Svg, Line, Rect } from "react-native-svg";
import styles from "../Style/Styles";
import { useTheme } from "./ThemeProvider";
import Menu from "../assets/menu.svg";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { translate } from "i18n-js";
import { useActiveActivity } from "./ActivityProvider";

type Props = {
  children: ReactNode;
  svgIcon?: () => Svg
  panelWidth: number | 250;
};

const SlidePanel = (props: Props) => {
  const [isShown, setShown] = useState<boolean>(false);
  const [isAnimating, setAnimate] = useState<boolean>(false);
  const { colors } = useTheme();
  const animation = useRef(new Animated.Value(0)).current;

  const slideIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
    }).start(() => {
      setShown(false);
    });
  };

  useEffect(() => {
    animation.stopAnimation();
    if (isAnimating) {
      slideIn();
      setShown(true);
    } else {
      slideOut();
    }
  }, [isAnimating]);

  const basicMenu = () => {
    return (
      <Svg
        x="300"
        width="40"
        height="40"
        viewBox="0 0 25 25"
        fill={colors.clockColors[useActiveActivity().id-1]}
        stroke={colors.clockColors[useActiveActivity().id-1]}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <Rect x="3" y="12" height="1" width="18" rx="1" ry="1"></Rect>
        <Rect x="3" y="6" height="1" width="18" rx="1" ry="1"></Rect>
        <Rect x="3" y="18" height="1" width="18" rx="1" ry="1"></Rect>
      </Svg>
    );
  };

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
        style={{
          transform:[{ translateX: 260 }]}}
          onPress={() => {
            setAnimate((isAnimating) => !isAnimating);
          }}
        >
          {props.svgIcon? props.svgIcon() : basicMenu()}
          {/* <Menu width={24} height={24} /> */}
        </Pressable>
        {isShown && props.children}
      </ScrollView>
    </Animated.ScrollView>
  );
};

export default SlidePanel;
