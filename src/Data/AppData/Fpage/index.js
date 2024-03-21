import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Fpage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <Image
            source={require('../../ElonMpageFoto/ELonMusk3.png')}
            style={{
              marginTop: 10,
              width: 400,
              height: 450,
              justifyContent: 'flex-start',
              marginLeft: -15,
            }}
            resizeMode="contain"
          />

          <View style={{marginBottom: 5, backgroundColor: 'white'}}>
            <Text
              style={{
                marginTop: -250,
                fontSize: 18,
                marginHorizontal: 40,
                color: 'white',
              }}>
              Parallax image the standard chunk of Lorem Ipsum used since the
              1500s is repro duced below interested.
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                marginTop: 10,
                marginHorizontal: 10,
                color: 'gray',
                marginBottom: 20,
              }}>
              Parallax image the standard chunk of Lorem Ipsum used since the
              1500s is repro duced below for those interested.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Fpage;
