import React, { ReactNode } from "react";
import { View, Text } from "react-native";
// import { Activity } from "../Types/Activity";
import styles from "../Style/Styles";
import { useActiveActivity } from "./ActivityProvider";

import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";

type Props = {
  children?: ReactNode;
};

const ActivityPreview = (props: Props) => {
  //returns ActivityTitle/name Description
  //Timeestimated, timePassedOnActivity, amountTimeAddedTime
  // isActivityReccuring? (as if it was saved as a template)
  // Clock reprensetation of timeEstimated and TimePassedOnActivity

  const { description } = useActiveActivity();

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  return (
    <View style={{ padding: 10 }}>
      <Text>{i18n.t("TitleActivityPreview")}</Text>
      <Text>{description}</Text>
      <>{props.children}</>
    </View>
  );
};

export default ActivityPreview;
