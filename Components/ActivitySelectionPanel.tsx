import React, { useEffect, useState } from "react";
import { Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import {
  SAMPLE_ACTIVITIES,
  SAMPLE_ACTIVITY_ARRAY,
} from "../Types/ActivityList";
import ActivityList from "./ActivityList";
import ActivityPreview from "./ActivityPreview";
import ActivityPanelEditor from "./ActivityPanelEditor";
import { useActiveActivity } from "./ActivityProvider";
import styles from "../Style/Styles";
import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";

type Props = {
  onHideEvent: () => void;
};

const ActivitySelectionPanel = (props: Props) => {
  const [updatePanel, showUpdatePanel] = useState<boolean>(false);
  const { setActiveActivity } = useActiveActivity();
  const changeSelection = (index: number) => {
    setActiveActivity(SAMPLE_ACTIVITY_ARRAY[index - 1]);
  };

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  return (
    <View style={styles().onTopPanel}>
      <Text style={styles().title}>{i18n.t("SelectActivity")}</Text>
      <SafeAreaView>
        {!updatePanel && (
          <ScrollView style={styles().scrollView}>
            <ActivityList
              activities={SAMPLE_ACTIVITIES}
              onSelection={changeSelection}
            />
            <Button
              title={i18n.t("ModifyActivity")}
              onPress={() => showUpdatePanel((updatePanel) => !updatePanel)}
            />
            <ActivityPreview />
            <Button
              title={i18n.t("close")}
              onPress={() => props.onHideEvent()}
            />
          </ScrollView>
        )}
        {updatePanel && (
          <ActivityPanelEditor
            onHideEvent={() => showUpdatePanel((updatePanel) => !updatePanel)}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default ActivitySelectionPanel;
