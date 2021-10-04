import React from "react";
import { Button, View, Text } from "react-native";
import { useTheme } from "./ThemeProvider";
import i18n from "i18n-js";
import { en, fr } from "../i18n/translation";
import * as localization from "expo-localization";
import TextInput from "./TextInput";
import { useActiveActivity } from "./ActivityProvider";
import styles from "../Style/Styles";

type Props = {
  panelTitle: string;
  onHideEvent: () => void;
};

const TaskPanelEditor = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = localization.locale;

  const { title, description } = useActiveActivity();

  const sendInformation = () => {};

  return (
    <View style={styles().onTopPanel}>
      <Text style={styles().title}>{props.panelTitle}</Text>
      <View style={styles().ViewRow}>
        <TextInput
          defaultValue={title === "" ? i18n.t("TitleLabel") : title}
          label={i18n.t("TitleLabel")}
          isOneLine={true}
          onTextChangeEvent={sendInformation}
        />
      </View>
      <View style={styles().ViewRow}>
        <TextInput
          defaultValue={
            description === "" ? i18n.t("DescriptionLabel") : description
          }
          label={i18n.t("DescriptionLabel")}
          isOneLine={false}
          onTextChangeEvent={sendInformation}
        />
      </View>
      <Button title={"Close"} onPress={() => props.onHideEvent()} />
    </View>
  );
};

export default TaskPanelEditor;
