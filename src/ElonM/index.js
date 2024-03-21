import * as React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import dataJson from '../Data/newsData.json';
import {useEffect, useState} from 'react';
import NewsMapping from '../maps/index';

function ElonM() {
  const [dataNews, setDataNews] = useState(null);

  useEffect(() => {
    setDataNews(dataJson);
  }, []);

  if (dataNews == null) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator />
      </View>
    );
  }

  const renderItem = ({item}) => {
    const Component = NewsMapping[item?.type];
    return (
      <View>
        <Component items={item?.text} />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
      }}>
      <FlatList
        style={{flex: 1, backgroundColor: 'white'}}
        data={dataNews?.data?.mapping}
        renderItem={renderItem}
        windowSize={11}
        showsVertivalScrollIndicator={false}
      />
    </View>
  );
}

export default ElonM;
