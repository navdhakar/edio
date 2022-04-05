import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HomeTemplate from './HomeTemplate';
export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#660066" />
      <LinearGradient
        colors={['#660066', '#330066']}
        style={{
          flex: 0.08,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/icons/edio_home_logo.png')}
          resizeMode={'contain'}
          style={{
            width: '50%',
            height: '50%',

            flex: 1,
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: '700',
            fontFamily: 'Quicksand',
            fontStyle: 'normal',
            flex: 4,
          }}>
          Prove Your Talent
        </Text>
      </LinearGradient>
      <ScrollView
        style={styles.boxContainer}
        contentContainerStyle={{justifyContent: 'center'}}
        showsVerticalScrollIndicator={false}>
        <HomeTemplate type={'anytime'} />
        <HomeTemplate type={'physics'} />
        <HomeTemplate type={'chemistry'} />
        <HomeTemplate type={'maths'} />
        <HomeTemplate type={'physics'} />
        <HomeTemplate type={'chemistry'} />
        <HomeTemplate type={'maths'} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    flex: 1,
  },
  boxContainer: {
    flex: 0.8,
    height: Dimensions.get('window').height,
    width: '90%',
    marginTop: 20,
  },
  box: {
    flexDirection: 'row',
    marginBottom: '10%',
    width: '100%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: '#CA525929',
    borderLeftColor: '#CA5259D6',
    borderLeftWidth: 16,
  },
  profilePicture: {
    width: 150,
    height: 150,

    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#fff',
  },
  handle: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  likes: {
    alignItems: 'center',
  },
  leftSection: {
    marginLeft: '5%',
    flex: 4,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  rightSection: {
    marginLeft: '5%',
    flex: 2,
  },
  Rtop: {
    flex: 2,
    flexDirection: 'row',
  },
  Rbottom: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '90%',
    marginBottom: '20%',
    backgroundColor: '#C4C4C4',
    elevation: 5,
  },
});
