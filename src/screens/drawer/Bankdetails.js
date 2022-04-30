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

export default function Bankdetails({navigation}) {
  const [detail, setdetail] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#660066', '#330066']}
        style={{
          flex: 0.08,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          flex: 0.2,
        }}>
        <Image
          source={require('../../assets/icons/Back.png')}
          resizeMode={'contain'}
          style={{
            width: '30%',
            height: '30%',

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
          Bank details
        </Text>
      </LinearGradient>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.withdrawal}>Withdrawal Methods </Text>
        <TouchableOpacity
          style={{flex: 0.2}}
          onPress={() => setdetail(!detail)}>
          <Image
            source={require('../../assets/icons/detail.png')}
            resizeMode={'contain'}
            style={{
              width: '60%',
              height: '60%',
            }}
          />
        </TouchableOpacity>
        {detail ? (
          <View style={{flex: 0.9}}>
            <Text style={{fontSize: 12}}>
              To withdraw the rewards link a paymnet method
            </Text>
          </View>
        ) : null}
      </View>
      <View style={{flex: 2}}>
        <View style={styles.payment}>
          <Image
            source={require('../../assets/icons/amazonpay.png')}
            resizeMode={'contain'}
            style={{
              width: '60%',
              height: '60%',

              flex: 0.2,
            }}
          />
          <Text style={styles.payment_methods}>Amazon Pay</Text>
          <TouchableOpacity
            style={{flex: 0.2}}
            onPress={() => navigation.navigate('Withdrawal')}>
            <Image
              source={require('../../assets/icons/link_bank.png')}
              resizeMode={'contain'}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.line} /> */}
        <View style={styles.payment}>
          <Image
            source={require('../../assets/icons/upi.png')}
            resizeMode={'contain'}
            style={{
              width: '60%',
              height: '60%',

              flex: 0.2,
            }}
          />
          <Text style={styles.payment_methods}>UPI</Text>
          <TouchableOpacity style={{flex: 0.2}}>
            <Image
              source={require('../../assets/icons/link_bank.png')}
              resizeMode={'contain'}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.payment}>
          <Image
            source={require('../../assets/icons/bank.png')}
            resizeMode={'contain'}
            style={{
              width: '60%',
              height: '60%',

              flex: 0.2,
            }}
          />
          <Text style={styles.payment_methods}>Bank Account</Text>
          <TouchableOpacity style={{flex: 0.2}}>
            <Image
              source={require('../../assets/icons/link_bank.png')}
              resizeMode={'contain'}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.payment}>
          <Image
            source={require('../../assets/icons/paytm.png')}
            resizeMode={'contain'}
            style={{
              width: '60%',
              height: '60%',

              flex: 0.2,
            }}
          />
          <Text style={styles.payment_methods}>Paytm</Text>
          <TouchableOpacity style={{flex: 0.2}}>
            <Image
              source={require('../../assets/icons/link_bank.png')}
              resizeMode={'contain'}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
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

    flex: 1,
  },
  payment: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#20202014',
    borderBottomWidth: 1,
    flex: 0.09,
    marginLeft: 10,
    marginTop: 10,
  },
  payment_methods: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    flex: 0.7,
  },
  line: {
    borderBottomColor: '#20202014',
    borderBottomWidth: 1,
    flex: 0.06,
  },
  withdrawal: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
  },
});
