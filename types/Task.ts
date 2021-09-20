import { Time } from '../Classes/Time'
import { DesiredTimeRepresentation } from '../Classes/DesiredTimeRepresentation'

export type Task = {
  id: number
  title: string
  status: string
  description: string
  estimatedTime: Time
  updateQuantity: number // To Rename (responsible for counting how many times the estimatedTime is updated)
  timePassed: Time
  desiredRepresentation: DesiredTimeRepresentation
}
