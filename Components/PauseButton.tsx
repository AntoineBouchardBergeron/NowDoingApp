import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";
import { TimerDefault, useTimer } from "../Providers/TimeProvider";
import { Time } from "../Classes/Time";

const PauseButton = () => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = Localization.locale;

  const { isTimerActive, activateTimer } = useTimer();

  return (
    <Button
      title={isTimerActive ? i18n.t("StopTimer") : i18n.t("StartTimer")}
      onPress={() => {
        console.log(isTimerActive);
        activateTimer(!isTimerActive);
      }}
    />
  );
};

export default PauseButton;
