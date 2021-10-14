import React, { ReactNode } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Time } from "../Classes/Time";
import styles from "../Style/Styles";
import { useActiveActivity } from "./ActivityProvider";
import { useTheme } from "./ThemeProvider";

import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as Localization from "expo-localization";
import Clock from "./Clock";
import ClockTime from "./ClockTime";
import Container from "./Container";

type Props = {
  onSelectEvent: () => void;
};

const ActivityPreview = (props: Props) => {
  //returns ActivityTitle/name Description
  //Timeestimated, timePassedOnActivity, amountTimeAddedTime
  // isActivityReccuring? (as if it was saved as a template)
  // Clock reprensetation of timeEstimated and TimePassedOnActivity

  const { description, estimatedTime, timePassed } = useActiveActivity();

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;

  const maxWidth = useWindowDimensions().width;
  const maxHeight = useWindowDimensions().height;
  const minVal = maxHeight < maxWidth ? maxHeight : maxWidth;

  return (
    <Container
      styling={[
        styles().Container,
        {
          height: minVal == maxWidth ? minVal * 0.88 : maxWidth * 0.5,
        },
      ]}
    >
      <SafeAreaView>
        <Text style={styles().smallTitle}>
          {i18n.t("TitleActivityPreview")}
        </Text>
        <ScrollView>
          <SafeAreaView style={styles().SafeAreaActivity}>
            <ScrollView>
              <View style={styles().ActivityPreview}>
                <Text style={styles().basicText}>{description}</Text>
                <View style={{}}>
                  <View style={{ flexWrap: "nowrap", flexDirection: "row" }}>
                    <Text style={styles().basicText}>
                      {i18n.t("TimeEstimate")}
                    </Text>
                    <ClockTime time={estimatedTime} />
                  </View>
                  <View style={{ flexWrap: "nowrap", flexDirection: "row" }}>
                    <Text style={styles().basicText}>
                      {i18n.t("TimePassed")}
                    </Text>
                    <ClockTime time={timePassed} />
                  </View>
                  <View style={styles().ClockPreviewView}>
                    <Text style={styles().smallTitle}>
                      {i18n.t("TimeLeftClock")}
                    </Text>
                    <Clock
                      clockBackgroundColor={
                        styles().ActivityPreview.backgroundColor
                      }
                      sizeFactor={0.8}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ScrollView>
        <Button
          title={i18n.t("StartActivity")}
          onPress={() => props.onSelectEvent()}
        />
      </SafeAreaView>
    </Container>
  );
};

export default ActivityPreview;
