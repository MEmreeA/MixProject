import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Text, ScrollView } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from "react-redux";

const Harita = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const darkMode = useSelector(state => state.user.darkMode);
  const istanbulRegion = {
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  // console.warn(value)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? "black" : "white" }}>
      <ScrollView>
        <MapView style={{
          width: windowWidth - 30,
          height: windowHeight / 2,
          alignSelf: "center",
          marginTop: 10,
        }} initialRegion={istanbulRegion}>

          <Marker
            coordinate={{
              latitude: 41.0082,
              longitude: 28.9784,
            }}
            title={"İstanbul"}
            description={"X"}
          />
        </MapView>

        <View style={{ marginTop: 20, width: windowWidth - 30 , alignSelf: "center" }}>
          <View>
            <Text style={{color: darkMode ? "white" : "black", fontSize: 32, fontWeight: "bold", marginTop: 10}}>
              LOREM DARMMODE
            </Text>
            <Text style={{color: darkMode ? "white" : "black", fontSize: 18, fontWeight: "bold", marginTop: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{color: darkMode ? "white" : "black", fontSize: 18, fontWeight: "bold", marginTop: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Harita;
