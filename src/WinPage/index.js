import React, { useRef } from "react";
import { Text, View, TouchableOpacity, Dimensions, SafeAreaView, Modal } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const WinPage = () => {
  const navigation = useNavigation();

  const darkMode = useSelector(state => state.user.darkMode);
  const animationRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  return (
    <Modal>
      <SafeAreaView style={{flex: 1, backgroundColor: darkMode ? 'black' : 'white'}}>
        <View style={{alignItems: "center"}}>
          <Text style={{ fontSize: 30, fontWeight: "bold",color: darkMode ? 'white' : 'black' }}>CongurDAto</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: windowHeight / 5}}>
          <LottieView style={{ width: windowWidth - 20, aspectRatio: 1 }}
                      ref={animationRef}
                      source={require('../Animation/WinWin.json')}
                      autoPlay={true}
                      loop={true}/>
        </View>
        <View style={{alignItems: "center", marginTop: windowHeight / 8}}>
          <TouchableOpacity style={{justifyContent:"center", width: 200, height: 80, backgroundColor: darkMode ? 'white' : 'black'}}
                            onPress={() => {navigation.navigate('HomePage')}}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: darkMode ? 'black' : 'white'}}>GO to Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default WinPage;
