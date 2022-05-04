import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Verificationstatus({navigation}) {
  const [verificationstatus, setverificationstatus] = useState('processing');
  function Text1() {
    if (verificationstatus == 'processing') {
      return (
        <Text style={styles.text1}>
          KYC Details have been uploaded successfully.
        </Text>
      );
    } else if (verificationstatus == 'processed') {
      return <Text style={styles.text1}>KYC veridication successfull.</Text>;
    } else if (verificationstatus == 'failed') {
      return <Text style={styles.text1}>Verification Failed!</Text>;
    }
  }
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
        <TouchableOpacity
          style={{flex: 0.5}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/Back.png')}
            resizeMode={'contain'}
            style={{
              width: '70%',
              height: '35%',
              marginLeft: 1,
            }}
          />
        </TouchableOpacity>
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
        source={require('../../assets/icons/timer.png')}
        resizeMode={'contain'}
        style={{
          width: '30%',
          height: '40%',

          flex: 0.2,
        }}
      />
      <Text1 />
      <Text style={styles.text2}>
        As per government guidelines, we need a valid proof to allow cash
        transactions on EDIO
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 20,
    color: 'black',
    marginTop: 1,
  },
  text2: {
    width: '85%',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#20202099',

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
