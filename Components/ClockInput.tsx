import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import TextInput from "./TextInput";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";
import { Time } from "../Classes/Time";
import Container from "./Container";
import i18n from "i18n-js";
import { en, fr } from "../i18n/translation";
import * as localization from "expo-localization";
import styles from "../Style/Styles";

type Props = {
  updateTime: (t: Time) => void;
  updateTimeRepresentation: (d: number) => void;
};

const ClockInput = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { en, fr };
  i18n.locale = localization.locale;

  const [activeHour, setHours] = useState<number>(0);
  const [activeMinute, setMinute] = useState<number>(10);

  useEffect(() => {
    props.updateTime(new Time(activeHour * 3600 + activeMinute * 60));
  }, [activeHour, activeMinute]);

  return (
    <Container>
      <View style={styles().ViewColumn}>
        <View style={styles().ViewRow}>
          <TextInput
            defaultValue={activeHour.toString()}
            label={i18n.t("hours")}
            keyboardType="number-pad"
            isOneLine={false}
            onTextChangeEvent={(value) => {
              setHours(Number.parseInt(value));
            }}
          />
          <Text>:</Text>
          <TextInput
            defaultValue={activeMinute.toString()}
            label={i18n.t("minutes")}
            keyboardType="number-pad"
            isOneLine={false}
            onTextChangeEvent={(value) => {
              setMinute(Number.parseInt(value));
            }}
          />
        </View>
      </View>
      <View style={styles().ViewColumn}>
        <View style={styles().ViewRow}>
          <Button
            title={"15 "+i18n.t("minutes")}
            onPress={() => props.updateTimeRepresentation(0)}
          />
          <Button
            title={"1 "+i18n.t("hours")}
            onPress={() => props.updateTimeRepresentation(1)}
          />
          <Button
            title={"4 "+i18n.t("hours")}
            onPress={() => props.updateTimeRepresentation(2)}
          />
        </View>
      </View>
    </Container>
  );
};

export default ClockInput;
