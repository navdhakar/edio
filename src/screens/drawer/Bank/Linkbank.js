import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

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
  PhoneNumber: Yup.string().required().min(10, 'not strong password'),
});
export default function StudentInfo({navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [dob, hidedob] = useState(false);
  const dobdisplay = dob ? styles.dobhide : styles.dobshow;

  const [items, setItems] = useState([
    {label: 'Pan Card', value: 'Pan Card'},
    {label: 'Adhaar', value: 'Adhaar'},
  ]);
  const {colors} = useTheme();
  const [firstname_value, setfirstname] = useState('');
  const [ifsc_value, setifsc] = useState('');
  const [accname_value, setaccname] = useState('');
  const [importpan_value, setimportpan] = useState('');

  const [accnum_value, setaccnum] = useState('');
  const [dob_value, setdob] = useState('');
  const [city_value, setcity] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#660066', '#330066']}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
        }}>
        <TouchableOpacity
          style={{flex: 0.5}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/Back.png')}
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
          Link Bank Account
        </Text>
      </LinearGradient>
      <View
        style={{
          flex: 0.2,

          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/icons/bank.png')}
          resizeMode={'contain'}
          style={{
            width: '15%',
            height: '60%',
            marginLeft: 1,
            flex: 0.2,
          }}
        />
        <Text style={styles.text1}>Bank Account</Text>
      </View>

      <Formik
        initialValues={{
          FullName: '',
          Gender: '',
          DateofBirth: '',
          CityorTown: '',
        }}
        validationSchema={signinvalidationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}>
        {props => (
          <View>
            <View
              style={[styles.action, {marginTop: 20}]}
              onFocus={() => {
                setaccnum('Account number');
              }}>
              <View style={styles.labelContainer}>
                <Text
                  style={{
                    color: '#660066',
                  }}>
                  Account number
                </Text>
              </View>
              <TouchableOpacity style={styles.mobilenoani}>
                <View style={{flex: 6}}>
                  <TextInput
                    placeholder="Account number"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('PhoneNumber')}
                    value={props.values.PhoneNumber}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>{accnum_value}</Text>
            </View>

            <View
              style={[styles.action, {marginTop: 20}]}
              onFocus={() => {
                setfirstname('Repeat account number');
              }}>
              <View style={styles.labelContainer}>
                <Text
                  style={{
                    color: '#660066',
                  }}>
                  Repeat account number
                </Text>
              </View>
              <TouchableOpacity style={styles.mobilenoani}>
                <View style={{flex: 6}}>
                  <TextInput
                    placeholder="Repeat account number"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('PhoneNumber')}
                    value={props.values.PhoneNumber}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>{firstname_value}</Text>
            </View>
            <View
              style={styles.action}
              onFocus={() => {
                setifsc('IFSC code');
              }}>
              <View style={styles.labelContainer}>
                <Text
                  style={{
                    color: '#660066',
                  }}>
                  IFSC code
                </Text>
              </View>
              <TouchableOpacity style={styles.mobilenoani}>
                <View style={{flex: 6}}>
                  <TextInput
                    placeholder="IFSC code"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('PhoneNumber')}
                    value={props.values.PhoneNumber}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>{ifsc_value}</Text>
            </View>
            <View
              style={styles.action}
              onFocus={() => {
                setaccname('Account holder name');
              }}>
              <View style={styles.labelContainer}>
                <Text
                  style={{
                    color: '#660066',
                  }}>
                  Account holder name
                </Text>
              </View>
              <TouchableOpacity style={styles.mobilenoani}>
                <View style={{flex: 6}}>
                  <TextInput
                    placeholder="Account holder name"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={props.handleChange('PhoneNumber')}
                    value={props.values.PhoneNumber}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>{accname_value}</Text>
            </View>
          </View>
        )}
      </Formik>

      <View style={([styles.button], {alignItems: 'center'})}>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              alignItems: 'center',
              width: '100%',

              paddingRight: -20,
            },
          ]}
          onPress={() => navigation.navigate('Verificationstatus')}>
          <LinearGradient
            colors={['#660066CC', '#660066CC']}
            style={[
              styles.signIN,
              {alignItems: 'center', width: '93%', flex: 1},
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Link bank account
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
  labelContainer: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start',
    position: 'absolute', // Have View be same width as Text inside
    // Amount of spacing between border and first/last letter
    // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    // Needed to be able to precisely overlap label with border
    marginTop: -10,
    marginLeft: 15, // Vertical position of label. Eyeball it to see where label intersects border.
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
  },
  action: {
    marginLeft: 7,
    marginRight: 7,
    marginTop: 5,
    borderWidth: 1,
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
    justifyContent: 'center',
  },
  code: {
    flex: 1,
    fontSize: 24,
    color: 'black',
    paddingLeft: 10,
  },
  textInput: {
    flex: 6,
    color: '#660066',
    fontSize: 16,
  },
  dobshow: {
    flex: 6,
    color: '#660066',
    fontSize: 16,
  },
  dobhide: {
    flex: 6,
    color: '#fffff',
    fontSize: 16,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'red',
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
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 24,
    color: 'black',
    flex: 0.9,
    marginTop: 10,
  },
});

