import {NavigationProp} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export interface IItem {
  text: string;
  id: number;
}

interface IItemProp {
  text: string;
  id: number;
  handleDelete: (id: number) => void;
  navigation?: NavigationProp<any, any>;
}

const Item = ({text, id, handleDelete, navigation}: IItemProp) => {
  return (
    <View style={style.itemStyle}>
      <Pressable
        style={style.textStyle}
        onPress={() => navigation?.navigate('ItemDetails', {text, id})}>
        {() => <Text>{text}</Text>}
      </Pressable>
      <Pressable>
        {() => (
          <Icon
            onPress={() => handleDelete(id)}
            name="trash"
            size={20}
            color={'#9E4770'}></Icon>
        )}
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  itemStyle: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9E4770',
    fontWeight: '400',
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
  },
  textStyle: {
    flex: 1,
    fontSize: 15,
  },
});

export default Item;
