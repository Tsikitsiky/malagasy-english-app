import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import MyComponent from './MyComponent';

storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('a word', () => <MyComponent word={'short'} meaning={'Fohy'} />)
  .add('multiple words', () => (
    <MyComponent word={'Sleep now'} meaning={"Matoria amin'izay"} />
  ));
