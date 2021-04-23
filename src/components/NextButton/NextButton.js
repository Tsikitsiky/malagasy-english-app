import * as React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
  TextWrapper: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    justifyContent: 'center',
    maxWidth: 90,
    height: 40,
  },
  TextWrapperDisabled: {
    backgroundColor: '#fff',
    width: 90,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    borderColor: '#06B6D4',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  whiteText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  blueText: {
    color: '#06B6D4',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default function NextButton({text, onPress, disabled}) {
  return (
    <View style={disabled ? styles.TextWrapperDisabled : styles.TextWrapper}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor="transparent"
        disabled={disabled}>
        <Text style={disabled ? styles.blueText : styles.whiteText}>
          {text}
        </Text>
      </TouchableHighlight>
    </View>
  );
}
