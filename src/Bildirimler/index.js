import * as React from 'react';
import {View, Text} from 'react-native';

function Bildirimler() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
        Yeni Bilirim Yok..
      </Text>
    </View>
  );
}


export default Bildirimler;
