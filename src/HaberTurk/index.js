import * as React from 'react';
import {View, Text} from 'react-native';

function HaberTurk() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 50, color: 'white'}}>HABER</Text>
      <Text style={{fontWeight: '100',fontSize: 380, color: 'white', marginTop: -400}}>_</Text>
      <Text style={{fontWeight: 'bold', fontSize: 50, color: 'white', marginTop: -95}}>TURK</Text>
    </View>
  );
}

export default HaberTurk;
