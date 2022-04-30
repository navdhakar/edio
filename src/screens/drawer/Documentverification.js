import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Documentverification() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#660066', '#330066']}
        style={{
          flex: 0.08,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/icons/Back.png')}
          resizeMode={'contain'}
          style={{
            width: '30%',
            height: '30%',
            marginLeft: 1,
            flex: 0.5,
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: '700',
            fontFamily: 'Quicksand',
            fontStyle: 'normal',
            flex: 3,
          }}>
          Document Verification
        </Text>
      </LinearGradient>
      <Image
        source={require('../../assets/icons/id_verification.png')}
        resizeMode={'contain'}
        style={{
          width: '30%',
          height: '40%',
          marginLeft: 20,
          flex: 0.2,
        }}
      />

      <Text style={styles.text1}>
        Select a document for Identity verification
      </Text>
      <Text style={styles.text2}>
        As per government guidelines, we need a valid proof to allow cash
        transactions on EDIO
      </Text>
      <TouchableOpacity style={styles.pancard}>
        <Text style={styles.pan_adhaartext}>Pan Card</Text>
        <Image
          source={require('../../assets/icons/cardright.png')}
          resizeMode={'contain'}
          style={{
            width: '5%',
            height: '20%',

            flex: 0.2,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.adhaar}>
        <Text style={styles.pan_adhaartext}>Adhaar Card</Text>
        <Image
          source={require('../../assets/icons/cardright.png')}
          resizeMode={'contain'}
          style={{
            width: '20%',
            height: '20%',

            flex: 0.2,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'flex-start',
  },
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 16,
    color: 'black',
    marginTop: 1,
    marginLeft: 20,
  },
  text2: {
    width: '85%',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#20202099',
    marginLeft: 20,
    marginTop: 10,
  },
  pancard: {
    marginTop: 20,
    flex: 0.08,
    flexDirection: 'row',
    borderBottomColor: '#20202014',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  adhaar: {
    flex: 0.08,
    flexDirection: 'row',
    borderBottomColor: '#20202014',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  pan_adhaartext: {
    width: '85%',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    flex: 0.8,
  },
});
