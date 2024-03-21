import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


const HomePage = ({navigation}) => {
  const images = [];

  return (
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
      <View style={styles.iconminiContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HaberTurk')}>
          <Image
            source={require('../Allpng/Icon/HaberTurk.png')}
            style={styles.iconminiContainer}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bildirimler')}>
          <Image
            source={require('../Allpng/Icon/bell.png')}
            style={styles.iconmini2Container}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={require('../Allpng/Icon/date.png')}
          style={styles.datepageContainer}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={styles.newheader}>NEW ON DAY..</Text>
      </View>

      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../Allpng/Page/bayrak.png')}
            style={styles.banner}
          />
        </View>

        {/*ALT BASILABİLİR ÖĞELER*/}

        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Btc')}>
            <Image
              source={require('../Allpng/Page/btc.png')}
              style={{width: '47%', aspectRatio: 1}}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ElonM')}>
            <Image
              source={require('../Allpng/Page/elonmusk.png')}
              style={{width: '47%', aspectRatio: 1}}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            flex: 1,
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Weather')}>
            <Image
              source={require('../Allpng/Page/nasa.png')}
              style={{width: '47%', aspectRatio: 1}}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Btc')}>
            <Image
              source={require('../Allpng/Page/teknology.png')}
              style={{width: '47%', aspectRatio: 1}}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            flex: 1,
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Btc')}>
            <Image
              source={require('../Allpng/Page/war.png')}
              style={{width: '47%', aspectRatio: 1}}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Btc')}>
            <Image
              source={require('../Allpng/Page/food.png')}
              style={{width: '47%', aspectRatio: 1}}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'yellow',
    width: '100%',
    padding: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  image: {
    width: 150,
    height: 150,
  },

  iconminiContainer: {
    flexDirection: 'row',
    width: 80,
    height: 60,
    marginLeft: 10,
  },

  iconmini2Container: {
    flexDirection: 'row',
    width: 40,
    height: 35,
    marginLeft: 10,
    marginTop: 10,
  },

  datepageContainer: {
    width: 80,
    height: 80,
    marginLeft: 180,
    flexDirection: 'row',
  },

  newheader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },

  banner: {
    width: '100%',
    height: 200,
  },

  bannerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomePage;
