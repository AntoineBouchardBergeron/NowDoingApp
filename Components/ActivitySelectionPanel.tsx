import React, { useEffect, useState } from "react";
import { Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import {
  SAMPLE_ACTIVITIES,
  SAMPLE_ACTIVITY_ARRAY,
} from "../Types/ActivityList";
import ActivityList from "./ActivityList";
import ActivityPreview from "./ActivityPreview";
import ActivityPanelEditor from "./ActivityPanelEditor";
import CustomView from "./CustomView";
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
  const [createNewActivity, setCreateNewActivity] = useState<boolean>(false);
  const { setActiveActivity } = useActiveActivity();
  const changeSelection = (index: number) => {
    setActiveActivity(SAMPLE_ACTIVITY_ARRAY[index - 1]);
  };

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  return (
    <View style={styles().SelectNewActivity}>
      <SafeAreaView>
        <ScrollView style={styles().scrollView}>
          {!updatePanel && (
            <>
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
              <CustomView>
                <Button
                  title={i18n.t("CreateNewActivity")}
                  onPress={() => props.onHideEvent()}
                />
                <Button
                  title={i18n.t("ModifyActivity")}
                  onPress={() => showUpdatePanel((updatePanel) => !updatePanel)}
                />
              </CustomView>
              {/* </View> */}

              <ActivityPreview />
              <Button
                title={i18n.t("close")}
                onPress={() => props.onHideEvent()}
              />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
      {updatePanel && (
        <View style={styles().onTopPanel}>
          <ActivityPanelEditor
            panelTitle={
              createNewActivity
                ? i18n.t("CreateNewActivity")
                : i18n.t("EditActivity")
            }
            onHideEvent={() => showUpdatePanel((updatePanel) => !updatePanel)}
          />
        </View>
      )}
    </View>
  );
};

export default ActivitySelectionPanel;
