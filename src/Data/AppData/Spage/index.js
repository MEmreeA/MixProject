import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Spage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../ElonMpageFoto/ppPhoto.png')}
            style={{
              borderRadius: 120,
              // marginLeft: 20,
              // marginTop: 20,
              width: 120,
              height: 120,
            }}
            // resizeMode="contain"
          />
          <View style={{marginTop: 30, marginLeft: 10}}>
            <Text
              style={{
                fontSize: 80,
                fontWeight: 'bold',
                color: 'black',
                marginTop: -50,
                marginLeft: 110,
              }}>
              "
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'black',
                marginHorizontal: 10,
                marginTop: -50,
                textAlign: 'center',
              }}>
              Pellentesque sed ipsum sodales turpis aliquet porttitor in quis
              eros. Phasellus placerat risus nisl, ac aliquet felis tincidunt
              et.
            </Text>
            <Text style={{fontSize: 16, color: 'gray', textAlign: 'center'}}>
              Ut at iaculis ante. Nunc nibh nulla
            </Text>
            <Text
              style={{
                fontSize: 80,
                fontWeight: 'bold',
                color: 'black',
                marginTop: -10,
                marginLeft: 230,
              }}>
              "
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Spage;
