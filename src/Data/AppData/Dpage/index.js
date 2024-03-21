import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Dpage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <Image
            source={require('../../ElonMpageFoto/ELonMusk2.png')}
            style={{
              width: 400,
              height: 300,
              justifyContent: 'flex-start',
            }}
            resizeMode="contain"
          />

          <View style={{marginBottom: 5, backgroundColor: 'white'}}>
            <Text style={{fontSize: 13, color: 'gray'}}>
              The standard chunk of Lorem Ipsum used since the 1500s is repro
              duced below for those interested.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dpage;
