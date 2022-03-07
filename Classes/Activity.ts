import { Time } from "../Classes/Time";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";
import { stat } from "react-native-fs";

export const enum Status {
  "Active",
  "Repeatable",
  "Completed",
  "Waiting",
}

export class Activity {
  constructor(
    id: number,
    title: string,
    status: Status,
    description: string,
    estimatedTime: Time,
    updateQuantity: number,
    timePassed: Time,
    desiredRepresentation: DesiredTimeRepresentation
  ) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.description = description;
    this.estimatedTime = estimatedTime;
    this.updateQuantity = updateQuantity;
    this.timePassed = timePassed;
    this.desiredRepresentation = desiredRepresentation;
  }

  id: number;
  title: string;
  status: Status;
  description: string;
  estimatedTime: Time;
  updateQuantity: number; // To Rename (responsible for counting how many times the estimatedTime is updated)
  timePassed: Time;
  desiredRepresentation: DesiredTimeRepresentation;

  replaceData = (
    a?: Activity,
    title?: string,
    status?: Status,
    description?: string,
    estimatedTime?: Time,
    updateQuantity?: number,
    timePassed?: Time,
    desiredRepresentation?: DesiredTimeRepresentation
  ) => {
    this.title = a?.title ?? title ?? this.title;
    this.status = a?.status ?? status ?? this.status;
    this.description = a?.description ?? description ?? this.description;
    this.estimatedTime =
      a?.estimatedTime ?? estimatedTime ?? this.estimatedTime;
    this.updateQuantity = a?.updateQuantity ?? updateQuantity ?? this.updateQuantity;
    this.timePassed = a?.timePassed ?? timePassed ?? this.timePassed;
    this.desiredRepresentation =
      a?.desiredRepresentation ??
      desiredRepresentation ??
      this.desiredRepresentation;
  };
}

export const BasicActivity = new Activity(
  1,
  "Free time",
  Status.Active,
  "This is a basic Activity that will never be completed.\nUse to your own discretion. :)",
  new Time(10),
  0,
  new Time(1),
  new DesiredTimeRepresentation(1)
);
