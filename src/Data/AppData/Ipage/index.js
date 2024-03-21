import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Ipage(props) {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            // flex: 1,
          }}>
          <Image
            source={require('../../../Allpng/Page/TrSiyahBeyaz.png')}
            style={{
              width: 370,
              height: 250,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              marginTop: 10,
              marginBottom: 30,
            }}>
            Image Compare the standard chunk of Lorem Ipsum used since the 1500s
            is repro duced below for those interested.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Ipage;
