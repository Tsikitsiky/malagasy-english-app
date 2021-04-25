import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import LanguageSwitcher from './LanguageSwitcher';

function Click() {
  console.log('You switched language');
}

storiesOf('LanguageSwitcher', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('test', () => <LanguageSwitcher onPress={() => Click()} />);
