import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function DrawerScreen(props) {
  return (
    <DrawerContentScrollView style={{flex: 1}} {...props}>
      <SafeAreaView style={{flex: 1}}>
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
            <TouchableOpacity style={{flex: 1}}>
              <Image
                resizeMode={'contain'}
                source={require('../assets/icons/close.png')}
                style={{
                  width: '180%',
                  height: '20%',
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
    </DrawerContentScrollView>
  );
}
