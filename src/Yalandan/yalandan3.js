
// TODO: Headers old version

// import React, { useEffect, useRef, useState } from "react";
// import { Dimensions, SafeAreaView, TouchableOpacity, View, Text } from "react-native";
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleDarkMode } from '../../Redux/Actions/XActions.js';
// import LottieView from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native';
//
// const Headers = () => {
//   const navigation = useNavigation();
//   const windowWidth = Dimensions.get('window').width;
//   const darkMode = useSelector(state => state.user.darkMode);
//   const dispatch = useDispatch();
//   const animationRef = useRef(null);
//   const [isFirstHalf, setIsFirstHalf] = useState(true);
//
//   useEffect(() => {
//     if (animationRef?.current) {
//       if (darkMode) {
//         animationRef.current.play(70, 130);
//         setTimeout(() => {
//           animationRef.current.pause();
//         }, 1000);
//       } else {
//         animationRef.current.play(0, 80);
//         setTimeout(() => {
//           animationRef.current.pause();
//         }, 1000);
//       }
//     }
//
//   }, []);
//   const handleAnimation = () => {
//
//     dispatch(toggleDarkMode());
//
//     if (animationRef.current) {
//       if (isFirstHalf) {
//         animationRef.current.play(70, 130);
//         setTimeout(() => {
//           animationRef.current.pause();
//         }, 1000);
//       } else {
//         animationRef.current.play(0, 80);
//         setTimeout(() => {
//           animationRef.current.pause();
//         }, 1000);
//       }
//       setIsFirstHalf(!isFirstHalf);
//     }
//   };
//
//
//   return (
//     <SafeAreaView style={{ borderColor: darkMode ? "white" : "black", height: 50, backgroundColor: darkMode ? "black" : "white", borderBottomWidth: 0.7 }}>
//       <TouchableOpacity style={{ marginTop: 15, marginLeft: 5}}
//                         activeOpacity={1}
//                         onPress={() => {navigation.navigate('Calculator')}}>
//         <Text style={{color: darkMode ? "white" : "black", fontWeight: "bold"}}>HOPPAA..</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{ position: "absolute", alignSelf:"center"}}
//                         activeOpacity={1}
//                         onPress={() => {navigation.navigate('HomePage')}}>
//         <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: darkMode ? "blue" : "red", width: 100, height : 49 }}>
//           <Text style={{color: darkMode ? "black" : "white", fontWeight: "bold", fontSize: 35}}>TEST</Text>
//         </View>
//       </TouchableOpacity>
//
//
//
//       <View style={{ position: "absolute",marginLeft: windowWidth * 3 / 4, marginTop: -15 }}>
//         <TouchableOpacity onPress={handleAnimation}
//                           style={{ }}
//                           activeOpacity={1}>
//           <LottieView ref={animationRef}
//                       source={require('../Animation/Day-Night.json')}
//                       autoPlay={false}
//                       loop={false}
//                       style={{ width: 100, height: 80 }}/>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// export default Headers;
