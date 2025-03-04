import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserProvider} from './src/user/Provider/UserProvider.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {Loader} from './src/pages/Loader/loader-one.tsx';
import {Main} from './src/pages/Main/main.tsx';
import {OnBoards} from './src/pages/OnBoards/on-board-one.tsx';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animationEnabled: false}}>
          <Stack.Screen name="Loading" component={Loader} />
          <Stack.Screen name="OnBoards" component={OnBoards} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
