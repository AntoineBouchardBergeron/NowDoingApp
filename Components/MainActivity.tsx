import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import ActiveActivityPanel from './ActiveActivityPanel'
import ActiveTimer from './ActiveTimer'
import { useActiveActivity } from './ActivityProvider'
import ActivitySelectionPanel from './ActivitySelectionPanel'
import styles from '../Style/Styles'
import { BasicActivity } from '../Types/Activity'

type Props = {
  onTimerStart?: () => void
  onTimerStop?: () => void
}

const MainActivity = (props: Props) => {
  const { title, estimatedTime, updateQuantity } = useActiveActivity()
  const [isTimerPaused, setTimerPause] = useState<boolean>(true)

  const [showActivityPanelEditor, setShowActivityPanelEditor] =
    useState<boolean>(false)
  const { setActiveActivity } = useActiveActivity()

  function showActivityPanelEditorEvent() {
    setShowActivityPanelEditor((b) => !b)
  }

  function togglePause() {
    setTimerPause((isTimerPaused) => !isTimerPaused)
  }

  function completeActiveActivity() {
    setActiveActivity(BasicActivity)
    setTimerPause((isTimerPaused) => true)
    Alert.alert('Is activity finished?', '',  [
      {
        text: 'Yes',
        onPress: () => {
          console.log('activity is finished!')
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('Darn, not done eh?')
        },
      },
    ])
  }

  useEffect(() => {
    console.log(
      title +
        '; ' +
        estimatedTime.seconds +
        ' and time updated: ' +
        updateQuantity
    )
    if (!isTimerPaused && props.onTimerStart) {
      props.onTimerStart()
    } else if (props.onTimerStop) {
      props.onTimerStop()
    }
  }, [isTimerPaused])

  function timerHasExpiredAlert() {
    setTimerPause((isTimerPaused) => true)
    Alert.alert(
      'Time Is Up',
      'Do you need more time to complete the current activity?',
      [
        {
          text: 'Yes',
          onPress: () => {
            console.log('More Time needed')
          },
        },
        {
          text: 'No',
          onPress: () => {
            console.log('complete')
          },
        },
      ]
    )
  }

  return (
    <View style={styles().mainActivity}>
      {showActivityPanelEditor && (
        <ActivitySelectionPanel onHideEvent={showActivityPanelEditorEvent} />
      )}
      {!showActivityPanelEditor && (
        <ActiveActivityPanel
          isPaused={isTimerPaused}
          onPauseEvent={togglePause}
          onSelectActivityEvent={showActivityPanelEditorEvent}
          onTimerStopped={completeActiveActivity}
        />
      )}
      {!showActivityPanelEditor && (
        <ActiveTimer
          toggle={isTimerPaused}
          onTimerExpired={timerHasExpiredAlert}
        />
      )}
    </View>
  )
}

export default MainActivity
