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
  id: 999998874,
  description: 'This is a basic Activity that will never be completed.\nUse to your own discretion. :)',
  desiredRepresentation: new DesiredTimeRepresentation(1),
  estimatedTime: new Time(10),
  status: 'on going',
  timePassed: new Time(1),
  title: 'Free time',
  updateQuantity: 0,
}