import React, { ReactNode } from "react";
import { SafeAreaView, useWindowDimensions, Text, Button, View } from "react-native";
import Container from "./Container";
import ActivityList from "./ActivityList";
import styles from "../Style/Styles";
import { useActiveActivity } from "./ActivityProvider";
import {
  SAMPLE_ACTIVITY_ARRAY,
  SAMPLE_ACTIVITIES,
  SAMPLE_LOTS_ACTIVITIES,
} from "../Types/ActivityList";
import CustomView from "./CustomView";

import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as localization from "expo-localization";

type Props = {
  onHideEvent: () => void;
  showUpdatePanel: () => void;
};

const ActivityListSelectorPanel = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = localization.locale;

  const { setActiveActivity } = useActiveActivity();
  const changeSelection = (index: number) => {
    setActiveActivity(SAMPLE_LOTS_ACTIVITIES.activities[index - 1]);
  };

  const maxWidth = useWindowDimensions().width;
  const maxHeight = useWindowDimensions().height;
  const minVal = maxHeight < maxWidth ? maxHeight : maxWidth;

  return (
    <Container styling={[styles().Container, { height: minVal == maxWidth ? maxHeight * 0.40 : maxHeight * 0.9 }]}>
      <Text style={styles().title}>{i18n.t("SelectActivity")}</Text>
      <ActivityList
        activities={SAMPLE_LOTS_ACTIVITIES}
        onSelection={changeSelection}
      />

      <View style={styles().ViewRow}>
        <Button
          title={i18n.t("CreateNewActivity")}
          onPress={() => props.onHideEvent()}
        />
        <Button
          title={i18n.t("ModifyActivity")}
          onPress={() => props.showUpdatePanel()}
        />
      </View>
    </Container>
  );
};

export default ActivityListSelectorPanel;
