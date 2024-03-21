import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

function Gpage(props) {
  const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <Image
            source={require('../../ElonMpageFoto/ELonMusk3.png')}
            style={{
              flex: 0.5,
              height: 250,
              marginRight: 2,
            }}
            resizeMode="stretch"
          />
          <Image
            source={require('../../ElonMpageFoto/ELonMusk2.png')}
            style={{
              flex: 0.5,
              height: 250,
              marginLeft: 2,
            }}
            resizeMode="stretch"
          />
        </View>

        <View
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white', // png olduğundan oklar belli olun diye beyaz yaptım
            left: windowWidth / 2 - 30,
            top: 250 / 2,
          }}>
          <Image
            source={require('../../../Allpng/Icon/arrow.png')}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 10,
            marginRight: 10,
            flex: 1,
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 15, color: 'gray'}}>
            Image Compare the standard chunk of Lorem Ipsum used since the 1500s
            is repro duced below for those interested.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Gpage;
