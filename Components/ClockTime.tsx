import React from "react";
import { Text } from "react-native";
import { Time } from "../Classes/Time";
import styles from "../Style/Styles";

type Props = {
  time: Time;
};

const ClockTime = (props: Props) => {
  return (
    <Text style={styles().basicText}>
      {" " + props.time.hours}:
      {props.time.minutes < 10 ? "0" + props.time.minutes : props.time.minutes}
    </Text>
  );
};

export default ClockTime;
