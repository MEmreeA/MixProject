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

function Jpage(props) {
  const renderItem = ({item}) => (
    <Image
      source={item.image}
      style={{
        width: 390,
        height: 250,
        marginRight: 10,
      }}
    />
  );

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white', marginHorizontal: 10}}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={{backgroundColor: 'white', marginTop: 20}}
          showsHorizontalScrollIndicator={false}
        />
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

        <TouchableOpacity>
          <View>
            <Image
              source={require('../../../Allpng/Icon/JustArrow.png')}
              style={{
                marginTop: -240,
                width: 40,
                height: 40,
                backgroundColor: 'white',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Image
              source={require('../../../Allpng/Icon/JustArrow.png')}
              style={{
                marginTop: -240,
                width: 40,
                height: 40,
                backgroundColor: 'white',
                transform: [{rotate: '180deg'}],
                marginLeft: 335,
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Jpage;
