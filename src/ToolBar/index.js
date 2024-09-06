import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {navigationRef} from '../../App2';
import {StackActions} from '@react-navigation/native';

function TabBar(props) {
  let visible = 0
  let tabBarVisible = props?.state?.routes[0]?.state?.routes[props?.state?.routes[0]?.state?.index]?.params?.tabBarVisible
  if (tabBarVisible !== undefined) {
    visible = props?.state?.routes[0]?.state?.routes[props?.state?.routes[0]?.state?.index]?.params?.tabBarVisible
  }
  if (visible === 0) {
    return (
      <View style={{ width: '100%', backgroundColor: '#D0D2D1', flexDirection: 'row', justifyContent: "space-between" }}>
        <TouchableOpacity style={{ height: 40, width: 80, resizeMode: 'contain', backgroundColor: "red" }}
                          onPress={() => {
                            if (navigationRef.current?.getCurrentRoute()?.name !== 'HomePage') {
                              navigationRef.current.dispatch(StackActions.popToTop());
                            }
                          }}>
        </TouchableOpacity>

        <TouchableOpacity style={{ height: 40, width: 80, resizeMode: 'contain', backgroundColor: "blue" }}
                          onPress={() => props.navigation.navigate('Calculator')}>
        </TouchableOpacity>

        <TouchableOpacity style={{ height: 40, width: 80, resizeMode: 'contain', backgroundColor: "gray" }}
                          onPress={() => props.navigation.navigate('Harita')}>
        </TouchableOpacity>
      </View>
    );
  }
  return null;
}

export default TabBar;
