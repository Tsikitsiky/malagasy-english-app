import * as React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.78,
  },
});

export default function SectionHeading({text}) {
  return <Text style={styles.text}>{text}:</Text>;
}
