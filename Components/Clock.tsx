import React, { useState, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";
import { Time } from "../Classes/Time";
import { useActiveActivity } from "./ActivityProvider";
import { useTheme } from "./ThemeProvider";

type Props = {
  representedTime?: Time;
  timeRepresentation?: number;
  clockBackgroundColor?: string;
  clockColor?: string[];
  sizeFactor?: number;
};

const TimeConfiguration: number[] = [900, 3600, 14400];

const getTotalTime = (index: number) => {
  if (index < 0 || index > TimeConfiguration.length)
    return TimeConfiguration[
      DesiredTimeRepresentation.defaultTimeConfigurationValue
    ];
  return TimeConfiguration[index];
};

const getColorConfiguration = (clockColor: string[], index: number) => {
  if (index < 0 || index > clockColor.length)
    return clockColor[DesiredTimeRepresentation.defaultTimeConfigurationValue];
  return clockColor[index];
};

const getRadius = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const min = Math.min(width, height);
  return min * 0.8;
};

const getQuadrant = (representedSeconds: number, timeEstimated: number) => {
  return Math.trunc((8 * representedSeconds) / getTotalTime(timeEstimated));
};

const transforms = [
  [{ scaleX: -1 }],
  [{ rotate: "90deg" }],
  [{ scaleY: -1 }, { rotate: "90deg" }],
  [{ rotate: "180deg" }],
  [{ scaleY: -1 }],
  [{ rotate: "270deg" }],
  [{ scaleX: -1 }, { rotate: "90deg" }],
  [{ scaleX: 1 }],
];

const getTransform = (position: number) => {
  return transforms[position];
};

const Clock = (props: Props) => {
  const { timePassed, estimatedTime, desiredRepresentation } =
    useActiveActivity();

  const { colors } = useTheme();
  const [sizeFactor, setSizeFactor] = useState<number>(() =>
    props.sizeFactor ? props.sizeFactor : 1
  );
  const [radius, setRadius] = useState<number>(getRadius());

  const [representedSeconds, setRepresentedSeconds] = useState<number>(
    props.representedTime
      ? props.representedTime.seconds
      : Time.timeDifference(estimatedTime, timePassed).seconds
  );
  const [timeEstimated, setTimeEstimated] = useState<number>(
    props.timeRepresentation
      ? props.timeRepresentation
      : desiredRepresentation.value
  );
  const [alpha, setAlpha] = useState<number>(
    representedSeconds / getTotalTime(timeEstimated)
  );
  const [clockColour, setClockColour] = useState<string>(
    getColorConfiguration(
      props.clockColor ? props.clockColor : colors.clockColors,
      props.timeRepresentation
        ? props.timeRepresentation
        : desiredRepresentation.value
    )
  );
  const [backgroundClockColor, setBackgroundClockColor] = useState<string>(
    props.clockBackgroundColor ? props.clockBackgroundColor : colors.background
  );
  const [activeTransform, setActiveTransform] = useState(getTransform(0));
  const [bRightColor, setbRightColor] = useState<string>(backgroundClockColor);
  const [bBottomColor, setbBottomColor] = useState<string>("transparent");
  const [bottom, setBottom] = useState<string>("200%");
  const [left, setLeft] = useState<string>("50%");

  // ALL OF THIS HAPPENS AFTER RENDER, therefore, it's no good :)

  useEffect(() => {
    setRepresentedSeconds((representedSeconds) => {
      return props.representedTime
        ? props.representedTime.seconds
        : Time.timeDifference(estimatedTime, timePassed).seconds;
    });
    setTimeEstimated((timeEstimated) =>
      props.timeRepresentation
        ? props.timeRepresentation
        : desiredRepresentation.value
    );
    setClockColour((clockColour) => {
      return getColorConfiguration(
        props.clockColor ? props.clockColor : colors.clockColors,
        props.timeRepresentation
          ? props.timeRepresentation
          : desiredRepresentation.value
      );
    });
    setBackgroundClockColor((clockBackgroundColor) =>
      props.clockBackgroundColor
        ? props.clockBackgroundColor
        : colors.background
    );

    setActiveTransform((activeTransform) => {
      return getTransform(
        7 - Math.trunc((representedSeconds / getTotalTime(timeEstimated)) * 8)
      );
    });
    setbRightColor((color) => {
      return getQuadrant(representedSeconds, timeEstimated) % 2 === 1
        ? backgroundClockColor
        : "transparent";
    });
    setbBottomColor((color) => {
      return getQuadrant(representedSeconds, timeEstimated) % 2 === 0
        ? backgroundClockColor
        : "transparent";
    });
    setBottom((bottom) => {
      return 0.25 <= representedSeconds / getTotalTime(timeEstimated) &&
        representedSeconds / getTotalTime(timeEstimated) < 0.75
        ? "150%"
        : "200%";
    });
    setLeft((left) => {
      return 0.5 < (representedSeconds + 1) / getTotalTime(timeEstimated)
        ? "50%"
        : "0%";
    });
    setAlpha((alpha) => {
      var a = (representedSeconds / (getTotalTime(timeEstimated) * 0.25)) % 1;
      return a > 0.5 ? (1 - a) * radius : a * radius;
    });
  });

  const style = StyleSheet.create({
    clock: {
      alignContent: "center",
      backgroundColor: clockColour,
      height: radius,
      width: radius,
      borderRadius: radius / 2,
      transform: [{ scale: sizeFactor }],
    },
    firstQuadrant: {
      backgroundColor:
        Math.trunc((representedSeconds * 4) / getTotalTime(timeEstimated)) >= 3
          ? "transparent"
          : backgroundClockColor,
      height: "50%",
      width: "50%",
      bottom: "0%",
      left: "50%",
    },
    secondQuadrant: {
      backgroundColor:
        Math.trunc((representedSeconds * 4) / getTotalTime(timeEstimated)) >= 2
          ? "transparent"
          : backgroundClockColor,
      height: "50%",
      width: "50%",
      bottom: "0%",
      left: "50%",
    },
    thirdQuadrant: {
      backgroundColor:
        Math.trunc((representedSeconds * 4) / getTotalTime(timeEstimated)) >= 1
          ? "transparent"
          : backgroundClockColor,
      height: "50%",
      width: "50%",
      bottom: "50%",
    },
    forthQuadrant: {
      backgroundColor:
        Math.trunc((representedSeconds * 4) / getTotalTime(timeEstimated)) >= 0
          ? "transparent"
          : backgroundClockColor,
      height: "50%",
      width: "50%",
      bottom: "150%",
    },
    Triangle: {
      width: "50%",
      height: "50%",
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderRightWidth: alpha,
      borderBottomWidth: radius / 2,
      transform: activeTransform,
      borderRightColor: bRightColor,
      borderBottomColor: bBottomColor,
      bottom: bottom,
      left: left,
    },
  });

  return (
    <View style={style.clock}>
      <View style={style.firstQuadrant} />
      <View style={style.secondQuadrant} />
      <View style={style.thirdQuadrant} />
      <View style={style.forthQuadrant} />
      <View style={style.Triangle} />
    </View>
  );
};

export default Clock;
