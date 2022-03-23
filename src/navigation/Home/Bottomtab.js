import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
// import Camera from '../screens/Camera';
import Reportboard from '../../screens/Home/Reportboard';
import Entypo from 'react-native-vector-icons/Entypo';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const Bottomtabnav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#C4C4C4',
		 
        },
        activeTintColor: '#000',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25}  />
          ),
        }}
      />
      <Tab.Screen
        name={'Summary'}
        component={Reportboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign
              name={'piechart'}
              size={25}
             
            />
          ),
        }}
      />
      <Tab.Screen
        name={'More'}
        component={() => <Text>Offer Letter</Text>}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name={'menu'} size={25} />
          ),
        }}
      />

      {/* <Tab.Screen
        name={'Inbox'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Bottomtabnav;
