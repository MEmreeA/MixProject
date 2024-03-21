import React from 'react';
import {View, Text} from 'react-native';

function TextWidget(props) {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{fontSize: 18, color: 'black'}}>{props.items}</Text>
    </View>
  );
}

export default TextWidget;
