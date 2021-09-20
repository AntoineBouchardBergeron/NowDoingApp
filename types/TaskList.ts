import { Task } from '../types/task'
import { Time } from '../Classes/Time'
import { DesiredTimeRepresentation } from '../Classes/DesiredTimeRepresentation'

const Task1: Task = {
  id: 1,
  status: 'Next up',
  title: 'Allow 15m, 1hr, 4hrs clocks',
  description:
    'Allow the user to use different timed clock,\nAdd verification for maximum input (and override),\nand trigger alerts when timer reaches 0',
  estimatedTime: new Time(600),
  timePassed: new Time(5),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(0),
}

const Task2: Task = {
  id: 2,
  status: 'Completed',
  title: 'title2',
  description: 'Created a SampleTaskList',
  estimatedTime: new Time(3600),
  timePassed: new Time(3588),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(1),
}

const Task3: Task = {
  id: 3,
  status: 'OnGoing',
  title: 'BigLongTask',
  description: 'Prog this thing (too big a task)',
  estimatedTime: new Time(14200),
  timePassed: new Time(1),
  updateQuantity: 0,
  desiredRepresentation: new DesiredTimeRepresentation(2),
}

export type Tasks = {
  tasks: Task[]
}

export const SAMPLE_TASK_ARRAY: Task[] = [Task1, Task2, Task3]

export const SAMPLE_TASKS: Tasks = { tasks: [Task1, Task2, Task3] }
