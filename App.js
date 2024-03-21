import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


// screens-project
import HomePage from './src/HomePage/index';
import TabBar from './src/ToolBar/index';
import Trendler from './src/Trendler/index';
import Bildirimler from './src/Bildirimler/index';
import ElonM from './src/ElonM/index';
import TRY from './src';
import BtcScreen from './src/Bitcoin/index';
import HaberTurk from './src/HaberTurk';
import Weather from './src/WeatherAllData/Weather';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = React.createRef();

export default function App(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          screenOptions={{headerShown: false}}>
          <Tab.Screen name={'HomeStack'} component={StackNavigator} />
        </Tab.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );

  function StackNavigator({navigation}) {
    return (
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Trendler" component={Trendler} />
        <Stack.Screen name="Btc" component={BtcScreen} />
        <Stack.Screen
          name="ElonM"
          options={{
            headerTitle: 'Elon Muz',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
          }}
          component={ElonM}
        />
        <Stack.Screen name="Bildirimler" component={Bildirimler} />
        <Stack.Screen name="TRY" component={TRY} />
        <Stack.Screen name="HaberTurk" component={HaberTurk} />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{gestureEnabled: true}}
        />
      </Stack.Navigator>
    );
  }
}