//previous version

// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Platform,
//   StyleSheet,
//   StatusBar,
//   Image,
//   Alert,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import Feather from 'react-native-vector-icons/Feather';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import {Formik} from 'formik';
// import {useTheme} from 'react-native-paper';
// import * as Yup from 'yup';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/stack';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// const signinvalidationSchema = Yup.object().shape({
//   email: Yup.string().required().email('please enter valid email'),
//   password: Yup.string().required().min(2, 'not strong password'),
// });
// const SignInScreen = ({navigation}) => {
//   const [data, setData] = React.useState({
//     username: '',
//     password: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//   });

//   const {colors} = useTheme();

//   // const textInputChange = val => {
//   //   if (val.trim().length >= 4) {
//   //     setData({
//   //       ...data,
//   //       username: val,
//   //       check_textInputChange: true,
//   //     });
//   //   } else {
//   //     setData({
//   //       ...data,
//   //       username: val,
//   //       check_textInputChange: false,
//   //     });
//   //   }
//   // };

//   // const handlePasswordChange = val => {
//   //   if (val.trim().length >= 8) {
//   //     setData({
//   //       ...data,
//   //       password: val,
//   //       isValidPassword: true,
//   //     });
//   //   } else {
//   //     setData({
//   //       ...data,
//   //       password: val,
//   //       isValidPassword: false,
//   //     });
//   //   }
//   // };

//   const updateSecureTextEntry = () => {
//     setData({
//       ...data,
//       secureTextEntry: !data.secureTextEntry,
//     });
//   };

//   // const handleValidUser = val => {
//   //   if (val.trim().length >= 4) {
//   //     setData({
//   //       ...data,
//   //       isValidUser: true,
//   //     });
//   //   } else {
//   //     setData({
//   //       ...data,
//   //       isValidUser: false,
//   //     });
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#009387" barStyle="light-content" />

//       <View style={styles.innercontainer}>
//         <Image
//           source={require('../../assets/icons/Student.png')}
//           style={[styles.ImageIconInst, {paddingRight: 20}]}
//         />
//       </View>

//       {/* <View style={styles.header}>
//         <Text style={styles.text_header}>Log In</Text>
//         <TouchableWithoutFeedback onPress={() => navigation.navigate('Select')}>
//           <Text style={styles.signin}>Sign In</Text>
//         </TouchableWithoutFeedback>
//       </View> */}
//       <Animatable.View
//         animation="fadeInUpBig"
//         style={[
//           styles.footer,
//           {
//             backgroundColor: colors.background,
//           },
//         ]}>
//         <Formik
//           initialValues={{email: '', password: ''}}
//           validationSchema={signinvalidationSchema}
//           onSubmit={(values, actions) => {
//             console.log(values);
//           }}>
//           {props => (
//             <View>
//               <Text style={[styles.text_footer]}>Student Name</Text>

