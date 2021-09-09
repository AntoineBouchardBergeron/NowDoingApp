import React, { useState } from 'react'
import { Text } from 'react-native'
import { Task } from '../Types/Task'

const TaskItem = (props: Task) => {
  const [activeStatus, setActiveStatus] = useState<string | null>(null)

  const updateActiveStatus = (newStatus: string) => {
    setActiveStatus((activeStatus) => newStatus)
  }

  const status = props.status
  const description = props.description

  return (
    <Text>
      {description} {status}
    </Text>
  )
}

export default TaskItem
