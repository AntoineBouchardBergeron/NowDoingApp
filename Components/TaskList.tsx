import React from 'react'
import { View } from 'react-native'
import TaskItem from '../Components/TaskItem'
import { ReactNode } from 'react'
import { Tasks } from '../types/TaskList'

type Props = {
  tasks: Tasks
}

const TaskList = (props: Props) => {
  const tasks: ReactNode[] = []

  props.tasks.tasks.forEach((task) => {
    tasks.push(<TaskItem {...task} key={task.id} />)
  })

  return <View>{tasks}</View>
}

export default TaskList
