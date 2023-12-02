import React from 'react';

import {StyleSheet, View} from 'react-native';
import Home from './screens/home';

function App(): JSX.Element {
  return (
    <View style={styles.AppContainer}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    paddingTop: 30,
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

export default App;
