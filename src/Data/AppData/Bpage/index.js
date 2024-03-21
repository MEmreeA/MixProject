import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Bpage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
          <Image
            source={require('../../ElonMpageFoto/ppPhoto.png')}
            style={{
              borderRadius: 70,
              marginLeft: 20,
              marginTop: 20,
              width: 70,
              height: 70,
              justifyContent: 'flex-start',
            }}
            resizeMode="contain"
          />
          <View style={{marginTop: 30, marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Kenan Gündoğan
            </Text>
            <Text style={{fontSize: 16, color: 'gray'}}>
              kgundogan@cyh.com.tr
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Bpage;
