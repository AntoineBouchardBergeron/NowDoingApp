import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import styles from "../Style/Styles";
import { Activity } from "../Types/Activity";

type Props = {
  activity: Activity;
  isSelected: boolean;
  onPress: () => void;
};

const ActivityItem = (props: Props) => {

  return (
    <Text
      style={props.isSelected ? styles().selected : styles().basicText}
      onPress={() => {
        props.onPress();
      }}
    >
      {props.activity.title}
    </Text>
  );
};

export default ActivityItem;
