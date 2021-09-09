import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

type Props = {
  onPauseEvent: () => void
  isPaused: boolean
}

const PauseButton = (props: Props) => {
  const [isPaused, setPause] = useState<Boolean>(props.isPaused)

  function TogglePause() {
    props.onPauseEvent()
  }

  useEffect(() => {
    setPause((isPaused) => !isPaused)
  }, [props.isPaused])

  return (
    <Button
      title={isPaused ? 'Stop Timer' : 'Start Timer'}
      onPress={TogglePause}
    />
  )
}

export default PauseButton
