import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import DetailBook from '@screens/DetailBook';
import BackIcon from '@components/BackIcon';
import { stackNavigatorConfig } from '@config/navigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.Home}
          component={Library}
          options={{ ...stackNavigatorConfig, headerTitle: 'Library' }}
        />
        <Stack.Screen
          name={Routes.Detail}
          component={DetailBook}
          options={{
            ...stackNavigatorConfig,
            headerTitle: 'Book Detail',
            headerBackImage: BackIcon,
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
