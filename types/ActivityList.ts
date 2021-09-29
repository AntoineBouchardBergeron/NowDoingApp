import { Activity } from './Activity'
import { Time } from '../Classes/Time'
import { DesiredTimeRepresentation } from '../Classes/DesiredTimeRepresentation'

const Activity1: Activity = {
  id: 1,
  status: 'Next up',
  title: 'Allow 15m, 1hr, 4hrs clocks',
  description:
    'Allow the user to use different timed clock, Add verification for maximum input (and override), and trigger alerts when timer reaches 0',
  estimatedTime: new Time(600),
  timePassed: new Time(5),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(0),
}

const Activity2: Activity = {
  id: 2,
  status: 'Completed',
  title: 'title2',
  description: 'Created a SampleActivityList',
  estimatedTime: new Time(3600),
  timePassed: new Time(1),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
}

const Activity3: Activity = {
  id: 3,
  status: 'OnGoing',
  title: 'BigLongActivity',
  description: 'Prog this thing (too big a Activity)',
  estimatedTime: new Time(14200),
  timePassed: new Time(1),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(2),
}

export type Activities = {
  activities: Activity[]
}

export const SAMPLE_ACTIVITY_ARRAY: Activity[] = [Activity1, Activity2, Activity3]

export const SAMPLE_ACTIVITIES: Activities = { activities: [Activity1, Activity2, Activity3] }
