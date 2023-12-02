import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

interface IItemDetails
  extends NativeStackScreenProps<RootStackParamList, 'ItemDetails'> {}

const ItemDetails = ({route}: IItemDetails) => {
  const {text, id} = route.params;
  return (
    <View style={{marginHorizontal: 20, paddingTop: 15}}>
      <Text
        style={{
          marginBottom: 15,
          textAlign: 'center',
          fontSize: 30,
          borderBottomWidth: 2,
          borderBottomColor: '#9E4770',
          paddingBottom: 5,
        }}>
        Item Details Page
      </Text>
      <Text style={{marginBottom: 10}}>item : {text}</Text>
      <Text style={{marginBottom: 10}}>id : {id}</Text>
      <Text>description: this is a details page for this item</Text>
    </View>
  );
};

export default ItemDetails;
