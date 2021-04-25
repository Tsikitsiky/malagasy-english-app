import * as React from 'react';
import {StyleSheet, Text, TouchableHighlight, View, Image} from 'react-native';

const styles = StyleSheet.create({
  TextWrapper: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    justifyContent: 'center',
    maxWidth: 90,
    height: 40,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default function NextButton({onPress}) {
  return (
    <View style={styles.TextWrapper}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor="transparent">
        <View style={styles.container}>
          <Text style={styles.text}>en</Text>
          <Image source={require('../../assets/arrows.png')} />
          <Text style={styles.text}>ma</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
