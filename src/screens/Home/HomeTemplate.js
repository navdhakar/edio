import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import RadioButton from './RadioButton';
export default function HomeTemplate({type}) {
  const anytimequestion =
    'The figure here shows electric field lines. The electric field strength at P1 is E1 and that at P2 is E2 If distance between P1, P2 is r, then which of the following statement is true?';
  const partquestion = anytimequestion.slice(0, 37) + '...';
  const [quickopen, setquick] = useState(false);
  const figureurl = [require('../../assets/icons/figure.png'), ''];
  const cardarrow = [
    require('../../assets/icons/cardup.png'),
    require('../../assets/icons/carddown.png'),
  ];
  const quickanimation = quickopen ? styles.open : styles.default;
  const figure = quickopen ? figureurl[0] : figureurl[1];
  const questiondynamics = quickopen ? anytimequestion : partquestion;
  const cardarr = quickopen ? cardarrow[0] : cardarrow[1];
  const arrowstyle = quickopen
    ? styles.anytimeuparrow
    : styles.anytimedownarrow;

  function Options() {
    if (quickopen) {
      return (
        <View>
          <RadioButton data={data} />
          <View style={{alignItems: 'center', marginBottom: 20, marginTop: 30}}>
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
                SUBMIT
              </Text>
            </LinearGradient>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
  const data = [
    {value: '(a) E1 > E2'},
    {value: '(b) E1 < E'},
    {value: '(c) E2 = rE1'},
    {value: '(d) E2 = E1/r²'},
  ];
  function TemplateType() {
    if (type == 'physics') {
      return (
        <View style={styles.boxphysics}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#CA5259',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
                marginTop: 5,
              }}>
              Physics
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text style={{marginTop: 5}}>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image
              style={{marginTop: 5}}
              source={require('../../assets/icons/cardlive.png')}
            />
            <Image
              source={require('../../assets/icons/cardatom.png')}
              style={{marginTop: 70, marginBottom: 12}}
            />
          </View>
        </View>
      );
    } else if (type == 'chemistry') {
      return (
        <View style={styles.boxchemistry}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#8D5DA7',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
                marginTop: 5,
              }}>
              Chemistry
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text style={{marginTop: 5}}>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image
              style={{marginTop: 5}}
              source={require('../../assets/icons/cardlive.png')}
            />
            <Image
              source={require('../../assets/icons/cardmolecule.png')}
              style={{marginTop: 70, marginBottom: 12}}
            />
          </View>
        </View>
      );
    } else if (type == 'maths') {
      return (
        <View style={styles.boxmaths}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#589FD3',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
                marginTop: 5,
              }}>
              Mathematics
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text style={{marginTop: 5}}>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image
              style={{marginTop: 5}}
              source={require('../../assets/icons/cardlive.png')}
            />
            <Image
              source={require('../../assets/icons/cardparabola.png')}
              style={{marginTop: 70, marginBottom: 12}}
            />
          </View>
        </View>
      );
    } else if (type == 'logical') {
      return (
        <View style={styles.boxlogical}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#CA5259',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
                marginTop: 5,

                width: '100%',
              }}>
              Logical Reasoning
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text style={{marginTop: 5}}>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image
              style={{marginTop: 5}}
              source={require('../../assets/icons/cardlive.png')}
            />
            <Image
              source={require('../../assets/icons/cardlogical.png')}
              style={{marginTop: 70, marginBottom: 12}}
            />
          </View>
        </View>
      );
    } else if (type == 'english') {
      return (
        <View style={styles.boxenglish}>
          <View style={styles.leftSection}>
            <Text>National Talent Test series</Text>
            <Text
              style={{
                color: '#1C5253CC',
                fontWeight: '900',
                fontSize: 24,
                fontFamily: 'Quicksand',
                fontStyle: 'normal',
                marginTop: 5,
              }}>
              English
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/carddate.png')} />
              <Text style={{marginLeft: 6}}>Wed, 23 March 2022</Text>
              <Image
                source={require('../../assets/icons/cardtime.png')}
                style={{marginLeft: 6}}
              />
              <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../assets/icons/cardprize.png')} />
              <Text
                style={{
                  color: '#FF9C1A',
                  fontWeight: '700',
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  marginLeft: 6,
                }}>
                Reward: ₹15,000
              </Text>
            </View>
            <Text style={{marginTop: 5}}>Registration fee ₹299</Text>
          </View>
          <View style={styles.rightSection}>
            <Image
              style={{marginTop: 5}}
              source={require('../../assets/icons/cardlive.png')}
            />
            <Image
              source={require('../../assets/icons/cardparabola.png')}
              style={{marginTop: 70, marginBottom: 12}}
            />
          </View>
        </View>
      );
    } else if (type == 'anytime') {
      return (
        <View style={styles.boxanytime}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#A6BB563D',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <Image
              source={require('../../assets/icons/carddna.png')}
              style={{flex: 1}}
              resizeMode={'contain'}
            />
            <View style={{flex: 4}}>
              <Text
                style={{
                  color: '#1C5253CC',
                  fontWeight: '900',
                  fontSize: 24,
                  fontFamily: 'Quicksand',
                  fontStyle: 'normal',
                  marginTop: 5,
                }}>
                Biology
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../assets/icons/cardtime.png')}
                  style={{marginLeft: 6}}
                />
                <Text style={{marginLeft: 6}}>7:00 - 8:00Pm</Text>
              </View>
            </View>
            <Image
              style={{marginTop: 5, flex: 1.5}}
              resizeMode={'contain'}
              source={require('../../assets/icons/cardlive.png')}
            />
          </View>
          <View style={quickanimation}>
            <View style={{flex: 7, justifyContent: 'center', marginLeft: '5%'}}>
              <Text style={{marginLeft: 5}}>{questiondynamics}</Text>
              <Image resizeMode={'contain'} source={figure} />
              <Options />
            </View>
            <TouchableOpacity
              onPress={() => setquick(!quickopen)}
              style={arrowstyle}>
              <Image
                resizeMode={'contain'}
                source={cardarr}
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  return (
    <>
      <TemplateType />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    flex: 1,
  },
  boxContainer: {
    flex: 2,
    height: Dimensions.get('window').height,
    width: '90%',
    justifyContent: 'center',
  },
  boxphysics: {
    flexDirection: 'row',
    marginBottom: '10%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#CA525929',
    borderLeftColor: '#CA5259D6',
    borderLeftWidth: 16,
  },
  boxchemistry: {
    flexDirection: 'row',
    marginBottom: '10%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#8D5DA729',
    borderLeftColor: '#8D5DA7D6',
    borderLeftWidth: 16,
  },
  boxmaths: {
    flexDirection: 'row',
    marginBottom: '10%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#589FD329',
    borderLeftColor: '#589FD3D6',
    borderLeftWidth: 16,
  },
  boxlogical: {
    flexDirection: 'row',
    marginBottom: '10%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#C9521D29',
    borderLeftColor: '#C9521DD6',
    borderLeftWidth: 16,
  },
  boxenglish: {
    flexDirection: 'row',
    marginBottom: '10%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#1C525329',
    borderLeftColor: '#1C5253D6',
    borderLeftWidth: 16,
  },
  boxanytime: {
    marginBottom: '10%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  default: {
    height: 50,

    flexDirection: 'row',
  },
  open: {
    flexDirection: 'row',
  },
  anytimedownarrow: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  anytimeuparrow: {
    marginTop: '100%',
    marginRight: 20,
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
  leftSection: {
    marginLeft: '5%',
    flex: 4,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  anytimeSection: {
    marginLeft: '5%',
    flex: 4,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  rightSection: {
    marginLeft: '5%',
    flex: 2,
    alignItems: 'flex-end',
    marginRight: 16,
  },
  Rtop: {
    flex: 2,
    flexDirection: 'row',
  },
  Rbottom: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '90%',
    marginBottom: '20%',
    backgroundColor: '#C4C4C4',
    elevation: 5,
  },
  signIN: {
    width: 117,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
