import HeaderMain from 'src/Components/HeaderMain/HeaderMain';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: HeaderMain, headerTitle: 'Home'}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
