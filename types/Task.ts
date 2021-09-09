import { Time } from '../Classes/Time'

export type Task = {
  id: number
  title: string
  status: string
  description: string
  estimatedTime: Time
  updateQuantity: number // To Rename (responsible for counting how many times the estimatedTime is updated)
  timePassed: Time
}
