import { View, Text, Image } from 'react-native'
import React from 'react'

const Illustration = () => {
  return (
    <View className='mt-12'>
      <Text className='text-3xl text-gray-500' style={{fontFamily:'popSb'}}>How Are you feeling today?</Text>
      <Image source={require('./../../assets/newdoc.png')} className='w-full h-[350px]'/>
    </View>
  )
}

export default Illustration