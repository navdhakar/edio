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
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'react-native-paper';

const SelectScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign up</Text>
      </View>
      <TouchableOpacity
        style={styles.studenticon}
        onPress={() => navigation.navigate('Studentsignup')}>
        <View style={styles.innercontainer}>
          <Image
            source={require('../../assets/icons/Student.png')}
            style={[styles.ImageIconStudent, {paddingRight: 20}]}
          />
          <Text style={styles.student}>Student</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Bottomtabnav')}
        style={styles.institutionicon}>
        <View style={styles.innercontainer}>
          <Image
            source={require('../../assets/icons/Institution.png')}
            style={[styles.ImageIconInst, {paddingRight: 20}]}
          />
          <Text style={styles.student}>Institution</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View>
          <Entypo name="chevron-left" color={[colors.text]} size={30} />
        </View>
        {/* <View style={{alignItems: 'flex-end'}}>
          <Entypo
            name="chevron-right"
            color={[colors.text, {alignItems: 'flex-end'}]}
            size={30}
          />
        </View> */}
      </View>
    </View>
  );
};

export default SelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  studenticon: {
    flex: 5,

    alignItems: 'center',
  },
  institutionicon: {
    flex: 5,

    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  text_header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  student: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },

  ImageIconStudent: {
    height: 200,
    width: 200,
  },
  ImageIconInst: {
    height: 250,
    width: 250,
  },
  innercontainer: {
    alignItems: 'center',
  },
});
