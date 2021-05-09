import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import Categories from '../../data/categories.json';

import List from './List';

const cat = [
  {
    id: '###greet###',
    name: {
      en: 'Greeting',
      mg: 'Fiarahabana',
    },
    phrasesIds: ['greet#1', 'greet#2'],
  },
];

function Click() {
  console.log('You clicked on a listItem');
}

console.log('cat', cat[0].name.en);

storiesOf('List', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List C', () => (
    <List
      heading="Select Category"
      items={Categories.categories}
      btnText="Learn"
      onBtnPress={Click}
    />
  ));
