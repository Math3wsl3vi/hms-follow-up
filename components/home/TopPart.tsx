import React from 'react';
import { View, Text, Image } from 'react-native';

const TopPart = () => {
  return (
    <View className='pt-5 flex items-center justify-between flex-row px-2'>
      <View>
        <Image source={require('./../../assets/menu.png')} className='w-6 h-6'/>
      </View>
      <View className='border rounded-full p-2 border-gray-400'>
      <Image source={require('./../../assets/user.png')} className='w-5 h-5'/>
      </View>
    </View>
  );
};

export default TopPart;
