import * as React from 'react';
import {View, FlatList, Text, StyleSheet, Image} from 'react-native';

import dataJson from '../../../Data/dolarData.json';
import {useEffect, useState} from 'react';

function TRY() {
  const [datadolars, setDatadolars] = useState(null);

  useEffect(() => {
    setDatadolars(dataJson);
  }, []);
  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#DEDEDE',
          }}>
          <Text style={styles.cell2}>ALIŞ</Text>
          <Text style={styles.cell}>{item.alıs}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#DEDEDE',
          }}>
          <Text style={styles.cell2}>SATIŞ</Text>
          <Text style={styles.cell}>{item.satıs}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#DEDEDE',
          }}>
          <Text style={styles.cell2}>ÖNCEKİ KAPANIŞ</Text>
          <Text style={styles.cell}>{item.oncekikapanis}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#DEDEDE',
          }}>
          <Text style={styles.cell2}>EN YÜKSEK</Text>
          <Text style={styles.cell}>{item.enyuksek}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#DEDEDE',
          }}>
          <Text style={styles.cell2}>EN DÜŞÜK</Text>
          <Text style={styles.cell}>{item.endusuk}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../../Allpng/Icon/dollars.png')}
          style={{
            marginTop: 20,
            width: 48,
            height: 48,
            marginLeft: 50,
            marginRight: -10,
          }}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.cell3}>DOLAR</Text>
          <Text style={styles.cell4}>8,2199₺</Text>
        </View>
        <Image
          source={require('../../../Allpng/Icon/DownRedArrow.png')}
          style={{
            marginTop: 47,
            width: 25,
            height: 25,
            marginLeft: 10,
          }}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.cell5}>%0,53</Text>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={datadolars?.data?.dolar}
          renderItem={renderItem}
          keyExtractor={item => item.dolar}
          showsVerticalScrollIndicator={false}
        />
        <Text style={{marginTop: 5, marginLeft: 20, marginBottom: 5}}>
          Güncelleme 06/04/2021 12:22:15
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#DEDEDE',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DEDEDE',
    height: 50,
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cell2: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  cell3: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 25,
    marginTop: 10,
  },
  cell4: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 25,
  },
  cell5: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 18,
    marginTop: 50,
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#DEDEDE',
    marginHorizontal: 5,
  },
  headerCell: {
    fontSize: 16,
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginVertical: 20,
  },
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
});

export default TRY;
