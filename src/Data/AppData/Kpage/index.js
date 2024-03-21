import * as React from 'react';
import {View, FlatList, Text, Image} from 'react-native';

import dataJson from '../../weatherData.json';
import {useEffect, useState} from 'react';

function Kpage() {
  const [dataweather, setDataweather] = useState(null);

  useEffect(() => {
    setDataweather(dataJson);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 3,
          alignItems: 'center',
          width: 150,
          borderColor: '#DEDEDE',
          marginRight: 20,
        }}>
        <Text style={{marginTop: 20, fontSize: 25}}>{item.city}</Text>
        <Image
          source={{uri: item.weatherCondition}}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'contain',
          }}
        />
        <Text style={{fontSize: 40}}>{item.temperature}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        marginBottom: 50,
      }}>
      <FlatList
        horizontal={true}
        style={{height: 230, marginTop: 20}}
        data={dataweather?.data?.weather}
        renderItem={renderItem}
        keyExtractor={item => item.city}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default Kpage;
