import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import ActiveActivityPanel from "./ActiveActivityPanel";
import ActiveTimer from "./ActiveTimer";
import { useActiveActivity } from "./ActivityProvider";
import ActivitySelectionPanel from "./ActivitySelectionPanel";
import ActivityPanelEditor from "./ActivityPanelEditor";
import styles from "../Style/Styles";
import { BasicActivity } from "../Types/Activity";
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { fr, en } from "../i18n/translation";

type Props = {
  onTimerStart?: () => void;
  onTimerStop?: () => void;
};

const MainActivity = (props: Props) => {
  const { title, estimatedTime, updateQuantity, setActiveActivity } =
    useActiveActivity();
  const [isTimerPaused, setTimerPause] = useState<boolean>(true);

  const [showActivityPanelEditor, setShowActivityPanelEditor] =
    useState<boolean>(false);

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  function showActivityPanelEditorEvent() {
    setShowActivityPanelEditor((b) => !b);
  }

  function togglePause() {
    setTimerPause((isTimerPaused) => !isTimerPaused);
  }

  function completeActiveActivity() {
    setTimerPause((isTimerPaused) => true);
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
    setTimerPause((isTimerPaused) => true);
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
  }

  useEffect(() => {
    console.log(
      title +
        "; " +
        estimatedTime.seconds +
        " and time updated: " +
        updateQuantity
    );
    if (!isTimerPaused && props.onTimerStart) {
      props.onTimerStart();
    } else if (props.onTimerStop) {
      props.onTimerStop();
    }
  }, [isTimerPaused]);

  return (
    <>
      <View style={styles().mainActivity}>
        {!showActivityPanelEditor && (
          <ActiveActivityPanel
            isPaused={isTimerPaused}
            onPauseEvent={togglePause}
            onSelectActivityEvent={showActivityPanelEditorEvent}
            onTimerStopped={completeActiveActivity}
          />
        )}
        {!showActivityPanelEditor && (
          <ActiveTimer
            toggle={isTimerPaused}
            onTimerExpired={timerHasExpiredAlert}
          />
        )}
      </View>

      {showActivityPanelEditor && (
        <ActivitySelectionPanel onHideEvent={showActivityPanelEditorEvent} />
      )}
    </>
  );
};

export default MainActivity;
