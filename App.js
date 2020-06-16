import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/redux-store';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gallery from './components/Gallery';
import PhotoItem from './components/PhotoItem';
import Photo from './components/Photo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Gallery} options={screenStyle}/>
          <Stack.Screen name="Photo" component={Photo} options={screenStyle}/>
          <Stack.Screen name="PhotoItem" component={PhotoItem} options={screenStyle}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const screenStyle = {
  headerStyle: {
    backgroundColor: 'rgb(14, 119, 190)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default App;
