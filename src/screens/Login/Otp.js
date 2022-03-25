import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useTheme} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const signinvalidationSchema = Yup.object().shape({
  code1: Yup.string().required().min(1, 'not strong password'),
  code2: Yup.string().required().min(1, 'not strong password'),
  code3: Yup.string().required().min(1, 'not strong password'),
  code4: Yup.string().required().min(1, 'not strong password'),
});
export default function Otp({navigation}) {
  const {colors} = useTheme();
  const [focus, setfocus] = useState(false);
  const [verify, setverify] = useState(false);
  const customVerify = verify ? styles.validverifystyle : styles.verifystyle;
  const customStyle = focus ? styles.actionfocus : styles.action;
  const code1 = useRef();
  const code2 = useRef();
  const code3 = useRef();
  const code4 = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/icons/edio_logo.png')} />
      </View>
      <View>
        <Text style={[styles.text_footer]}>Verify phone number</Text>
      </View>
      <Formik
        initialValues={{code1: '', code2: '', code3: '', code4: ''}}
        validationSchema={signinvalidationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}>
        {props => (
          <View style={{flexDirection: 'row', width: '80%'}}>
            <View style={customStyle} onFocus={() => setfocus(true)}>
              <TouchableOpacity style={styles.mobilenoani}>
                <TextInput
                  placeholderTextColor="#666666"
                  keyboardType="numeric"
                  style={[
                    styles.textInput1,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('code1')}
                  value={props.values.code1}
                  maxLength={1}
                  ref={code1}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    code2.current.focus();
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={customStyle} onFocus={() => setfocus(true)}>
              <TouchableOpacity style={styles.mobilenoani}>
                <TextInput
                  placeholderTextColor="#666666"
                  keyboardType="numeric"
                  style={[
                    styles.textInput2,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('code2')}
                  value={props.values.code2}
                  maxLength={1}
                  ref={code2}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    code3.current.focus();
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={customStyle} onFocus={() => setfocus(true)}>
              <TouchableOpacity style={styles.mobilenoani}>
                <TextInput
                  placeholderTextColor="#666666"
                  keyboardType="numeric"
                  style={[
                    styles.textInput3,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('code3')}
                  value={props.values.code3}
                  maxLength={1}
                  ref={code3}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    code4.current.focus();
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={customStyle} onFocus={() => setfocus(true)}>
              <TouchableOpacity
                style={styles.mobilenoani}
                onPress={() => {
                  console.log(placeholder_value);
                }}
                onFocus={() => {
                  console.log(placeholder_value);
                }}>
                <TextInput
                  placeholderTextColor="#666666"
                  keyboardType="numeric"
                  style={[
                    styles.textInput4,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('code4')}
                  value={props.values.code4}
                  maxLength={1}
                  ref={code4}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <Text style={{paddingLeft: 10}}>
        Enter the 4 digit OTP send to +91 9075839282
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 16,
          fontWeight: '600',
          paddingTop: 20,
        }}>
        Resend OTP in{' '}
        <Text style={{fontWeight: '600', color: 'black'}}>00:30</Text>
      </Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.signIn, {justifyContent: 'center'}]}
          onPress={() => navigation.navigate('StudentInfo')}>
          <LinearGradient
            colors={['#660066CC', '#660066CC']}
            style={[customVerify, {justifyContent: 'center'}]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              VERIFY
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingBottom: 30,
    paddingTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signin: {
    alignContent: 'flex-end',
    color: '#3A5898',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 20,
  },
  action: {
    flex: 1,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#660066',
    borderRadius: 10,
    height: 60,
  },
  actionfocus: {
    flex: 1,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 10,
    borderWidth: 1,
    borderLeftWidth: 3,
    borderColor: '#660066',
    borderRadius: 10,
    height: 60,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  mobilenoani: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    flex: 1,
    fontSize: 24,
    color: 'black',
    paddingLeft: 10,
  },
  textInput1: {
    flex: 6,
    color: '#660066',
    fontSize: 24,
  },
  textInput1focus: {
    backgroundColor: 'green',
    borderColor: 'red',
  },
  textInput2: {
    flex: 6,
    color: '#660066',
    fontSize: 24,
  },
  textInput3: {
    flex: 6,
    color: '#660066',
    fontSize: 24,
  },
  textInput4: {
    flex: 6,
    color: '#660066',
    fontSize: 24,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    marginTop: 10,
    alignItems: 'flex-end',
    width: '100%',
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 20,
  },
  signIN: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  validverifystyle: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    color: 'grey',
  },
  verifystyle: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  othersignin: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: 10,
  },
  ImageIconStyle: {
    margin: 10,
    paddingRight: 20,
    height: 25,
    width: 25,
  },
  innercontainer: {
    alignItems: 'center',
  },
  ImageIconInst: {
    height: 250,
    width: 250,
  },
  studenticon: {
    alignItems: 'center',
  },
});
