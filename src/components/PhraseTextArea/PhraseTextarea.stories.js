import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import PhraseTextarea from './PhraseTextarea';
function Edit() {
  const [text, setText] = React.useState('');
  return (
    <PhraseTextarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}
storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('an editable input', () => <Edit />)
  .add('not editable phrase', () => (
    <PhraseTextarea phrase={'a word word'} editable={false} />
  ))
  .add('longer not editable', () => (
    <PhraseTextarea
      phrase={
        'a word worf word o a word worf wo a word worf word o a word worf wo a word worf word o a word worf wo'
      }
      editable={false}
    />
  ));
