// components/Task.js
import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({word, meaning}) {
  return (
    <SafeAreaView>
      <Text>{word}</Text>
      <Text>{meaning}</Text>
    </SafeAreaView>
  );
}
