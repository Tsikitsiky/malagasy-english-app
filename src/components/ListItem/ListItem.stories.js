import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

function Click() {
  const [clicked, setClicked] = React.useState(false);
  console.log('clicked', clicked);
  return (
    <>
      <ListItem
        phrase="Phrase"
        btnText="Pick"
        onPress={() => setClicked(!clicked)}
        rightAnswer={true}
        clicked={clicked}
      />
    </>
  );
}

storiesOf('ListItem', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List', () => <Click />)
  .add('categories', () => (
    <>
      <ListItem
        phrase="All"
        btnText="Learn"
        onPress={() => console.log('Go to next list page')}
      />
      <ListItem
        phrase="All"
        btnText="Learn"
        onPress={() => console.log('Go to next list page')}
      />
    </>
  ));
