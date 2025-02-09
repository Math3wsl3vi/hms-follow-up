import { View, Text, FlatList } from 'react-native'
import React from 'react'
const DateData =[
    {day:'Mon', date: '2'},
    {day:'Tue', date: '3'},
    {day:'Wed', date: '4'},
    {day:'Thur', date: '5'},
    {day:'Fri', date: '6'},
    {day:'Sat', date: '7'},
    {day:'Sun', date: '8'},

]

const Dates = () => {
    const now = new Date()
    const date = (new Intl.DateTimeFormat('en-Us',{dateStyle: 'full'})).format(now)
  return (
    <View className='mt-4 p-2'>
      <Text className='text-2xl'>{date}</Text>
      <FlatList 
      horizontal
      data={DateData}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{columnGap:5, marginTop:10}}
      renderItem={({item, index}) => (
        <View key={index} className='flex flex-col gap-2 border shadow-md rounded-md p-2 w-16 items-center justify-center'>
            <Text>{item.day}</Text>
            <Text>{item.date}</Text>
        </View>
      )}
      />
    </View>
  )
}

export default Dates