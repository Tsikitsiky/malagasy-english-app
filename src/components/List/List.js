import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    marginTop: 16,
  },
  separator: {
    flex: 1,
    height: 1,
    width: '100%',
    backgroundColor: '#E5E5E5',
  },
});

const Separator = () => <View style={styles.separator} />;

export default function List({heading, items, btnText, onBtnPress}) {
  return (
    <View>
      <SectionHeading text={heading} />
      <FlatList
        style={styles.listContainer}
        data={items}
        renderItem={({item}) => (
          <ListItem
            phrase={item.name.en}
            btnText={btnText}
            onPress={onBtnPress}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}
