import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Trendler({navigation}) {
  const [statuses, setStatuses] = useState([
    'Takip Et',
    'Takip Et',
    'Takip Et',
    'Takip Et',
  ]);

  const handleButtonPress = buttonIndex => {
    const newStatuses = [...statuses];
    newStatuses[buttonIndex] =
      newStatuses[buttonIndex] === 'Takip Et' ? 'Takipte' : 'Takip Et';
    setStatuses(newStatuses);
  };

  const images = [
    require('../Allpng/Page/btc.png'),
    require('../Allpng/Page/world.png'),
    require('../Allpng/Page/teknology.png'),
    require('../Allpng/Page/nasa.png'),
    require('../Allpng/Icon/add.png'),
  ];

  return (
    <SafeAreaView style={{flex: 1, marginTop: 40}}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={images[4]} style={styles.iconContainer} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
            }}>
            Hangi Haberleri Görmek İstersiniz?{' '}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'black'}}>
            İlginizi çeken konuları seçin. İstediğiniz zaman daha fazlasını
            ekleyin.{' '}
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={images[0]} style={styles.image} />
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: statuses[0] === 'Takip Et' ? 'red' : 'white'},
              ]}
              onPress={() => handleButtonPress(0)}>
              <Text
                style={[
                  styles.buttonText,
                  {color: statuses[0] === 'Takip Et' ? 'white' : 'black'},
                ]}>
                {statuses[0]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image source={images[1]} style={styles.image} />
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: statuses[1] === 'Takip Et' ? 'red' : 'white'},
              ]}
              onPress={() => handleButtonPress(1)}>
              <Text
                style={[
                  styles.buttonText,
                  {color: statuses[1] === 'Takip Et' ? 'white' : 'black'},
                ]}>
                {statuses[1]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={images[2]} style={styles.image} />
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: statuses[2] === 'Takip Et' ? 'red' : 'white'},
              ]}
              onPress={() => handleButtonPress(2)}>
              <Text
                style={[
                  styles.buttonText,
                  {color: statuses[2] === 'Takip Et' ? 'white' : 'black'},
                ]}>
                {statuses[2]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image source={images[3]} style={styles.image} />
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: statuses[3] === 'Takip Et' ? 'red' : 'white'},
              ]}
              onPress={() => handleButtonPress(3)}>
              <Text
                style={[
                  styles.buttonText,
                  {color: statuses[3] === 'Takip Et' ? 'white' : 'black'},
                ]}>
                {statuses[3]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*</View>*/}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', margin: 90}}>
          {' '}
          EN AZ 3 KAYNAK SEÇİNİZ
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    margin: 5,
  },
  imageContainer: {
    flex: 1,
    margin: 6,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: 6,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
  },
  transparentButton: {
    position: 'absolute',
    top: 0,
    right: 8,
    padding: 7,
    backgroundColor: 'transparent',
  },
  transparentButtonText: {
    color: 'black',
    fontSize: 30,
  },
});

export default Trendler;
