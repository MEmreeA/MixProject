import * as React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

import dataJson from '../../countryData.json';
import {useEffect, useState} from 'react';

function Npage() {
  const [datacountry, setDatacountry] = useState(null);

  useEffect(() => {
    setDatacountry(dataJson);
  }, []);
  const renderHeaderItem = () => {
    return (
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Büyük Şehirler</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.headerCell}>Nüfus</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.headerCell}>0-20 Yaş</Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{item.country}</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.cell}>{item.population}</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.cell}>{item.age}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={datacountry?.data?.countrys}
        renderItem={renderItem}
        ListHeaderComponent={renderHeaderItem}
        keyExtractor={item => item.country}
        showsVerticalScrollIndicator={false}
      />
      <Text>
        The standard chunk of Lorem Ipsum used since the 1500s is repro duced below for those interested.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
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

export default Npage;
