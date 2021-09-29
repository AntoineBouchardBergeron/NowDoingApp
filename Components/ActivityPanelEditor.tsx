import React from "react";
import { Button, View } from "react-native";
import { useTheme } from "./ThemeProvider";
import i18n from "i18n-js";
import { en, fr } from "../i18n/translation";
import * as localization from "expo-localization";
import TextInput from "./TextInput";
import { useActiveActivity } from "./ActivityProvider";
import styles from "../Style/Styles";

type Props = {
  onHideEvent: () => void;
};

const TaskPanelEditor = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = localization.locale;

  const { title, description } = useActiveActivity();

  const onHideEventButton = () => {
    props.onHideEvent();
  };

  const sendInformation = () => {};

  return (
    <View style={styles().onTopPanel}>
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
      <Button title={"Close"} onPress={onHideEventButton} />
    </View>
  );
};

export default TaskPanelEditor;
