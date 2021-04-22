import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';
import {action} from '@storybook/addon-actions';
import {Text} from 'react-native';

storiesOf('NextButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('add', () => (
    <NextButton onPress={() => action('add click')}>
      <Text>Add</Text>
    </NextButton>
  ))
  .add('next', () => (
    <NextButton onPress={() => action('add click')}>
      <Text>Next</Text>
    </NextButton>
  ));
//   .add('longest', () => (
//     <NextButton ext="Add" onPress={() => action('add click')} />
//   ));
