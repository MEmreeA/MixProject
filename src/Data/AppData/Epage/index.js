import * as React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

function Epage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginLeft: 10,
            marginRight: 20,
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 80, fontWeight: 'bold'}}>
            “
          </Text>
        </View>

        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: -60,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
            }}>
            Pellentesque sed ipsum sodales turpis aliquet porttitor in quis
            eros. Phasellus placerat risus nisl, ac aliquet felis tincidunt et.
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10,
              fontSize: 16,
              marginTop: 10,
              color: 'gray',
            }}>
            Ut at iaculis ante. Nunc nibh nulla
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Epage;
