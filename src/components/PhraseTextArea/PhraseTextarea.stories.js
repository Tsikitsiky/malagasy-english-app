import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import PhraseTextarea from './PhraseTextarea';

storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('an editable input', () => (
    <PhraseTextarea phrase={''} editable={true} onChange={evt => evt} />
  ))
  .add('longer phrase', () => (
    <PhraseTextarea
      phrase={'a word word'}
      editable={true}
      onChange={() => null}
    />
  ))
  .add('longer not editable', () => (
    <PhraseTextarea
      phrase={'a word worf word o a word worf wo'}
      editable={false}
      onChange={() => null}
    />
  ));
