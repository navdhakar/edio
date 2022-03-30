import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import HomeTemplate from './HomeTemplate';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Homescreen</Text>
      <View style={styles.boxContainer}>
        <HomeTemplate type={'physics'} />
        <HomeTemplate type={'chemistry'} />
        <HomeTemplate type={'maths'} />
      </View>
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
    flex: 2,
    height: Dimensions.get('window').height,
    width: '90%',
    justifyContent: 'center',
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
