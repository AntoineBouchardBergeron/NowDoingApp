import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { Time } from "../Classes/Time";
import styles from "../Style/Styles";
import { useActiveActivity } from "./ActivityProvider";
import { useTheme } from "./ThemeProvider";

import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";
import Clock from "./Clock";
import ClockTime from "./ClockTime";

const ActivityPreview = () => {
  //returns ActivityTitle/name Description
  //Timeestimated, timePassedOnActivity, amountTimeAddedTime
  // isActivityReccuring? (as if it was saved as a template)
  // Clock reprensetation of timeEstimated and TimePassedOnActivity

  const { description, estimatedTime, desiredRepresentation, timePassed } =
    useActiveActivity();

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  return (
    <>
      <View>
        <Text style={styles().titleTextView}>{i18n.t("TitleActivityPreview")}</Text>
      </View>
      <View style={styles().ActivityPreview}>
        <Text style={styles().basicText}>{description}</Text>
        <View style={{}}>
          <View style={{ flexWrap: "nowrap", flexDirection: "row" }}>
            <Text style={styles().basicText}>{i18n.t("TimeEstimate")}</Text>
            <ClockTime time={estimatedTime} />
          </View>
          <View style={{ flexWrap: "nowrap", flexDirection: "row" }}>
            <Text style={styles().basicText}>{i18n.t("TimePassed")}</Text>
            <ClockTime time={timePassed} />
          </View>
          <View>
            <Text style={styles().title}>{i18n.t("TimeLeftClock")}</Text>
            <Clock
              representedTime={Time.timeDifference(estimatedTime, timePassed)}
              timeRepresentation={desiredRepresentation.value}
              clockBackgroundColor={styles().ActivityPreview.backgroundColor}
              clockColor={useTheme().colors.clockColors}
              sizeFactor={0.8}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ActivityPreview;
