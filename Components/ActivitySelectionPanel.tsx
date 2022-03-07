import React, { useEffect, useState } from "react";
import { Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import ActivityList from "./ActivityList";
import ActivityPreview from "./ActivityPreview";
import ActivityPanelEditor from "./ActivityPanelEditor";
import CustomView from "./CustomView";
import { useActiveActivity } from "../Providers/ActivityProvider";
import styles from "../Style/Styles";
import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";
import Container from "./Container";
import ActivityListSelectorPanel from "./ActivityListSelectorPanel";

type Props = {
  onHideEvent: () => void;
};

const ActivitySelectionPanel = (props: Props) => {
  const [updatePanel, showUpdatePanel] = useState<boolean>(false);
  const [createNewActivity, setCreateNewActivity] = useState<boolean>(false);
  const { setActiveActivity, activities } = useActiveActivity();
  const changeSelection = (index: number) => {
    setActiveActivity(activities[index - 1]);
  };

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  return (
    <>
      {!updatePanel && (
        <ActivityListSelectorPanel
          showCreatePanel={() => {
            showUpdatePanel((updatePanel) => !updatePanel);
            setCreateNewActivity(true);
          }}
          showUpdatePanel={() => {
            showUpdatePanel((updatePanel) => !updatePanel);
            setCreateNewActivity(false);
          }}
        />
      )}
      {!updatePanel && <ActivityPreview onSelectEvent={props.onHideEvent} />}

      {updatePanel && (
        <ActivityPanelEditor
          panelTitle={
            createNewActivity
              ? i18n.t("CreateNewActivity")
              : i18n.t("EditActivity")
          }
          editActivity={createNewActivity}
          onHideEvent={() => showUpdatePanel((updatePanel) => !updatePanel)}
        />
      )}
    </>
  );
};

export default ActivitySelectionPanel;
