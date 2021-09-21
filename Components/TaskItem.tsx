import React, { useState } from 'react'
import { Text } from 'react-native'
import { Task } from '../Types/Task'

type Props = {
  task: Task
}

const TaskItem = (props: Props) => {
  const [activeStatus, setActiveStatus] = useState<string | null>(null)

  const updateActiveStatus = (newStatus: string) => {
    setActiveStatus((activeStatus) => newStatus)
  }

  const status = props.task.status
  const description = props.task.description

  return (
    <Text>
      {description} {status}
    </Text>
  )
}

export default TaskItem
