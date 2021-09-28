import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { SAMPLE_ACTIVITIES, SAMPLE_ACTIVITY_ARRAY } from '../Types/ActivityList'
import ActivityList from './ActivityList'
import ActivityPreview from './ActivityPreview'
import ActivityPanelEditor from './ActivityPanelEditor'
import { useActiveActivity } from './ActivityProvider'
import styles from '../Style/Styles'

type Props = {
  onHideEvent: () => void
}

const ActivitySelectionPanel = (props: Props) => {
  const [updatePanel, showUpdatePanel] = useState<boolean>(false)
  const { setActiveActivity } = useActiveActivity()
  const changeSelection = (index: number) => {
    setActiveActivity(SAMPLE_ACTIVITY_ARRAY[index - 1])
  }

  return (
    <View style={styles().onTopPanel}>
      {!updatePanel && (
        <SafeAreaView>
          <ScrollView style={styles().scrollView}>
            <Text style={styles().title}> Dis the title</Text>
            <ActivityList
              activities={SAMPLE_ACTIVITIES}
              onSelection={changeSelection}
            />

            <Button
              title={'Update Activity'}
              onPress={() => showUpdatePanel((b) => !b)}
            />
            <Button title={'Close'} onPress={() => props.onHideEvent()} />
          </ScrollView>
        </SafeAreaView>
      )}
      {!updatePanel && (
        <View>
          <ActivityPreview>
            <Text style={styles().title}>hi</Text>
          </ActivityPreview>
        </View>
      )}
      {updatePanel && (
        <ActivityPanelEditor onHideEvent={() => showUpdatePanel((b) => !b)} />
      )}
    </View>
  )
}

export default ActivitySelectionPanel
