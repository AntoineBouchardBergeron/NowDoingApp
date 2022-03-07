import React, { ReactNode } from "react";
import { useWindowDimensions, Text, Button, View } from "react-native";
import Container from "./Container";
import ActivityList from "./ActivityList";
import styles from "../Style/Styles";
import { useActiveActivity } from "../Providers/ActivityProvider";
import { loadLocalActivityList } from "../Helpers/fetch";

import i18n from "i18n-js";
import { fr, en } from "../i18n/translation";
import * as localization from "expo-localization";

type Props = {
  showCreatePanel: () => void;
  showUpdatePanel: () => void;
};

const ActivityListSelectorPanel = (props: Props) => {
  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = localization.locale;

  // const activities = loadLocalActivityList();

  const { setActiveActivity, activities } = useActiveActivity();
  const changeSelection = (index: number) => {
    setActiveActivity(activities[index - 1]);
  };
  const { width, height } = useWindowDimensions();

  const minVal = height < width ? height : width;

  return (
    <Container
      styling={[
        styles().Container,
        { height: minVal == width ? height * 0.4 : height * 0.9 },
      ]}
    >
      <Text style={styles().title}>{i18n.t("SelectActivity")}</Text>
      <ActivityList
        onSelection={changeSelection}
      />

      <View style={styles().ViewRow}>
        <Button
          title={i18n.t("CreateNewActivity")}
          onPress={() => props.showCreatePanel()}
        />
        <Button
          title={i18n.t("ModifyActivity")}
          onPress={() => props.showUpdatePanel()}
        />
      </View>
    </Container>
  );
};

export default ActivityListSelectorPanel;
