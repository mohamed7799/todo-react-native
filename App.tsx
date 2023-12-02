import React from 'react';

import Home from './screens/home';
import 'react-native-gesture-handler';
import ItemDetails from './screens/itemDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ItemDetails: {text: string; id: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetails}
          initialParams={{text: '', id: 0}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
