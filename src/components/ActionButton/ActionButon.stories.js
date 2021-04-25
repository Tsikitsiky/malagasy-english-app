import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ActionButton from './ActionButton';

function Click(params) {
  console.log('You clicked', params);
}

storiesOf('ActionButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Action Buttons', () => (
    <>
      <ActionButton
        text="Learn"
        icon={require('../../assets/learn.png')}
        onPress={() => Click('Learn')}
      />
      <ActionButton
        text="Wrong"
        onPress={() => Click('Wrong')}
        icon={require('../../assets/wrong.png')}
      />
      <ActionButton
        text="Correct"
        onPress={() => Click('Correct')}
        icon={require('../../assets/checkg.png')}
      />
      <ActionButton
        text="Pick"
        onPress={() => Click('Pick')}
        icon={require('../../assets/learn.png')}
      />
    </>
  ));
