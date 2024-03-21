import * as React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

function Mpage() {
  return (
    <SafeAreaView
      style={{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 30,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
            <Image
              source={require('../../ElonMpageFoto/ppPhoto.png')}
              style={{
                borderRadius: 70,
                marginLeft: 10,
                marginTop: 20,
                width: 70,
                height: 70,
                justifyContent: 'flex-start',
              }}
              resizeMode="contain"
            />
            <View style={{marginTop: 30, marginLeft: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Kenan Gündoğan
              </Text>
              <Text style={{fontSize: 14, color: 'gray'}}>1 day ago</Text>
            </View>
            <View style={{marginTop: 34, marginLeft: 6}}>
              <Text style={{fontSize: 14, color: 'gray'}}>- @knngndgn</Text>
            </View>
          </View>
          <View style={{marginTop: 20, marginHorizontal: 10}}>
            <Text style={{fontSize: 18, color: 'black'}}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing...
            </Text>
          </View>
          <View>
            <Image
              source={require('../../../Allpng/Icon/twitter.png')}
              style={{
                marginLeft: 360,
                marginTop: -250,
                width: 18,
                height: 18,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{marginTop: 10}}>
            <Image
              source={require('../../../Allpng/Page/uzayMekigi.png')}
              style={{
                width: '%100',
                height: 250,
                borderRadius: 15,
                marginHorizontal: 10,
                marginBottom: 15,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <Image
              source={require('../../../Allpng/Icon/Comment.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 18,
              }}
            />
            <Image
              source={require('../../../Allpng/Icon/Settings2.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 80,
              }}
            />
            <Image
              source={require('../../../Allpng/Icon/Like.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 80,
              }}
            />
            <Image
              source={require('../../../Allpng/Icon/Upload.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 80,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Mpage;
