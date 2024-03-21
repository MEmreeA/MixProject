import * as React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

function Ppage(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 28,
              marginTop: -6,
              marginRight: 10,
              color: 'red',
              fontWeight: 'bold',
            }}>
            *
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            The Tesla boss made the post after Vernon Usworth declared his
            mini-submarine idea a “PR stunt”
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 28,
              marginTop: -6,
              marginRight: 10,
              color: 'red',
              fontWeight: 'bold',
            }}>
            *
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Mr Unsworth is seeking $US75,000 in damages from the billionaire
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 40,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 28,
              marginTop: -6,
              marginRight: 10,
              color: 'red',
              fontWeight: 'bold',
            }}>
            *
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            Mr Musk wanted the judge to dismiss his case as he believed the
            insult was protected from legal action
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Ppage;
