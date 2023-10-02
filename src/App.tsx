import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Host} from 'react-native-portalize' 
import { GestureHandlerRootView } from 'react-native-gesture-handler'


//import StartScreen from './screens/StartScreen';
import Routes from 'navigation/Router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Host>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({


});

export default App;
