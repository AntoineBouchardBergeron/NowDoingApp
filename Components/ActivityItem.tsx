import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import styles from '../Style/Styles'
import { Activity } from '../Types/Activity'

type Props = {
  activity: Activity
  isSelected: boolean
  onPress: () => void
}

const ActivityItem = (props: Props) => {
  // const [activeStatus, setActiveStatus] = useState<string | null>(null)

  // const updateActiveStatus = (newStatus: string) => {
  //   setActiveStatus((activeStatus) => newStatus)
  // }

  const title = props.activity.title
  const description = props.activity.description

  return (
    <Text
      style={props.isSelected ? styles().selected : styles().basicText}
      onPress={() => {
        props.onPress()
      }}
    >
      {title}
    </Text>
  )
}

export default ActivityItem
