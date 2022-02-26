import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ActivityItem from "./ActivityItem";
import { ReactNode } from "react";
import { Activities } from "../Types/ActivityList";
import { useActiveActivity } from "./ActivityProvider";
import styles from "../Style/Styles";

type Props = {
  activities: Activities;
  onSelection: (index: number) => void;
};

const ActivityList = (props: Props) => {
  const activities: ReactNode[] = [];

  const { id } = useActiveActivity();

  props.activities.activities.forEach((activity) => {
    activities.push(
      <ActivityItem
        activity={activity}
        key={activity.id}
        isSelected={id === activity.id}
        onPress={() => {
          props.onSelection(activity.id);
        }}
      />
    );
  });

  return (
    <SafeAreaView style={[styles().ActivityListSelector, styles().SafeAreaActivity]}>
      <ScrollView style={styles().scrollView}>{activities}</ScrollView>
    </SafeAreaView>
  );
};

export default ActivityList;
