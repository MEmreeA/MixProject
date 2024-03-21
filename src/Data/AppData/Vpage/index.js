import * as React from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

function Vpage() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#DEDEDE',
          }}>
          <Image
            source={require('../../../Allpng/Page/sstonotpossible.png')}
            style={{
              width: 350,
              height: 400,
              marginHorizontal: 10,
              marginBottom: 20,
              borderWidth: 2,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 30}}>
          <TouchableOpacity>
            <Text style={{marginRight: 18}}>Elon Musk</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginRight: 18}}>Tesla Motor</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginRight: 18}}>SpaceX</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginRight: 18}}>Elon Musk</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Elon Musk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Vpage;
