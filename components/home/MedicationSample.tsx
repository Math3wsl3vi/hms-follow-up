import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
const MedicationData = [
    {id: '1' ,name:'Aceclofenac 100mg', time:'8:00am'},
    {id: '2' ,name:'Paracetamol 500mg', time:'12:00pm'},
    {id: '3' ,name:'Tizanidine 2mg', time:'12:00pm'},
    {id: '4' ,name:'Levafloxin USP 500mg', time:'3:00pm'},
    {id: '5' ,name:'Cefuroxamine Axetil USP 500mg', time:'8:00pm'},
]

const MedicationSample = () => {
  return (
    <>
    <FlatList 
    data={MedicationData}
    contentContainerStyle={{gap:10}}
    renderItem={({item, index})=> (
        <View className='flex flex-row gap-5 items-center' key={index}>
    <View> 
        <Text className='text-lg text-gray-400' style={{fontFamily: 'popSb'}}>{item.time}</Text>
    </View>
    <View className='bg-white flex flex-1 flex-row rounded-md p-2 gap-3 items-center py-5'>
        <View>
            <Image source={require('./../../assets/pill.png')} className='w-10 h-10'/>
        </View>
        <View className=''>
            <Text className='text-xl text-green-1' style={{fontFamily: 'pop'}}>{item.name}</Text>
        </View>  
    </View>
    <View>
        <Image source={require('./../../assets/checked.png')} className='w-10 h-10'/>
        </View>
  </View>

    )}
    
    />
    
  </>
  )
}

export default MedicationSample