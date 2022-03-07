import React, { useEffect, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView } from "react-native";
import { useTheme } from "../Providers/ThemeProvider";
import i18n from "i18n-js";
import { en, fr } from "../i18n/translation";
import * as localization from "expo-localization";
import TextInput from "./TextInput";
import { useActiveActivity } from "../Providers/ActivityProvider";
import styles from "../Style/Styles";
import Container from "./Container";
import Clock from "./Clock";
import { Time } from "../Classes/Time";
import ClockTime from "./ClockTime";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";
import ClockInput from "./ClockInput";

type Props = {
  panelTitle: string;
  editActivity?: boolean;
  onHideEvent: () => void;
};

const ActivityPanelEditor = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = localization.locale;

  const { activity, updateActivity, addActivity } = useActiveActivity();

  const [activityName, setActivityName] = useState<string>(activity.title);
  const [newDescription, setDescription] = useState<string>(
    activity.description
  );
  const [timeEstimation, setTimeEstimation] = useState<Time>(
    activity.estimatedTime
  );
  const [newTimeRepresentation, setNewTimeRepresentation] = useState<number>(
    activity.desiredRepresentation.value
  );

  const { colors } = useTheme();

  const closeEditor = () => {
    if (!props.editActivity) {
      updateActivity(
        activity.id,
        activityName,
        undefined,
        newDescription,
        timeEstimation,
        undefined,
        undefined,
        new DesiredTimeRepresentation(newTimeRepresentation)
      );
    } else {
      addActivity(
        activityName,
        undefined,
        newDescription,
        timeEstimation,
        undefined,
        undefined,
        new DesiredTimeRepresentation(newTimeRepresentation)
      );
    }

    props.onHideEvent();
  };

  return (
    <Container styling={[styles().Container, { width: "90%", height: "90%" }]}>
      <SafeAreaView>
        <Text style={styles().title}>{props.panelTitle}</Text>
        <ScrollView>
          <TextInput
            defaultValue={
              activity.title === "" ? i18n.t("TitleLabel") : activity.title
            }
            label={i18n.t("TitleLabel")}
            isOneLine={true}
            onTextChangeEvent={(input) => setActivityName(input)}
            keyboardType={undefined}
          />

          <TextInput
            defaultValue={
              activity.description === ""
                ? i18n.t("DescriptionLabel")
                : activity.description
            }
            label={i18n.t("DescriptionLabel")}
            isOneLine={false}
            onTextChangeEvent={(input) => setDescription(input)}
            keyboardType={undefined}
          />
          <ClockInput
            updateTime={(time) => setTimeEstimation(time)}
            updateTimeRepresentation={(representation) =>
              setNewTimeRepresentation(representation)
            }
          />
        </ScrollView>

        <View style={{ padding: 2 }}>
          <Clock clockBackgroundColor={colors.secondaryBackground} />
        </View>
        <Button title={"Close"} onPress={() => closeEditor()} />
      </SafeAreaView>
    </Container>
  );
};

export default ActivityPanelEditor;
