import React, { useEffect, useRef, useState } from "react";
import { Dimensions, SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../Redux/Actions/XActions.js';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Headers = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const darkMode = useSelector(state => state.user.darkMode);
  const dispatch = useDispatch();
  const animationRef = useRef(null);
  const [isFirstHalf, setIsFirstHalf] = useState(true);
  const [timer, setTimer] = useState(null);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    const loadDarkMode = async () => {
      const storedDarkMode = await AsyncStorage.getItem('darkMode');
      if (storedDarkMode !== null) {
        dispatch(toggleDarkMode(storedDarkMode === 'true'));
      }
    };
    loadDarkMode();
  }, []);

  useEffect(() => {
    if (animationRef?.current) {
      const checkStoredDarkMode = async () => {
        const storedDarkMode = await AsyncStorage.getItem('darkMode');
        const isDarkMode = storedDarkMode === 'true';

        if (isDarkMode) {
          animationRef.current.play(70, 130);
          setTimeout(() => {
            animationRef.current.pause();
          }, 1000);
        } else {
          animationRef.current.play(0, 80);
          setTimeout(() => {
            animationRef.current.pause();
          }, 1000);
        }
      };

      checkStoredDarkMode();
    }
  }, [darkMode]);

  const handleAnimation = async () => {
    dispatch(toggleDarkMode());
    await AsyncStorage.setItem('darkMode', (!darkMode).toString());

    if (animationRef.current) {
      if (isFirstHalf) {
        animationRef.current.play(70, 130);
        setTimeout(() => {
          animationRef.current.pause();
        }, 1000);
      } else {
        animationRef.current.play(0, 80);
        setTimeout(() => {
          animationRef.current.pause();
        }, 1000);
      }
      setIsFirstHalf(!isFirstHalf);
    }
  };

  const handlePressIn = () => {
    const newTimer = setTimeout(() => {
      navigation.navigate('WinPage');
    }, 2000);

    setTimer(newTimer);
  };

  const handlePressOut = () => {
    clearTimeout(timer);
    navigation.navigate('HomePage');
  };

  return (
    <SafeAreaView style={{ borderColor: darkMode ? "white" : "black", height: 50, backgroundColor: darkMode ? "black" : "white", borderBottomWidth: 0.7 }}>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{ marginTop: 15, marginLeft: 5 }}
                          activeOpacity={1}
                          onPress={() => setBarVisible(!barVisible)}>
          <Text style={{ color: darkMode ? "white" : "black", fontWeight: "bold" }}>HOPPAA..</Text>
        </TouchableOpacity>
        {barVisible && (
          <TouchableOpacity style={{ borderRadius: 20, marginLeft: 10, marginTop: 15, width: 20, aspectRatio: 1, backgroundColor: darkMode ? "white" : "black",}}/>
        )}
      </View>
      <TouchableOpacity style={{ position: "absolute", alignSelf: "center" }}
                        activeOpacity={1}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
        <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: darkMode ? "blue" : "red", width: 100, height: 49 }}>
          <Text style={{ color: darkMode ? "black" : "white", fontWeight: "bold", fontSize: 35 }}>TEST</Text>
        </View>
      </TouchableOpacity>

      <View style={{ position: "absolute", marginLeft: windowWidth * 3 / 4, marginTop: -15 }}>
        <TouchableOpacity onPress={handleAnimation}
                          style={{ }}
                          activeOpacity={1}>
          <LottieView ref={animationRef}
                      source={require('../Animation/Day-Night.json')}
                      autoPlay={false}
                      loop={false}
                      style={{ width: 100, height: 80 }}/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Headers;
