import * as React from 'react';
import {View, Image, ScrollView, SafeAreaView} from 'react-native';

function TRY() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <Image
            source={require('./Allpng/Page/sstonotpossible.png')}
            style={{
              marginTop: 20,
              width: 380,
              height: 400,
              marginHorizontal: 10,
              marginBottom: 20,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TRY;



// Weather.js

// import React, { useCallback, useRef, useState, useEffect } from 'react';
// import { Image, ImageBackground, Modal, Text, TouchableOpacity, View } from 'react-native';
// import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
// import getWeatherData from '../WeatherApi'; // Import edilen dosyanın yolunu düzenleyin
//
// const Weather = (props) => {
//   const bottomSheetRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const [weatherData, setWeatherData] = useState(null);
//
//   const snapPoints = ['45%', '80%'];
//
//   const handleSheetChanges = useCallback((newIndex) => {
//     // Handle sheet changes if needed
//   }, []);
//
//   const handleSnapPress = async () => {
//     try {
//       const data = await getWeatherData('Aydin'); // Şehir adını API'ye uygun şekilde değiştirin
//       setWeatherData(data);
//       setIndex(index === 0 ? 1 : 0);
//       bottomSheetRef?.current?.snapToIndex(index);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };
//
//   const flatListData = [
//     // ... (diğer veriler buraya eklenebilir)
//   ];
//
//   useEffect(() => {
//     handleSnapPress(); // Uygulama başladığında hava durumu verilerini çekmek için
//   }, []);
//
//   return (
//     <Modal visible={true}>
//       <View>
//         <ImageBackground
//           source={require('../WeatherPageImages/background.png')}
//           style={{
//             height: '100%',
//             width: '100%',
//           }}
//           resizeMode="cover"
//         >
//           {/* ... (diğer kodlar buraya gelebilir) */}
//           <BottomSheet
//             ref={bottomSheetRef}
//             index={index}
//             snapPoints={snapPoints}
//             onChange={handleSheetChanges}
//             enableContentPanningGesture={true}
//             enableHandlePanningGesture={true}
//             handleComponent={() => (
//               <View style={{ borderRadius: 20 }}>
//                 <TouchableOpacity onPress={handleSnapPress} style={{ alignItems: 'center', backgroundColor: '#612FAB' }}>
//                   <View style={{ flexDirection: 'row', marginTop: -50 }}>
//                     <Text style={{ fontSize: 80, color: 'black' }}>-</Text>
//                     <Text style={{ fontSize: 80, color: 'black', marginLeft: -3.5 }}>-</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             )}
//           >
//             {/* ... (diğer kodlar buraya gelebilir) */}
//           </BottomSheet>
//         </ImageBackground>
//       </View>
//     </Modal>
//   );
// };
//
// export default Weather;
