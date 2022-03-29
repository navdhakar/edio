import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Homescreen</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#CA5259',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
              }}>
              Physics
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image source={require('../../assets/icons/cardlive.png')} />
            <Image
              source={require('../../assets/icons/cardatom.png')}
              style={{marginTop: 60}}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#CA5259',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
              }}>
              Physics
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image source={require('../../assets/icons/cardlive.png')} />
            <Image
              source={require('../../assets/icons/cardatom.png')}
              style={{marginTop: 60}}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#CA5259',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
              }}>
              Physics
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image source={require('../../assets/icons/cardlive.png')} />
            <Image
              source={require('../../assets/icons/cardatom.png')}
              style={{marginTop: 60}}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#CA5259',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
              }}>
              Physics
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image source={require('../../assets/icons/cardlive.png')} />
            <Image
              source={require('../../assets/icons/cardatom.png')}
              style={{marginTop: 60}}
            />
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
