import React, { useEffect } from 'react'
import { Text, Button, View } from 'react-native'
import PauseButton from './PauseButton'
import { useTheme } from './ThemeProvider'
import i18n from 'i18n-js'
import { fr, en } from '../i18n/translation'
import * as Localization from 'expo-localization'
import { useActiveActivity } from './ActivityProvider'
import styles from '../Style/Styles'

type Props = {
  isPaused: boolean
  onPauseEvent: () => void
  onSelectActivityEvent: () => void
  onTimerStopped: () => void
}

const ActiveActivityPanel = (props: Props) => {
  i18n.fallbacks = true
  i18n.translations = { en, fr }
  i18n.locale = Localization.locale
  const { colors } = useTheme()
  const { title, description } = useActiveActivity()

  function TogglePause() {
    props.onPauseEvent()
  }

  const ShowSelectActivityPanel = () => {
    props.onSelectActivityEvent()
  }

  useEffect(() => {}, [props.isPaused])

  return (
    <View style={styles().ActivityPanel}>
      <Text style={styles().title}>{title}</Text>
      <Text style={styles().basicText}>{description}</Text>
      <View style={styles().ViewColumn}>
        {/* {isActivitySet()} */}
        <View style={styles().buttons}>
          <Button
            title={i18n.t('SelectActivity')}
            onPress={ShowSelectActivityPanel}
            disabled={!props.isPaused}
          />
        </View>
        <View style={styles().buttons}>
          <PauseButton onPauseEvent={TogglePause} isPaused={props.isPaused} onTimerStopped={props.onTimerStopped} />
        </View>
      </View>
    </View>
  )
}

export default ActiveActivityPanel
