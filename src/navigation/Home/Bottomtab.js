import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
// import Camera from '../screens/Camera';
import Reportboard from '../../screens/Home/Reportboard';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const Bottomtabnav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Test Series'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name={'notebook'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Report Board'}
        component={Reportboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'document-attach-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Offer Letter'}
        component={() => <Text>Offer Letter</Text>}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name={'clipboard'} size={25} color={color} />
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
