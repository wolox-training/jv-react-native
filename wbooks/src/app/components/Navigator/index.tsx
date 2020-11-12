import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import DetailBook from '@screens/DetailBook';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={Library} options={{ title: 'Library' }} />
        <Stack.Screen name={Routes.Detail} component={DetailBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
