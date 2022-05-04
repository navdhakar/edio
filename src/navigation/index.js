import React from 'react';
import SelectScreen from '../screens/SelectScreen/SelectScreen';
import Authentication from '../components/Authentication/Authentication';
import Login from '../screens/Login/Login';
// import StudentSignup from '../screens/StudentSignup/index';
import StudentInfo from '../screens/StudentSignup/Studentinfo';
import EducationalInfo from '../screens/StudentSignup/Educationalinfo';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import MobileNo from '../screens/Login/Mobile';
import Otp from '../screens/Login/Otp';
import Homedrawer from '../screens/Home/Homedrawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bankdetails from '../screens/drawer/Bankdetails';
import Withdrawal from '../screens/drawer/Withdrawal';
import Bottomtabnav from './Home/Bottomtab';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootNavigation = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#00000090"
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250,
        }}
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          // gestureEnabled: true,
          // headerTitleAlign: 'center',
          // headerStyle: {
          //   backgroundColor: '#0080ff'
          // },
          // headerTintColor: '#ffffff',
          // headerTitleStyle: {
          //   fontSize: 25,
          //   fontWeight: 'bold'
          // }
        }}
        drawerContent={props => {
          return (
            <SafeAreaView style={{flex: 1}} {...props}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flex: 0.2,
                  marginLeft: 10,
                  marginBottom: '5%',
                  borderBottomWidth: 1,
                  borderBottomColor: '#20202014',
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',

                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode={'contain'}
                    source={require('../assets/icons/drawer_profile.png')}
                    style={{
                      width: '15%',
                      height: '50%',
                    }}
                  />
                  <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => props.navigation.closeDrawer()}>
                    <Image
                      resizeMode={'contain'}
                      source={require('../assets/icons/close.png')}
                      style={{
                        width: '180%',
                        height: '22%',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: '800',
                    flex: 1,
                    color: 'black',
                    fontStyle: 'normal',
                  }}>
                  Navdeep Dhakar
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'black',
                    flex: 0.5,
                  }}>
                  +91 9887224733
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    flex: 0.2,
                  }}
                />
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}>
        <Drawer.Screen
          name="Home"
          component={Homedrawer}
          options={{
            title: 'Home',
            drawerIcon: ({focused}) => (
              <Image
                resizeMode={'contain'}
                source={require('../assets/icons/drawer_icons/Vector.png')}
                style={{
                  width: '10%',
                  height: '80%',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Bankdetails"
          component={Bankdetails}
          options={{
            title: 'Bankdetails',
            drawerIcon: ({focused}) => (
              <Image
                resizeMode={'contain'}
                source={require('../assets/icons/drawer_icons/Vector-4.png')}
                style={{
                  width: '10%',
                  height: '80%',
                }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
