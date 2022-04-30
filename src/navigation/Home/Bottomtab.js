import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
// import Camera from '../screens/Camera';
import Reportboard from '../../screens/Home/Reportboard';
import Entypo from 'react-native-vector-icons/Entypo';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

// import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();
const tab_icon = [
  require('../../assets/icons/tab_home.png'),
  require('../../assets/icons/tab_summary.png'),
  require('../../assets/icons/tab_rewards.png'),
];
const Bottomtabnav = () => {
  function MyTabBar({state, descriptors, navigation}) {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#660066', '#330066']}
        style={{
          flex: 0.07,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({name: route.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    color: isFocused ? '#fff' : '#222',
                    width: '70%',
                    height: '70%',
                  }}
                  source={tab_icon[index]}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </LinearGradient>
    );
  }
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/icons/tab_home.png')}
              resizeMode={'contain'}
              style={{
                width: '60%',
                height: '60%',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Summary'}
        component={Reportboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/icons/tab_summary.png')}
              resizeMode={'contain'}
              style={{
                width: '60%',
                height: '60%',
              }}
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
            <Image
              source={require('../../assets/icons/tab_rewards.png')}
              resizeMode={'contain'}
              style={{
                width: '60%',
                height: '60%',
              }}
            />
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
