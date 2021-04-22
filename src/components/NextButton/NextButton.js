import * as React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: '#06B6D4',
    padding: 5,
    color: '#fff',
  },
});

export default function NextButton({children, onPress}) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}
