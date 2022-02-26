import { Time } from '../Classes/Time'
import { DesiredTimeRepresentation } from '../Classes/DesiredTimeRepresentation'

export interface Activity {
  id: number
  title: string
  status: string
  description: string
  estimatedTime: Time
  updateQuantity: number // To Rename (responsible for counting how many times the estimatedTime is updated)
  timePassed: Time
  desiredRepresentation: DesiredTimeRepresentation
}

export const BasicActivity: Activity = {
  id: 1,
  title: 'Free time',
  status: 'on going',
  description: 'This is a basic Activity that will never be completed.\nUse to your own discretion. :)',
  estimatedTime: new Time(10),
  updateQuantity: 0,
  timePassed: new Time(1),
  desiredRepresentation: new DesiredTimeRepresentation(1),
}
