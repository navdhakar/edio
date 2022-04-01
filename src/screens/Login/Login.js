import React from 'react';
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
  Dimensions,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import {useTheme} from 'react-native-paper';
import * as Yup from 'yup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const signinvalidationSchema = Yup.object().shape({
  email: Yup.string().required().email('please enter valid email'),
  password: Yup.string().required().min(2, 'not strong password'),
});
const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const illustration = [
    require('../../assets/icons/slide1.png'),
    require('../../assets/icons/slide2.png'),
    require('../../assets/icons/slide3.png'),
  ];
  const {colors} = useTheme();

  // const textInputChange = val => {
  //   if (val.trim().length >= 4) {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

  // const handlePasswordChange = val => {
  //   if (val.trim().length >= 8) {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: false,
  //     });
  //   }
  // };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // const handleValidUser = val => {
  //   if (val.trim().length >= 4) {
  //     setData({
  //       ...data,
  //       isValidUser: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       isValidUser: false,
  //     });
  //   }
  // };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#660066" />

      <View style={styles.header}>
        <Image source={require('../../assets/icons/edio_logo.png')} />
      </View>
      <View style={styles.show_text}>
        <View>
          <SliderBox
            images={illustration}
            dotColor="#660066"
            inactiveDotColor="#D1D5DB"
            autoplay={true}
            circleLoop={true}
            sliderBoxHeight={430}
            resizeMode="contain"
          />
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        {/* <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={signinvalidationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
          }}>
          {props => (
            <View>
              <Text style={[styles.text_footer]}>Email</Text>

              <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.text} size={20} />
                <TextInput
                  placeholder="Your Email"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {props.errors.email ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>{props.errors.email}</Text>
                </Animatable.View>
              ) : null}
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: colors.text,
                    marginTop: 35,
                  },
                ]}>
                Password
              </Text>
              <View style={styles.action}>
                <Feather name="lock" color={colors.text} size={20} />
                <TextInput
                  placeholder="Your Password"
                  placeholderTextColor="#666666"
                  // secureTextEntry={data.secureTextEntry ? true : false}
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                  {data.secureTextEntry ? (
                    <Feather name="eye-off" color="grey" size={20} />
                  ) : (
                    <Feather name="eye" color="grey" size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {props.errors.password ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>{props.errors.password}</Text>
                </Animatable.View>
              ) : null}
            </View>
          )}
        </Formik> */}
        {/* <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity> */}
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, {justifyContent: 'center'}]}
            onPress={() => navigation.navigate('MobileNo')}>
            <LinearGradient
              colors={['#660066CC', '#660066CC']}
              style={[styles.signIn, {justifyContent: 'center'}]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                GET STARTED
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>
          <TouchableOpacity
            style={[styles.othersignin, {paddingBottom: 20}]}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={['#3A5898', '#3A5898']}
              style={styles.othersignin}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Continue with Facebook
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.othersignin}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={['#fff', '#fff']}
              style={[styles.signIn, {flexDirection: 'row'}]}> */}
          {/* <FontAwesome
                name="google"
                color={colors.text}
                size={20}
                style={{paddingRight: 5}}
              /> */}
          {/* <Image
                source={require('../../assets/icons/icon_google.svg')}
                style={[styles.ImageIconStyle, {paddingRight: 20}]}
              />

              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}>
                Continue with Google
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#fff',
  },
  show_text: {
    flex: 6,
    alignItems: 'center',
    fontWeight: 600,
    fontSize: 24,

    justifyContent: 'flex-end',
  },
  header: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  signin: {
    alignContent: 'flex-end',
    color: '#3A5898',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 1,
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
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

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
});
