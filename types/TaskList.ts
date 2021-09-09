import { Task } from '../types/task'
import { Time } from '../Classes/Time'

const Task1: Task = {
  id: 1,
  status: 'Next up',
  title: 'title1',
  description: 'You Know what is it',
  estimatedTime: new Time(3600),
  timePassed: new Time(300),
  updateQuantity: 0,
}

const Task2: Task = {
  id: 2,
  status: 'Completed',
  title: 'title2',
  description: 'Created a SampleTaskList',
  estimatedTime: new Time(3980),
  timePassed: new Time(520),
  updateQuantity: 0,
}

const Task3: Task = {
  id: 3,
  status: 'OnGoing',
  title: 'title3',
  description: 'Prog this thing (too big a task)',
  estimatedTime: new Time(999),
  timePassed: new Time(666),
  updateQuantity: 0,
}

export type Tasks = {
  tasks: Task[]
}

export const SAMPLE_TASK_ARRAY: Task[] = [Task1, Task2, Task3]

export const SAMPLE_TASKS: Tasks = { tasks: [Task1, Task2, Task3] }