//               <View style={styles.action}>
//                 <FontAwesome name="user-o" color={colors.text} size={20} />
//                 <TextInput
//                   placeholder="Student Name"
//                   placeholderTextColor="#666666"
//                   style={[
//                     styles.textInput,
//                     {
//                       color: colors.text,
//                     },
//                   ]}
//                   autoCapitalize="none"
//                   onChangeText={props.handleChange('email')}
//                   value={props.values.email}
//                 />
//                 {data.check_textInputChange ? (
//                   <Animatable.View animation="bounceIn">
//                     <Feather name="check-circle" color="green" size={20} />
//                   </Animatable.View>
//                 ) : null}
//               </View>
//               {/* {props.errors.email ? (
//                 <Animatable.View animation="fadeInLeft" duration={500}>
//                   <Text style={styles.errorMsg}>{props.errors.email}</Text>
//                 </Animatable.View>
//               ) : null} */}
//               <Text
//                 style={[
//                   styles.text_footer,
//                   {
//                     color: colors.text,
//                     marginTop: 35,
//                   },
//                 ]}>
//                 Gender
//               </Text>
//               <View style={styles.action}>
//                 <FontAwesome5 name="genderless" color={colors.text} size={20} />
//                 <TextInput
//                   placeholder="Gender"
//                   placeholderTextColor="#666666"
//                   // secureTextEntry={data.secureTextEntry ? true : false}
//                   style={[
//                     styles.textInput,
//                     {
//                       color: colors.text,
//                     },
//                   ]}
//                   autoCapitalize="none"
//                   onChangeText={props.handleChange('password')}
//                   value={props.values.password}
//                 />
//                 {/* <TouchableOpacity onPress={updateSecureTextEntry}>
//                   {data.secureTextEntry ? (
//                     <Feather name="eye-off" color="grey" size={20} />
//                   ) : (
//                     <Feather name="eye" color="grey" size={20} />
//                   )}
//                 </TouchableOpacity> */}
//               </View>
//               {/* {props.errors.password ? (
//                 <Animatable.View animation="fadeInLeft" duration={500}>
//                   <Text style={styles.errorMsg}>{props.errors.password}</Text>
//                 </Animatable.View>
//               ) : null} */}
//               <Text style={[styles.text_footer]}>City/Town</Text>

//               <View style={styles.action}>
//                 <MaterialIcons
//                   name="location-city"
//                   color={colors.text}
//                   size={20}
//                 />
//                 <TextInput
//                   placeholder="City/Town"
//                   placeholderTextColor="#666666"
//                   style={[
//                     styles.textInput,
//                     {
//                       color: colors.text,
//                     },
//                   ]}
//                   autoCapitalize="none"
//                   onChangeText={props.handleChange('email')}
//                   value={props.values.email}
//                 />
//                 {data.check_textInputChange ? (
//                   <Animatable.View animation="bounceIn">
//                     <Feather name="check-circle" color="green" size={20} />
//                   </Animatable.View>
//                 ) : null}
//               </View>
//               {/* {props.errors.email ? (
//                 <Animatable.View animation="fadeInLeft" duration={500}>
//                   <Text style={styles.errorMsg}>{props.errors.email}</Text>
//                 </Animatable.View>
//               ) : null} */}
//             </View>
//           )}
//         </Formik>
//         {/* <TouchableOpacity>
//           <Text style={{color: '#009387', marginTop: 15}}>
//             Forgot password?
//           </Text>
//         </TouchableOpacity> */}
//       </Animatable.View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flex: 0.2,

//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     flexDirection: 'row',
//   },
//   signin: {
//     alignContent: 'flex-end',
//     color: '#3A5898',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   footer: {
//     flex: 3,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   text_header: {
//     flex: 1,
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   text_footer: {
//     color: '#05375a',
//     fontSize: 18,
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//   },
//   actionError: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FF0000',
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//   },
//   errorMsg: {
//     color: '#FF0000',
//     fontSize: 14,
//   },
//   button: {
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   signIn: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     paddingBottom: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   othersignin: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     paddingBottom: 10,
//   },
//   ImageIconStyle: {
//     margin: 10,
//     paddingRight: 20,
//     height: 25,
//     width: 25,
//   },
//   innercontainer: {
//     alignItems: 'center',
//   },
//   ImageIconInst: {
//     height: 250,
//     width: 250,
//   },
//   studenticon: {
//     alignItems: 'center',
//   },
// });
