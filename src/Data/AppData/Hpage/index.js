import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Hpage(props) {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            flex: 1,
            borderWidth: 2,
            marginBottom: 40,
          }}>
          <Image
            source={require('../../ElonMpageFoto/ELonMusk4.png')}
            style={{
              flex: 0.4,
              height: 200,
              marginRight: 10,
            }}
            resizeMode="stretch"
          />
          <Text
            style={{
              flex: 0.6,
              fontSize: 18,
              color: '#333333',
              marginTop: 50,
            }}>
            Quisque vitae odio nec lectus vulputate pharetra. Quisque a
            condimentum donec dolor.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Hpage;
