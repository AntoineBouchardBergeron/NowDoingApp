import React, { useEffect } from "react";
import { Text, Button, View } from "react-native";
import PauseButton from "./PauseButton";
import { useTheme } from "../Providers/ThemeProvider";
import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";
import { useActiveActivity } from "../Providers/ActivityProvider";
import styles from "../Style/Styles";
import Container from "../Components/Container";
import { useTimer } from "../Providers/TimeProvider";

type Props = {
  onSelectActivityEvent: () => void;
};

const ActiveActivityPanel = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = Localization.locale;
  const { activity } = useActiveActivity();
  const { isTimerActive } = useTimer();

  const ShowSelectActivityPanel = () => {
    props.onSelectActivityEvent();
  };

  return (
    <Container>
      <Text style={styles().title}>{activity.title}</Text>
      <Text style={styles().basicText}>{activity.description}</Text>
      <View style={styles().ViewColumn}>
        <View style={styles().buttons}>
          <Button
            title={i18n.t("SelectActivity")}
            onPress={ShowSelectActivityPanel}
            disabled={isTimerActive}
          />
        </View>
        <View style={styles().buttons}>
          <PauseButton />
        </View>
      </View>
    </Container>
  );
};

export default ActiveActivityPanel;
