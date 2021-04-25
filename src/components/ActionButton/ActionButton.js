import * as React from 'react';
import {StyleSheet, Image, TouchableHighlight, View, Text} from 'react-native';

const styles = StyleSheet.create({
  Wrapper: {
    justifyContent: 'center',
  },
  icon: {
    height: 12,
    width: 16,
  },
  text: {},
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#06D440',
  },
});

export default function NextButton({text, icon, onPress}) {
  let textColor = '#06B6D4';
  if (text === 'Correct') {
    textColor = '#06D440';
  } else if (text === 'Wrong') {
    textColor = '#D4068E';
  }
  return (
    <View style={styles.Wrapper}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor="transparent">
        <View style={styles.group}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: textColor,
              paddingRight: 16,
              lineHeight: 19.36,
            }}>
            {text}
          </Text>
          <Image style={styles.icon} source={icon} resizeMode="contain" />
        </View>
      </TouchableHighlight>
    </View>
  );
}
