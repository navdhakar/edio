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

export default function Withdrawal({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/withdraw_icon.png')}
        resizeMode={'contain'}
        style={{
          width: '70%',
          height: '70%',

          flex: 0.3,
        }}
      />
      <Text style={styles.text1}>
        User verification required to Withdraw cash
      </Text>
      <Text style={styles.text2}>
        As per government guidelines, we need a valid proof to allow cash
        transactions on EDIO
      </Text>
      <Text style={styles.text3}>
        This step is taken to prevent fraud/cheating on EDIO.
      </Text>
      <View style={{flex: 0.2, width: '100%'}}>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, {justifyContent: 'center'}]}
            onPress={() => navigation.navigate('StudentInfo')}>
            <LinearGradient
              colors={['#660066CC', '#660066CC']}
              style={[styles.signIN, {justifyContent: 'center'}]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Not Now
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, {justifyContent: 'center'}]}
            onPress={() => navigation.navigate('Documentverification')}>
            <LinearGradient
              colors={['#660066CC', '#660066CC']}
              style={[styles.signIN, {justifyContent: 'center'}]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Verify
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 24,
    color: 'black',
    flex: 0.1,
    marginTop: 10,
  },
  text2: {
    width: '85%',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#20202099',
    flex: 0.1,
  },
  text3: {
    width: '85%',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 14,
    color: 'black',
    flex: 0.2,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signIN: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 20,
  },
  signIn: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
