import * as React from 'react';
import {
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

const data = [
  {id: '1', image: require('../../ElonMpageFoto/ELonMusk5.png')},
  {id: '2', image: require('../../ElonMpageFoto/ELonMusk4.png')},
  {id: '3', image: require('../../ElonMpageFoto/ELonMusk3.png')},
  {id: '4', image: require('../../ElonMpageFoto/ELonMusk2.png')},
  {id: '5', image: require('../../ElonMpageFoto/ELonMusk5.png')},
  {id: '6', image: require('../../ElonMpageFoto/ELonMusk4.png')},
  {id: '7', image: require('../../ElonMpageFoto/ELonMusk3.png')},
  {id: '8', image: require('../../ElonMpageFoto/ELonMusk2.png')},
  {id: '9', image: require('../../ElonMpageFoto/ELonMusk5.png')},
];

function Opage(props) {
  const renderItem = ({item}) => (
    <Image
      source={item.image}
      style={{
        width: 320,
        height: 250,
        marginRight: 10,
      }}
    />
  );

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={{backgroundColor: 'white', marginTop: 20}}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Image
            source={require('../../../Allpng/Icon/SearchIcon.png')}
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'white',
              position: 'absolute',
              marginTop: -50,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            marginTop: 10,
            marginBottom: 40,
          }}>
          The standard chunk of Lorem Ipsum used since the 1500s is repro duced
          below for those interested.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Opage;
