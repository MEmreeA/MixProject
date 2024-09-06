import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


// screens-project
import HomePage from './src/HomePage/index';
import TabBar from './src/ToolBar/index';
import Harita from './src/Harita/index';
import WinPage from "./src/WinPage";
import Headers from "./src/Headers";
import Calculator from "./src/Calculator";
import LoginScreen from "./src/LoginScreen";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Calendar from "./src/Calendar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = React.createRef();

export default function App2(props , navigation) {
  return (
    <NavigationContainer ref={navigationRef}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Headers navigation = { navigation } { ...props } />
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          // screenOptions={{headerShown: false}}
        >
          <Tab.Screen name={'asd'} component={StackNavigator} options={{headerShown: false}}/>
        </Tab.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );

  function StackNavigator({navigation}) {
    return (
      <Stack.Navigator initialRouteName="HomePage"
                       screenOptions={{headerShown: false}}>
      {/*<Stack.Navigator initialRouteName="LoginScreen"*/}

        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} initialParams={{ tabBarVisible: 1, headerVisible: 1 }} />
        <Stack.Screen name="WinPage" component={WinPage}/>
        <Stack.Screen name="Calendar" component={Calendar}/>
        <Stack.Screen name="Calculator" component={Calculator} initialParams={{ tabBarVisible: 1 }}/>
        <Stack.Screen name="Harita" component={Harita} />
      </Stack.Navigator>
    );
  }
}
