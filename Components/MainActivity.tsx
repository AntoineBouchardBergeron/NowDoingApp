import React, { useEffect, useState } from "react";
import { Alert, Vibration, View } from "react-native";
import ActiveActivityPanel from "./ActiveActivityPanel";
import ActiveTimer from "./ActiveTimer";
import { useActiveActivity } from "../Providers/ActivityProvider";
import ActivitySelectionPanel from "./ActivitySelectionPanel";
import ActivityPanelEditor from "./ActivityPanelEditor";
import styles from "../Style/Styles";
import { BasicActivity } from "../Classes/Activity";
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { fr, en } from "../i18n/translation";
import { useTimer } from "../Providers/TimeProvider";
import { Time } from "../Classes/Time";

type Props = {
  onTimerStart?: () => void;
  onTimerStop?: () => void;
};

const MainActivity = (props: Props) => {
  const { activity, setActiveActivity } =
    useActiveActivity();
  const { isTimerActive, activateTimer } = useTimer();

  const [showActivityPanelEditor, setShowActivityPanelEditor] =
    useState<boolean>(false);

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  function showActivityPanelEditorEvent() {
    setShowActivityPanelEditor((b) => !b);
  }

  function completeActiveActivity() {
    activateTimer(false);
    Alert.alert(i18n.t("ActivityFinishedQuestion"), "", [
      {
        text: i18n.t("y"),
        onPress: () => {
          console.log("activity is finished!");
          setActiveActivity(BasicActivity);
        },
      },
      {
        text: i18n.t("n"),
        onPress: () => {
          console.log("Darn, not done eh?");
        },
      },
    ]);
  }

  function timerHasExpiredAlert() {
    activateTimer(false);
    Alert.alert(
      i18n.t("ActivityFinishedQuestion"),
      i18n.t("MoreTimeToCompleteQuestion"),
      [
        {
          text: i18n.t("y"),
          onPress: () => {
            console.log("More Time needed");
          },
        },
        {
          text: i18n.t("n"),
          onPress: () => {
            console.log("complete");
          },
        },
      ]
    );
    Vibration.vibrate(1500);
  }

  return (
    <>
      <View style={styles().mainActivity}>
        {!showActivityPanelEditor && (
          <ActiveActivityPanel
            onSelectActivityEvent={showActivityPanelEditorEvent}
          />
        )}

        {!showActivityPanelEditor && (
          <ActiveTimer onTimerExpired={timerHasExpiredAlert} />
        )}
        {showActivityPanelEditor && (
          <ActivitySelectionPanel onHideEvent={showActivityPanelEditorEvent} />
        )}
      </View>
    </>
  );
};

export default MainActivity;
