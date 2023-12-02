import {FlatList, StyleSheet, View} from 'react-native';
import Item, {IItem} from './item';

interface IList {
  ListItem: IItem[];
  handleDelete: (id: number) => void;
  navigation: any;
}

const List = ({ListItem, handleDelete, navigation}: IList) => {
  return (
    <View style={style.listStyle}>
      <FlatList
        data={ListItem}
        renderItem={itemData => (
          <Item
            handleDelete={handleDelete}
            text={itemData.item.text}
            key={itemData.item.id}
            id={itemData.item.id}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listStyle: {
    width: '100%',
  },
});

export default List;
