import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Homescreen</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.leftSection}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>13 jun 22</Text>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
              }}
            />
            <Text style={{fontWeight: 'bold'}}>7pm - 8pm</Text>
          </View>
          <View
            style={{
              marginLeft: '15%',
              marginTop: '5%',
              marginBottom: '5%',
              borderRightColor: 'grey',
              borderRightWidth: 1,
            }}
          />
          <View style={styles.rightSection}>
            <View style={styles.Rtop}>
              <Text style={{fontWeight: 'bold'}}>Subject name</Text>
              <Text style={{fontWeight: 'bold', marginLeft: '10%'}}>
                HH:MM:SS
              </Text>
            </View>
            <View style={styles.Rbottom}>
              <Text style={{fontWeight: 'bold'}}>Test series Poster</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.leftSection}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>13 jun 22</Text>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
              }}
            />
            <Text style={{fontWeight: 'bold'}}>7pm - 8pm</Text>
          </View>
          <View
            style={{
              marginLeft: '15%',
              marginTop: '5%',
              marginBottom: '5%',
              borderRightColor: 'grey',
              borderRightWidth: 1,
            }}
          />
          <View style={styles.rightSection}>
            <View style={styles.Rtop}>
              <Text style={{fontWeight: 'bold'}}>Subject name</Text>
              <Text style={{fontWeight: 'bold', marginLeft: '10%'}}>
                HH:MM:SS
              </Text>
            </View>
            <View style={styles.Rbottom}>
              <Text style={{fontWeight: 'bold'}}>Test series Poster</Text>
            </View>
          </View>
        </View>
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
    height: '40%',

    backgroundColor: 'white',
    elevation: 5,
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
    flex: 2,
    justifyContent: 'center',
  },
  rightSection: {
    marginLeft: '5%',
    flex: 10,
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
