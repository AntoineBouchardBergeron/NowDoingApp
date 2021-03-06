import React, { useState } from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { useTheme } from "../Providers/ThemeProvider";
import { useActiveActivity } from "../Providers/ActivityProvider";

type Props = {
  defaultValue: string;
  label: string;
  isOneLine: boolean;
  keyboardType: KeyboardTypeOptions | undefined;
  onTextChangeEvent: (text: string) => void;
};

const TextInput = (props: Props) => {
  const [text, setText] = useState<string>(props.defaultValue);
  const { colors } = useTheme();

  const { activity } = useActiveActivity();
  // const { activeClockRepresentation } = useClockRepresentation()

  function updateText(input: string) {
    setText((text) => input);
  }

  const style = StyleSheet.create({
    ViewStyle: {
      flex: 1,
      flexGrow: 1,
      flexDirection: "column",
      padding: 5,
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
    InputStyle: {
      width: "100%",
      alignItems: "flex-start",
      color: colors.text,
      marginBottom: 2,
      padding: 3,
      borderBottomWidth: 2,
      borderColor: colors.textInputBackground,
    },
    LabelStyle: {
      color: colors.clockColors[activity.id - 1],
      fontSize: 10,
    },
  });

  return (
    <View style={style.ViewStyle}>
      {props.label !== text && (
        <Text style={style.LabelStyle}>{props.label}</Text>
      )}
      <RNTextInput
        style={style.InputStyle}
        keyboardType={props.keyboardType}
        value={text}
        onFocus={() => {
          if (text === props.defaultValue) {
            setText((t) => "");
          }
        }}
        onChangeText={(input) => {
          setText((t) => input);
          props.onTextChangeEvent(input);
        }}
        selectTextOnFocus={true}
        autoCorrect={false}
        multiline={!props.isOneLine}
      />
    </View>
  );
};

export default TextInput;
