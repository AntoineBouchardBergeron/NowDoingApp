import React, { useEffect, useState } from 'react'
import { Activity, BasicActivity } from '../Types/Activity'

export interface ActivityWithSetter extends Activity {
  setActiveActivity: (activity: Activity) => void
}

export const basicActivityContext: ActivityWithSetter = {
  id: BasicActivity.id,
  title: BasicActivity.title,
  status: BasicActivity.status,
  description: BasicActivity.description,
  estimatedTime: BasicActivity.estimatedTime,
  updateQuantity: BasicActivity.updateQuantity, // To Rename (responsible for counting how many times the estimatedTime is updated)
  timePassed: BasicActivity.timePassed,
  desiredRepresentation: BasicActivity.desiredRepresentation,
  setActiveActivity: () => {},
}

export const ActivityContext =
  React.createContext<ActivityWithSetter>(basicActivityContext)

export const ActivityProvider: React.FC<{}> = (props) => {
  const [activeActivity, setActivity] = useState<Activity>(BasicActivity)

  useEffect(() => {
    setActivity(activeActivity)
  }, [activeActivity])

  const defaultActivity: ActivityWithSetter = {
    id: activeActivity.id,
    title: activeActivity.title,
    status: activeActivity.status,
    description: activeActivity.description,
    estimatedTime: activeActivity.estimatedTime,
    updateQuantity: activeActivity.updateQuantity, // To Rename (responsible for counting how many times the estimatedTime is updated)
    timePassed: activeActivity.timePassed,
    desiredRepresentation: activeActivity.desiredRepresentation,
    setActiveActivity: (a: Activity) => {
      setActivity(a)
    },
  }

  return (
    <ActivityContext.Provider value={defaultActivity}>
      {props.children}
    </ActivityContext.Provider>
  )
}

export const useActiveActivity = () => React.useContext(ActivityContext)
