import React, { useState } from 'react'
import { Button, View, StyleSheet, TextInput, Text } from 'react-native'
import ThemeSwitch from '../Theme/ThemeSwitch'
import { useTheme } from './ThemeProvider'
import i18n from 'i18n-js'
import { en, fr } from '../i18n/translation'
import * as localization from 'expo-localization'

type Props = {
  onHideEvent: () => void
}

const TaskPanelEditor = (props: Props) => {
  i18n.fallbacks = true
  i18n.translations = { en, fr }
  i18n.locale = localization.locale

  const { colors } = useTheme()


  const onHideEventButton = () => {
    props.onHideEvent()
  }

  const getFocusedColor = () => {
    
  }

  const style = StyleSheet.create({
    onTopPanel: {
      position: 'absolute',
      backgroundColor: colors.secondaryBackground,
      borderRadius: 10,
      padding: 10,
      width: '90%',
      height: '90%',
      alignSelf: 'center',
      opacity: 0.98,
    },
    TextColor: {
      color: colors.text,
      padding: 5,
    },
    InputColor: {
      color: colors.text,
      margin: 2,
      padding: 3,
      borderWidth: 2,
      borderColor: colors.textInputBackground,
      flexGrow: 1,
      borderRadius: 2,
    },
    ViewRow: {
      flexDirection: 'row',
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
  })

  return (
    <View style={style.onTopPanel}>
      <View style={style.ViewRow}>
        <Text style={style.TextColor}>{i18n.t('TitleLabel')}</Text>
        <TextInput style={style.InputColor}></TextInput>
      </View>
      <View style={style.ViewRow}>
        <Text style={style.TextColor}>{i18n.t('DescriptionLabel')}</Text>
        <TextInput value={i18n.t('DescriptionLabel')} style={style.InputColor} ></TextInput>
      </View>
      <ThemeSwitch />
      <Button title={'Close'} onPress={onHideEventButton} />
    </View>
  )
}

export default TaskPanelEditor
