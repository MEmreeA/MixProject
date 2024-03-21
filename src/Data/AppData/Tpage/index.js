import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Tpage() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              borderWidth: 2,
              marginRight: 15,
              marginLeft: 5,
              borderColor: '#DEDEDE',
              marginBottom: 20,
            }}>
            <Image
              source={require('../../ElonMpageFoto/ELonMusk5.png')}
              style={{
                width: 190,
                height: 190,
                padding: 40,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                color: '#333333',
                width: 190,
                marginVertical: 15,
                textAlign: 'center',
              }}>
              Quisque vitae odio nec lectus vulputat pharetra. Quisque a
              condimentum donec dolor.
            </Text>
          </View>
          <View
            style={{borderWidth: 2, borderColor: '#DEDEDE', marginBottom: 20}}>
            <Image
              source={require('../../ElonMpageFoto/ELonMusk4.png')}
              style={{
                width: 190,
                height: 190,
                padding: 40,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                color: '#333333',
                width: 190,
                marginVertical: 15,
                textAlign: 'center',
              }}>
              Quisque vitae odio nec lectus vulputat pharetra. Quisque a
              condimentum donec dolor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tpage;
