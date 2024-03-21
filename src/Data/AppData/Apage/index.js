import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Apage(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <Image
            source={require('../../ElonMpageFoto/ELonMusk1.png')}
            style={{
              marginTop: 20,
              width: 400,
              height: 500,
              justifyContent: 'flex-start',
            }}
            resizeMode="contain"
          />
          <View>
            <Text
              style={{
                marginTop: -80,
                padding: 5,
                backgroundColor: 'white',
                marginRight: 280,
                marginLeft: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              GÜNDEM
            </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 50,
              marginTop: -40,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 10,
                color: 'black',
              }}>
              Lorem Ipsum is simply dummy text of the printing and industry.
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: 'white',
              color: 'black',
            }}>
            <Text style={{fontSize: 17, color: "black"}}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: 'white',
            }}>
            <Text style={{fontSize: 12, color: 'gray'}}>
              07.10.2020 - 14:06 | Güncelleme: 07.10.2020 - 14:13
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Apage;
