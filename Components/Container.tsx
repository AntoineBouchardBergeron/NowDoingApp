import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "../Style/Styles";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  return <View style={styles().ActivityPanel}>{props.children}</View>;
};

export default Container;
