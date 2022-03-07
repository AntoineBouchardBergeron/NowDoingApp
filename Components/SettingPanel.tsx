import React, { useEffect, useState, useRef } from "react";
import { View, Animated } from "react-native";
import ThemeSwitch from "../Theme/ThemeSwitch";
import SlidePanel from "../Components/SlidePanel";
import styles from "../Style/Styles";
import { useTimer } from "../Providers/TimeProvider";

const SettingPanel = () => {
  const { isTimerActive } = useTimer();
  const [expandPanel, setExpandPanel] = useState<boolean>(true);
  const animation = useRef(new Animated.Value(0)).current;

  const ShowButton = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const HideButton = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    console.log("This goes with: " + isTimerActive);
    if (!isTimerActive) {
      ShowButton();
    } else {
      HideButton();
    }
  }, [isTimerActive]);

  return (
    <Animated.View
      style={{
        alignItems: "baseline",
        height: !expandPanel ? 40 :"100%",
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [-50, 0],
            }),
          },
        ],
      }}
    >
      <SlidePanel
        panelWidth={260}
        isExpanded={(expansion) => {
          setExpandPanel(expansion);
        }}
      >
        {!isTimerActive && expandPanel && <ThemeSwitch />}
        {/* <StatsPanel /> 
          <UserAccountSettings />
          <PremiumOptions />
          <OtherOptions />
          <GraphicOptions/>
          <SmoothOutTimer (ticks or no ticks)>
          <SoundOption /> 
          <LegalThings /> */}
      </SlidePanel>
    </Animated.View>
  );
};

export default SettingPanel;
