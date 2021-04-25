import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ToolButton from './ToolButton';

function Click(params) {
  console.log('You clicked', params);
}

storiesOf('ToolButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Tool Buttons', () => (
    <>
      <ToolButton
        icon={require('../../assets/add.png')}
        onPress={() => Click('add')}
      />
      <ToolButton
        icon={require('../../assets/check.png')}
        onPress={() => Click('Learn')}
      />
      <ToolButton
        icon={require('../../assets/double-check.png')}
        onPress={() => Click('Learnt')}
      />
      <ToolButton
        icon={require('../../assets/left-angle.png')}
        onPress={() => Click('back')}
      />
      <ToolButton
        icon={require('../../assets/mode.png')}
        onPress={() => Click('Mode')}
      />
    </>
  ));
