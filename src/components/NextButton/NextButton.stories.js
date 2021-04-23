import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';

function Click(params) {
  console.log('You clicked', params);
}

storiesOf('NextButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('add', () => <NextButton onPress={() => Click('Add')} text="Add" />)
  .add('add disabled', () => (
    <NextButton onPress={() => Click()} text="Add" disabled={true} />
  ))
  .add('next', () => <NextButton onPress={() => Click('Next')} text="Next" />);
//   .add('longest', () => (
//     <NextButton ext="Add" onPress={() => action('add click')} />
//   ));
