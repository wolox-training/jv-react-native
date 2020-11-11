import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Library from '@app/screens/Library';

const Stack = createStackNavigator();

const DetailBook = () => <Text>Hello from deatil</Text>;

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Library} options={{ title: 'Library' }} />
        <Stack.Screen name="Detail" component={DetailBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
