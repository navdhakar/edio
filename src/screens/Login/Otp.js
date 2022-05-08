import React, { useState, useRef, useEffect } from 'react';
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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const RESEND_OTP_TIME_LIMIT = 30;
const AUTO_SUBMIT_OTP_TIME_LIMIT = 4;

let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;
const signinvalidationSchema = Yup.object().shape({
  code1: Yup.string().required().min(1, 'not strong password'),
  code2: Yup.string().required().min(1, 'not strong password'),
  code3: Yup.string().required().min(1, 'not strong password'),
  code4: Yup.string().required().min(1, 'not strong password'),
});
export default function Otp({ navigation }) {
  const { colors } = useTheme();
  const [focus, setfocus] = useState(false);
  const [verify, setverify] = useState(false);
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [submittingOtp, setSubmittingOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);
  const inputbox = [firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef];
  const customVerify = verify ? styles.validverifystyle : styles.verifystyle;
  const customStyle = focus ? styles.actionfocus : styles.action;
  const refCallback = (textInputRef) => (node) => {
    textInputRef.current = node;
  };
  const firstTextInputRef = useRef();
  const secondTextInputRef = useRef();
  const thirdTextInputRef = useRef();
  const fourthTextInputRef = useRef();
  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };
  const onOtpChange = (index) => {
    return (value) => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        }
      }
    };
  };
  const onOtpKeyPress = (index) => {
    return ({ nativeEvent: { key: value } }) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/icons/edio_logo.png')} />
      </View>
      <View>
        <Text style={[styles.text_footer]}>Verify phone number</Text>
      </View>
      <Formik
        initialValues={{ code1: '', code2: '', code3: '', code4: '' }}
        validationSchema={signinvalidationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View style={{ flexDirection: 'row', width: '80%' }}>
            {[firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef].map(
              (textInputRef, index) => (
                <View style={customStyle} onFocus={() => setfocus(true)}>
                  <TouchableOpacity style={styles.mobilenoani}>
                    <TextInput
                      value={otpArray[index]}
                      placeholderTextColor="#666666"
                      keyboardType="numeric"
                      style={[
                        styles.textInput1,
                        {
                          color: colors.text,
                        },
                      ]}
                      autoCapitalize="none"
                      maxLength={1}
                      returnKeyType="next"
                      onKeyPress={onOtpKeyPress(index)}
                      onChangeText={onOtpChange(index)}
                      ref={refCallback(textInputRef)}
                      key={index}
                    />
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
        )}
      </Formik>
      <Text style={{ paddingLeft: 10 }}>Enter the 4 digit OTP send to +91 9075839282</Text>
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 16,
          fontWeight: '600',
          paddingTop: 20,
        }}
      >
        Resend OTP in{' '}
        {resendButtonDisabledTime > 0 ? (
          <Text style={{ fontWeight: '600', color: 'black' }}>{resendButtonDisabledTime}</Text>
        ) : null}
      </Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.signIn, { justifyContent: 'center' }]}
          onPress={() => navigation.navigate('StudentInfo')}
        >
          <LinearGradient
            colors={['#660066CC', '#660066CC']}
            style={[customVerify, { justifyContent: 'center' }]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}
            >
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
    borderBottomWidth: 5,
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
