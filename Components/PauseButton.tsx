import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'
import i18n from 'i18n-js'
import { fr, en } from '../i18n/translation'
import * as Localization from 'expo-localization';

type Props = {
  onPauseEvent: () => void
  isPaused: boolean
}

const PauseButton = (props: Props) => {
  i18n.fallbacks = true
  i18n.translations = { en, fr }
  i18n.locale = Localization.locale

  const [isPaused, setPause] = useState<Boolean>(props.isPaused)

  function TogglePause() {
    props.onPauseEvent()
  }

  useEffect(() => {
    setPause((isPaused) => !isPaused)
  }, [props.isPaused])

  return (
    <Button
      title={isPaused ? i18n.t('StopTimer') : i18n.t('StartTimer')}
      onPress={TogglePause}
    />
  )
}

export default PauseButton
