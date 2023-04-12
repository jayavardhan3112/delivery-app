import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 4000);
  }, []);
  return (
    <View className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/food-delivery.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-40 w-40"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center"
      >
        Waiting For Restaurant to Accept the order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="black" />
    </View>
  );
};

export default PreparingOrderScreen;
