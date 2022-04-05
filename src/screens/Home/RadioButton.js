import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Pressable} from 'react-native'; //additional import.

export default function RadioButton({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  const [selected, setselected] = useState([false, false, false, false]);
  console.log(selected);
  return (
    <View>
      {data.map((item, index) => {
        return (
          /*Change the 'onPress' handler here */
          <Pressable
            onPress={() => {
              setUserOption(item.value);
              setselected(prevState =>
                prevState.map((item, idx) => (idx === index ? !item : item)),
              );
            }}
            style={{flexDirection: 'row', marginLeft: 5}}
            key={index}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.CircleShape}>
                {selected[index] ? (
                  <View style={styles.CircleInnnerfill} />
                ) : (
                  <View style={styles.CircleInnner} />
                )}
              </View>
              <Text style={styles.option}> {item.value}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  option: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginLeft: 5,
  },
  CircleShape: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#fffff',
    borderColor: '#00000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CircleInnnerfill: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#660066',
  },
  CircleInnner: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#fffff',
  },
});
