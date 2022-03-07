import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ActivityItem from "./ActivityItem";
import { ReactNode } from "react";
import { useActiveActivity } from "../Providers/ActivityProvider";
import styles from "../Style/Styles";
import { Activity } from "../Classes/Activity";

type Props = {
  onSelection: (index: number) => void;
};

const ActivityList = (props: Props) => {
  const activityList: ReactNode[] = [];

  const { activity, activities } = useActiveActivity();

  activities.forEach((a:Activity) => {
    activityList.push(
      <ActivityItem
        activity={a}
        key={a.id}
        isSelected={activity.id === a.id}
        onPress={() => {
          props.onSelection(a.id);
        }}
      />
    );
  });

  return (
    <SafeAreaView
      style={[styles().ActivityListSelector, styles().SafeAreaActivity]}
    >
      <ScrollView style={styles().scrollView}>{activityList}</ScrollView>
    </SafeAreaView>
  );
};

export default ActivityList;
