import React, { ReactNode } from "react";
import { View, ViewStyle, StyleProp } from "react-native";
import styles from "../Style/Styles";

type Props = {
  children: ReactNode;
  styling?: StyleProp<ViewStyle>;
};

const Container = (props: Props) => {
  return (
    <View style={props.styling ? props.styling : styles().Container}>
      {props.children}
    </View>
  );
};

export default Container;
