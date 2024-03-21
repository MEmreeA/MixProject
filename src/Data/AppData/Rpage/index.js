import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Video from 'react-native-video';

const Rpage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={{borderWidth: 2, marginHorizontal: 10, marginBottom: 60, marginTop: 20}}>
      <Text
        style={{
          marginHorizontal: 30,
          fontSize: 18,
          color: '#333333',
          marginVertical: 20,
          textAlign: 'center',
        }}>
        Sed sagittis elementum mauris velsani sollicitudin nunc pharetra.
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 16, marginRight: 6}}>
          ............................
        </Text>
        <Image
          source={require('../../ElonMpageFoto/ppPhoto.png')}
          style={{
            borderRadius: 50,
            marginRight: -10,
            height: 60,
            width: 60,
          }}
        />
        {/*<Text>Dj Emre</Text>*/}
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: 'red',
            borderRadius: 50,
            marginVertical: 10,
          }}
          onPress={togglePlayPause}>
          <Image
            source={
              isPlaying
                ? require('../../../Allpng/Icon/PlayIcon.png')
                : require('../../../Allpng/Icon/PauseIcon.png')
            }
            style={{width: 30, height: 30, tintColor: 'pink'}}
          />
        </TouchableOpacity>
        <Video
          source={{
            uri: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
          }}
          paused={!isPlaying}
          repeat={false}
          playInBackground={true}
          playWhenInactive={true}
          ignoreSilentSwitch={'ignore'}
        />
        <Text style={{fontSize: 16, marginLeft: 6}}>
          ............................
        </Text>
      </View>
    </View>
  );
};

export default Rpage;

// import React, {useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import Slider from '@react-native-community/slider';
// import Sound from 'react-native-sound';
//
// const TRY = () => {
//   const [sound, setSound] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.5);
//
//   useEffect(() => {
//     return () => {
//       if (sound) {
//         sound.release();
//       }
//     };
//   }, [sound]);
//
//   const togglePlayPause = url => {
//     if (sound) {
//       setIsPlaying(!isPlaying);
//
//       if (isPlaying) {
//         sound.pause(() => {});
//       } else {
//         sound.play(() => {});
//       }
//     } else {
//       const newSound = new Sound(url, null, error => {
//         if (error) {
//           return;
//         }
//         setSound(newSound);
//         newSound.setVolume(volume);
//         newSound.play(() => {
//           setIsPlaying(true);
//         });
//       });
//     }
//   };
//
//   const changeVolume = value => {
//     if (sound) {
//       setVolume(value);
//       sound.setVolume(value);
//     }
//   };
//
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Dj Emre</Text>
//       <TouchableOpacity
//         style={{
//           padding: 10,
//           backgroundColor: 'red',
//           borderRadius: 5,
//           marginVertical: 10,
//         }}
//         onPress={() =>
//           togglePlayPause(
//             'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
//           )
//         }>
//         <Text style={{color: 'pink', fontWeight: 'bold'}}>{isPlaying ? 'Duraklat' : 'Oynat'}</Text>
//       </TouchableOpacity>
//       <Slider
//         style={{width: 200, marginTop: 20}}
//         minimumValue={0}
//         maximumValue={1}
//         value={volume}
//         onValueChange={changeVolume}
//         minimumTrackTintColor="red"
//         maximumTrackTintColor="blue"
//       />
//     </View>
//   );
// };
//
// export default TRY;
