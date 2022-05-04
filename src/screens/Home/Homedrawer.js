import React from 'react';
import SelectScreen from '../SelectScreen/SelectScreen';
import Authentication from '../../components/Authentication/Authentication';
import Login from '../Login/Login';
// import StudentSignup from '../screens/StudentSignup/index';
import StudentInfo from '../StudentSignup/Studentinfo';
import EducationalInfo from '../StudentSignup/Educationalinfo';

import MobileNo from '../Login/Mobile';
import Otp from '../Login/Otp';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bankdetails from '../drawer/Bankdetails';
import Withdrawal from '../drawer/Withdrawal';
import Bottomtabnav from '../../navigation/Home/Bottomtab';
import Documentverification from '../drawer/Documentverification';
import Panverification from '../drawer/Panverification';
import Adhaarverification from '../drawer/Adhaarverification';
import Verificationstatus from '../drawer/Verificationstatus';
import Linkbank from '../drawer/Bank/Linkbank';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();

const Homedrawer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Login} />
      <Stack.Screen name="Select" component={SelectScreen} />
      {/* <Stack.Screen name="Studentsignup" component={StudentSignup} /> */}
      <Stack.Screen name="Bottomtabnav" component={Bottomtabnav} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="MobileNo" component={MobileNo} />
      <Stack.Screen name="StudentInfo" component={StudentInfo} />
      <Stack.Screen name="EducationalInfo" component={EducationalInfo} />
      <Stack.Screen name="Bankdetails" component={Bankdetails} />
      <Stack.Screen name="Withdrawal" component={Withdrawal} />
      <Stack.Screen name="Panverification" component={Panverification} />
      <Stack.Screen name="Adhaarverification" component={Adhaarverification} />
      <Stack.Screen name="Verificationstatus" component={Verificationstatus} />
      <Stack.Screen name="Linkbank" component={Linkbank} />

      <Stack.Screen
        name="Documentverification"
        component={Documentverification}
      />
    </Stack.Navigator>
  );
};

export default Homedrawer;
