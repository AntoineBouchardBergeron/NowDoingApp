import React, { ReactNode } from "react";
import { SafeAreaView, ScrollView, Text, Button, View } from "react-native";
import Container from "./Container";
import ActivityList from "./ActivityList";
import styles from "../Style/Styles";
import { useActiveActivity } from "./ActivityProvider";
import {
  SAMPLE_ACTIVITY_ARRAY,
  SAMPLE_ACTIVITIES,
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
    setActiveActivity(SAMPLE_ACTIVITY_ARRAY[index - 1]);
  };

  return (
    <Container>
      <Text style={styles().title}>{i18n.t("SelectActivity")}</Text>
      <ActivityList
        activities={SAMPLE_ACTIVITIES}
        onSelection={changeSelection}
      />

      {/* Whenever views are nested inside of a bool validation objet, 
            it crashes the view because of renders (when it's disabled, it tries
             to render it, but it's gone, so it says RENDER MOTHERFLIPPIN ERROR) 
             BUT CUSTOM VIEW WORKS?&?!?! (them caps are even bigger) */}

      {/* <View style={styles().ViewColumn}> */}
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
