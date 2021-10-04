import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import styles from "../Style/Styles";

type Props = {
  children: ReactNode;
};

const CustomView = (props: Props) => {
  return <View style={styles().ViewColumn}>{props.children}</View>;
};

export default CustomView;
