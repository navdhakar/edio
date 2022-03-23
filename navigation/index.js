import React from 'react';
import SelectScreen from '../screens/SelectScreen/SelectScreen';
import Authentication from '../components/Authentication/Authentication';
import Login from '../screens/Login/Login';
import StudentSignup from '../screens/StudentSignup/index';
import MobileNo from '../screens/Login/Mobile';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Bottomtabnav from './Home/Bottomtab';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Login} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Studentsignup" component={StudentSignup} />
        <Stack.Screen name="Bottomtabnav" component={Bottomtabnav} />
        <Stack.Screen name="MobileNo" component={MobileNo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
