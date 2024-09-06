
//TODO: HomePage old

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
// import { useSelector } from 'react-redux';
//
// const HomePage = ( props ) => {
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;
//
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [city, setCity] = useState('');
//   const darkMode = useSelector(state => state.user.darkMode);
//
//   const fetchData = async (city) => {
//     try {
//       const response = await fetch(`http://192.168.150.149:3000/weather?city=${city}`);
//       if (!response.ok) {
//         throw new Error('Hava durumu verisi alınamadı');
//       }
//       const jsonData = await response.json();
//       setData([jsonData]);
//     } catch (error) {
//       setError(error.message);
//       console.warn('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   const handleFetchData = () => {
//     if (city.trim()) {
//       setLoading(true);
//       fetchData(city);
//     }
//   };
//
//   const renderItem = ({ item }) => (
//     <View style={{ padding: 5, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
//       <Text style={{ color: darkMode ? "white" : "black", fontSize: 30, fontWeight: 'bold' }}>{item.location.name}</Text>
//       <View style={{flexDirection: "row", alignItems: "center"}}>
//         <Image source={{ uri: `https:${item.current.condition.icon}` }}
//                style={{ width: 140, aspectRatio: 1 }}/>
//         <View>
//           <Text style={{ color: darkMode ? "white" : "black" }}>{`Sıcaklık: ${item.current.temp_c} °C`}</Text>
//           <Text style={{ color: darkMode ? "white" : "black", width: windowWidth * 3 / 5 }}>{`Durum: ${item.current.condition.text}`}</Text>
//           <Text style={{ color: darkMode ? "white" : "black" }}>{`Rüzgar Hızı: ${item.current.wind_kph} km/h`}</Text>
//           <Text style={{ color: darkMode ? "white" : "black" }}>{`Nem: ${item.current.humidity}%`}</Text>
//         </View>
//       </View>
//     </View>
//   );
//
//
//   return (
//     <View style={{ backgroundColor: darkMode ? "black" : "white", flex: 1, padding: 10 }}>
//       <TouchableOpacity style={{ alignSelf: "center", width: windowWidth/ 2, height: 10, backgroundColor: "red", marginBottom: 10 }}
//                         activeOpacity={1}
//                         onPress={() => props.navigation.navigate('Locate')}/>
//       <TextInput placeholder="Şehir ismi girin"
//                  value={city}
//                  onChangeText={setCity}
//                  style={{
//                    height: 40,
//                    borderColor: 'gray',
//                    borderWidth: 1,
//                    paddingLeft: 8,
//                    marginBottom: 10,
//                    color: darkMode ? "white" : "black"}}/>
//       <TouchableOpacity activeOpacity={0.7}
//                         onPress={handleFetchData}
//                         style={{
//                           backgroundColor: darkMode ? "gray" : "lightblue",
//                           padding: 10,
//                           alignItems: 'center',
//                           borderRadius: 5 }}>
//         <Text style={{ color: darkMode ? "white" : "black", fontSize: 20 }}>Hava Durumu NE</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };
//
// export default HomePage;
