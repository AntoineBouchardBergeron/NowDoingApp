import React, { useEffect, useState, useRef } from "react";
import { View, Animated } from "react-native";
import ThemeSwitch from "../Theme/ThemeSwitch";
import SlidePanel from "../Components/SlidePanel";
import styles from "../Style/Styles";

type Props = { isActive: boolean };

const SettingPanel = (props: Props) => {
  const [isShowingPanel, setShowingPanel] = useState<boolean>(props.isActive);
  const animation = useRef(new Animated.Value(0)).current;

  const slideIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => setShowingPanel(false));
  };

  useEffect(() => {
    if (props.isActive) {
      slideIn();
      setShowingPanel(true);
    } else {
      slideOut();
    }
  }, [props.isActive]);

  return (
    <Animated.View
      style={{
        alignItems: "baseline",
        height: !isShowingPanel && props.isActive ? "100%" : 40,
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
        showPanel={(b: boolean) => setShowingPanel(b)}
      >
        {props.isActive && <ThemeSwitch />}
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
