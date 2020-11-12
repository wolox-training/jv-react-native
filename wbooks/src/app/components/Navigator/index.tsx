import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import DetailBook from '@screens/DetailBook';
import Header from '@components/Header';
import BackIcon from '@components/BackIcon';
import TextHeader from '@components/TextHeader';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.Home}
          component={Library}
          options={{
            headerBackground: () => <Header />,
            headerTitle: () => <TextHeader title="Library" />
          }}
        />
        <Stack.Screen
          name={Routes.Detail}
          component={DetailBook}
          options={{
            headerBackground: () => <Header />,
            headerTitle: () => <TextHeader title="Book Detail" />,
            headerBackImage: () => <BackIcon />,
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
