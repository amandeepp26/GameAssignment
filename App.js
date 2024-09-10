// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlayerList from './src/Screens/PlayerList';
import PlayerHistory from './src/Screens/PlayerHistory';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Players" component={PlayerList} />
        <Stack.Screen name="PlayerHistory" component={PlayerHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
