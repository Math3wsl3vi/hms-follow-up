import { View, Text } from 'react-native'
import React from 'react'
import MedicationSample from './MedicationSample'

const RemindersList = () => {
  return (
    <View className='mt-4 -mx-2 p-2 bg-green-50 h-full mb-20' style={{borderTopEndRadius:20}}>
      <Text className='text-2xl text-gray-400 text-center my-5' style={{fontFamily: 'popSb'}}>Your Reminders For Today</Text>
    <View className='flex flex-col gap-10'>
    <MedicationSample/>
    </View>
    </View>
  )
}

export default RemindersList