import {Alert, StyleSheet, Text, View} from 'react-native';
import List from '../components/list';
import InputField from '../components/inputField';
import {useState} from 'react';
import {IItem} from '../components/item';

const Home = () => {
  const [ListItems, setListItems] = useState<IItem[]>([]);

  const handleAdd = (text: string) => {
    setListItems(prev => [...prev, {text, id: Math.random()}]);
  };

  const handleDelete = (id: number) => {
    setListItems(prev => prev.filter(item => item.id !== id));
    Alert.alert('Item Deleted');
  };

  return (
    <View style={style.homeStyle}>
      <Text style={style.titleStyle}>TODO App</Text>
      <InputField handleAdd={handleAdd} />
      <List handleDelete={handleDelete} ListItem={ListItems} />
    </View>
  );
};

const style = StyleSheet.create({
  homeStyle: {
    alignItems: 'center',
    width: '85%',
  },
  titleStyle: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 15,
    color: '#9E4770',
  },
});

export default Home;
