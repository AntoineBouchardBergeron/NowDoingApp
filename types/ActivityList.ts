import { Activity } from "./Activity";
import { Time } from "../Classes/Time";
import { DesiredTimeRepresentation } from "../Classes/DesiredTimeRepresentation";

const Activity1: Activity = {
  id: 1,
  status: "Now doing",
  title: "Line Intersection",
  description:
    "1- Figure out the best way to add points with the contour.(is it with pattern or layer Gen?)\n2- Add the points of contour that intersects with pattern points to the list.\n3- While adding the intesected points, account for the contour segment direction and skip the addition of line intersected",
  estimatedTime: new Time(1800),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
};

const Activity2: Activity = {
  id: 2,
  status: "Repeatable",
  title: "Agile Meeting",
  description: "Quick *10-15min* agile meeting to update team about progress and hicups",
  estimatedTime: new Time(899),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(0),
};

const Activity3: Activity = {
  id: 3,
  status: "Repeatable",
  title: "Weekly Planing Agile Meeting",
  description: "Agile meeting on Monday to plan out the week's worth of work",
  estimatedTime: new Time(1800),
  timePassed: new Time(1),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
};

const Activity4: Activity = {
  id: 4,
  status: "Repeatable",
  title: "Agile Presentation Meeting",
  description:
    "Recap of the week's work accomplished and presentation of new features to the teams/StakeHolders",
  estimatedTime: new Time(1000),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
};
const Activity5: Activity = {
  id: 5,
  status: "OnGoing",
  title: "Read Code",
  description:
    "Check the 6 active repos on the github and takes notes in thy book",
  estimatedTime: new Time(3500),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
};
const Activity6: Activity = {
  id: 6,
  status: "OnGoing",
  title: "Raspberry setup",
  description:
    "Read about different managing apps/Software",
  estimatedTime: new Time(3000),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
};
const Activity7: Activity = {
  id: 7,
  status: "OnGoing",
  title: "Prepare Git Repo",
  description:
    "Adapt the git repo to the need of the team, and present said configurations",
  estimatedTime: new Time(7200),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(2),
};

const Activity8:Activity = {
  id: 8,
  status: "OnGoing",
  title: "Validate Polyline Check",
  description:
    "1- Cycle through all lines to check that start and end passes inside bounding box.\n2- Return true or false if there's a find, if not, return error.\n3- Return list of found lines to change the boundingbox algo",
  estimatedTime: new Time(10800),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(2),
}

const Activity9:Activity  = {
  id: 9,
  status: "OnGoing",
  title: "Extract Left hand side",
  description:
    "1- Validate directions of passed lines\n2- Using Orientation and Kept side of the polyline, reject or move pathing points.\n3-Return list of found points with countour",
  estimatedTime: new Time(7200),
  timePassed: new Time(0),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(2),
}

export type Activities = {
  activities: Activity[];
};

export const SAMPLE_ACTIVITY_ARRAY: Activity[] = [
  Activity1,
  Activity2,
  Activity3,
];

export const SAMPLE_ACTIVITIES: Activities = {
  activities: [Activity1, Activity2, Activity3],
};

export const SAMPLE_LOTS_ACTIVITIES: Activities = {
  activities: [Activity1, Activity2, Activity3, Activity4, Activity5, Activity6, Activity7, Activity8, Activity9],
};
