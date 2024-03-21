import React from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {navigationRef} from '../../App';
import {StackActions} from '@react-navigation/native';

function TabBar(props) {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => {
          if (navigationRef.current?.getCurrentRoute()?.name !== 'HomePage') {
            navigationRef.current.dispatch(StackActions.popToTop());
          }
        }}
        style={{width: '20%', height: '100%'}}>
        <Image
          source={require('./ToolBarIcon/home.png')}
          style={styles.tabbariconContainer}
        />
        <View>
          <Text style={styles.texttab}> Ana Sayfa</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Trendler')}
        style={{width: '20%', height: '100%'}}>
        <Image
          source={require('./ToolBarIcon/fire.png')}
          style={styles.tabbariconContainer}
        />
        <View>
          <Text style={styles.texttab}> Trendler</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('TRY')}
        style={{width: '20%', height: '100%'}}>
        <Image
          source={require('./ToolBarIcon/menu-live.png')}
          style={styles.tabbariconContainer}
        />
        <View>
          <Text style={styles.texttab}> Canlı Yayın</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('')}
        style={{width: '20%', height: '100%'}}>
        <Image
          source={require('./ToolBarIcon/menu-favorite.png')}
          style={styles.tabbariconContainer}
        />
        <View>
          <Text style={styles.texttab}>TakipEttiklerin</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Bildirimler')}
        style={{width: '20%', height: '100%'}}>
        <Image
          source={require('./ToolBarIcon/bell.png')}
          style={styles.tabbariconContainer}
        />
        <View>
          <Text style={styles.texttab}> Bildirimler</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tabbariconContainer: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 10,
    resizeMode: 'contain',
  },
  texttab: {
    fontSize: 10,
    marginLeft: 8,
  },
});

export default TabBar;
