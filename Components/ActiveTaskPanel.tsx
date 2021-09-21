import React, { useEffect } from 'react'
import { StyleSheet, Text, Button, Alert, View } from 'react-native'
import { Task } from '../Types/Task'
import PauseButton from './PauseButton'
import { useTheme } from './ThemeProvider'
import i18n from 'i18n-js'
import { fr, en } from '../i18n/translation'
import * as Localization from 'expo-localization'

type Props = {
  activeTask: Task | undefined
  isPaused: boolean
  onPauseEvent: () => void
  onSelectTaskEvent: () => void
}

const ActiveTaskPanel = (props: Props) => {
  i18n.fallbacks = true
  i18n.translations = { en, fr }
  i18n.locale = Localization.locale
  const { colors } = useTheme()

  function TogglePause() {
    props.onPauseEvent()
  }

  const ShowSelectTaskPanel = () => {
    props.onSelectTaskEvent()
  }

  function isTaskSet() {
    if (props.activeTask !== undefined) {
      // return <ClockTime time={props.activeTask.estimatedTime} />
    }
  }

  const style = StyleSheet.create({
    title: {
      color: colors.text,
      padding: 2,
      margin: 2,
      fontSize: 22,
    },
    text: {
      color: colors.text,
      padding: 2,
      margin: 2,
      marginBottom: 10,
      fontSize: 12,
    },
    buttons: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      maxWidth: 280,
      // Don't like maxWidth -> too constrictive
    },
  })

  useEffect(() => {}, [props.isPaused])

  return (
    <>
      <Text style={style.title}>{props.activeTask?.title}</Text>
      <Text style={style.text}>{props.activeTask?.description}</Text>
      <View style={style.buttons}>
        {/* {isTaskSet()} */}
        <Button title={i18n.t('SelectTask')} onPress={ShowSelectTaskPanel} disabled={!props.isPaused} />
        <PauseButton onPauseEvent={TogglePause} isPaused={props.isPaused} />
      </View>
    </>
  )
}

export default ActiveTaskPanel
