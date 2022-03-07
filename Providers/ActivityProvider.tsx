import React, { useEffect, useState } from "react";
import { Activity, BasicActivity, Status } from "../Classes/Activity";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";
import { Time } from "../Classes/Time";

export interface ActivitiesWithSetter {
  activity: Activity;
  activities: Activity[];
  setActiveActivity: (activity: Activity) => void;
  updateActivity: (
    id: number,
    title?: string,
    status?: Status,
    description?: string,
    estimatedTime?: Time,
    updateQuantity?: number,
    timePassed?: Time,
    desiredRepresentation?: DesiredTimeRepresentation
  ) => void;
  addActivity: (
    title?: string,
    status?: Status,
    description?: string,
    estimatedTime?: Time,
    updateQuantity?: number,
    timePassed?: Time,
    desiredRepresentation?: DesiredTimeRepresentation
  ) => void;
}

export const basicActivityContext: ActivitiesWithSetter = {
  activity: new Activity(
    BasicActivity.id,
    BasicActivity.title,
    BasicActivity.status,
    BasicActivity.description,
    BasicActivity.estimatedTime,
    BasicActivity.updateQuantity,
    BasicActivity.timePassed,
    BasicActivity.desiredRepresentation
  ),
  activities: [],
  setActiveActivity: () => {},
  updateActivity: () => {},
  addActivity: () => {},
};

export const ActivityContext =
  React.createContext<ActivitiesWithSetter>(basicActivityContext);

export const ActivityProvider: React.FC<{}> = (props) => {
  const [activities, setActivityList] = useState<Activity[]>([BasicActivity]);
  const [activeActivity, setActivity] = useState<Activity>(BasicActivity);

  // Handle the logic for updating all activities.
  // Mainly for the status. Might not be actually needed, but it's there.>
  // Will need to request time from TimerProvider to know how much time lapsed since start, maybe?

  const defaultActivity: ActivitiesWithSetter = {
    activity: new Activity(
      activeActivity.id,
      activeActivity.title,
      activeActivity.status,
      activeActivity.description,
      activeActivity.estimatedTime,
      activeActivity.updateQuantity, // To Rename (responsible for counting how many times the estimatedTime is updated)
      activeActivity.timePassed,
      activeActivity.desiredRepresentation
    ),
    activities: activities,
    setActiveActivity: (a: Activity) => {
      setActivity(a);
    },
    updateActivity: (
      id: number,
      title?: string,
      status?: Status,
      description?: string,
      estimatedTime?: Time,
      updateQuantity?: number,
      timePassed?: Time,
      desiredRepresentation?: DesiredTimeRepresentation
    ) => {
      activities
        .find((activity) => activity.id === id)
        ?.replaceData(
          undefined,
          title,
          status,
          description,
          estimatedTime,
          updateQuantity,
          timePassed,
          desiredRepresentation
        );
    },
    addActivity: (
      title?: string,
      status?: Status,
      description?: string,
      estimatedTime?: Time,
      updateQuantity?: number,
      timePassed?: Time,
      desiredRepresentation?: DesiredTimeRepresentation
    ) => {
      const newActivity = new Activity(
        activities.length + 1,
        title ?? "no title",
        status ?? Status.Waiting,
        description ?? "no description",
        estimatedTime ?? new Time(30),
        updateQuantity ?? 0,
        timePassed ?? new Time(0),
        desiredRepresentation ?? new DesiredTimeRepresentation(0)
      );
      setActivityList([...activities, newActivity]);
    },
  };

  return (
    <ActivityContext.Provider value={defaultActivity}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export const useActiveActivity = () => React.useContext(ActivityContext);
