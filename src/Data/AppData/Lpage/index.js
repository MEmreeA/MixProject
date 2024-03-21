import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Video from 'react-native-video';

const Lpage = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={styles.video}
        paused={true}
        // controls={true}
        resizeMode="contain"
      />
      <Text style={{marginTop: 10}}>
        The standard chunk of Lorem Ipsum used since the 1500s is repro duced
        below for those interested.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  video: {
    width: 400,
    aspectRatio: 16 / 9,
    backgroundColor: 'black',
  },
});

export default Lpage;
