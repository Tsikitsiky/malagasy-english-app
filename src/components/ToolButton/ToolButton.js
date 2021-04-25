import * as React from 'react';
import {StyleSheet, Image, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06B6D4',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default function ToolButton({onPress, icon}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor="transparent">
        <Image source={icon} resizeMode="contain" />
      </TouchableHighlight>
    </View>
  );
}
