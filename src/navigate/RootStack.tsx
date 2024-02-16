import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home/home.tsx";
import ListImageScreen from "../screens/ListImage/listImage.tsx";

export const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name={'ListImage'} component={ListImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
