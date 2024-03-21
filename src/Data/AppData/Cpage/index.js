import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';

function Cpage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 55,
              fontWeight: 'bold',
              marginLeft: 10,
              color: 'black',
            }}>
            P
          </Text>
          <View style={{marginRight: 30, marginLeft: 5}}>
            <Text
              style={{
                fontSize: 14,
                marginRight: 10,
                marginTop: 15,
                marginLeft: 5,
                color: 'black',
              }}>
              hasellus quis iaculis tortor, vitae blandit augue. Aenean dictum
              venenatis elit nec egestas. Donec rutrum
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cpage;
