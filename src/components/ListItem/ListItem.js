import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});

export default function ListItem({
  phrase,
  btnText,
  onPress,
  rightAnswer,
  clicked = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{phrase}</Text>
      {!clicked ? (
        <ActionButton
          onPress={onPress}
          text={btnText}
          icon={require('../../assets/learn.png')}
        />
      ) : (
        <ActionButton
          onPress={onPress}
          text={rightAnswer ? 'Correct' : 'Wrong'}
          icon={
            rightAnswer
              ? require('../../assets/checkg.png')
              : require('../../assets/wrong.png')
          }
        />
      )}
    </View>
  );
}
