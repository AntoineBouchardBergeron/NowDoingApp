import React, { ReactNode } from 'react'
import { Activity } from '../Types/Activity'

type Props = {
  children: ReactNode
}

const ActivityPreview = (props: Props) => {
  //returns ActivityTitle/name Description
  //Timeestimated, timePassedOnActivity, amountTimeAddedTime
  // isActivityReccuring? (as if it was saved as a template)
  // Clock reprensetation of timeEstimated and TimePassedOnActivity
  return <>{props.children}</>
}

export default ActivityPreview
