import React, { useEffect, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView } from "react-native";
import { useTheme } from "./ThemeProvider";
import i18n from "i18n-js";
import { en, fr } from "../i18n/translation";
import * as localization from "expo-localization";
import TextInput from "./TextInput";
import { useActiveActivity } from "./ActivityProvider";
import styles from "../Style/Styles";
import Container from "./Container";
import Clock from "./Clock";
import { Time } from "../Classes/Time";
import ClockTime from "./ClockTime";

type Props = {
  panelTitle: string;
  editActivity?: boolean;
  onHideEvent: () => void;
};

const TaskPanelEditor = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = localization.locale;

  const { title, description, estimatedTime, desiredRepresentation } =
    useActiveActivity();

  const [activityName, setActivityName] = useState<string>(title);
  const [newDescription, setDescription] = useState<string>(description);
  const [timeEstimation, setTimeEstimation] = useState<Time>(estimatedTime);
  const [newTimeRepresentation, setNewTimeRepresentation] = useState<Number>(
    desiredRepresentation.value
  );

  const { colors } = useTheme();

  useEffect(()=>{
    console.log(newDescription)
  }, [newDescription])

  return (
    <Container styling={[styles().Container, { width: "90%", height: "90%" }]}>
      <SafeAreaView>
        <Text style={styles().title}>{props.panelTitle}</Text>
        <ScrollView>
          <TextInput
            defaultValue={title === "" ? i18n.t("TitleLabel") : title}
            label={i18n.t("TitleLabel")}
            isOneLine={true}
            onTextChangeEvent={(input) => setActivityName(input)}
          />

          <TextInput
            defaultValue={
              description === "" ? i18n.t("DescriptionLabel") : description
            }
            label={i18n.t("DescriptionLabel")}
            isOneLine={false}
            onTextChangeEvent={(input) => setDescription(input)}
          />
          <ClockTime time={timeEstimation} />
        </ScrollView>

        <View style={{ padding: 2 }}>
          <Clock clockBackgroundColor={colors.secondaryBackground} />
        </View>
        <Button title={"Close"} onPress={() => props.onHideEvent()} />
      </SafeAreaView>
    </Container>
  );
};

export default TaskPanelEditor;
