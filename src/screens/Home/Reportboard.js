import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
export default function Reportboard({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Reportboard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Bankdetails')}>
        <Text>Bankdetails</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
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
});
