import {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  Alert,
} from 'react-native';

interface IInputField {
  handleAdd: (text: string) => void;
}

const InputField = ({handleAdd}: IInputField) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (val: string) => setInputValue(val);
  const handleAddingItem = () => {
    if (inputValue !== '') {
      handleAdd(inputValue);
      setInputValue('');
    } else Alert.alert('cant add an empty item');
  };
  return (
    <View style={style.containerStyle}>
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        style={style.InputStyle}
        placeholder="Add item here..."
        placeholderTextColor={'#631D76'}></TextInput>
      <Pressable onPress={handleAddingItem}>
        {() => (
          <View>
            <Text style={style.addStyle}>Add</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  InputStyle: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#631D76',
    borderRadius: 5,
    color: '#631D76',
    flex: 1,
  },
  addStyle: {
    marginLeft: 5,
    borderRadius: 5,
    color: '#FBFBFB',
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#631D76',
    alignSelf: 'stretch',
  },
});

export default InputField;
