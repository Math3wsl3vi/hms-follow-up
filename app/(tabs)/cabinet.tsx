import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusCircle, CheckCircle, XCircle } from "lucide-react-native";
import { useNavigation } from "expo-router";
import * as Progress from 'react-native-progress';

const medications = [ 
  { id: "1", name: "Paracetamol", dosage: "500mg", frequency: "Every 8 hours", nextDose: "8:00 AM", taken:false },
  { id: "2", name: "Vitamin C", dosage: "1000mg", frequency: "Once a day", nextDose: "9:00 AM", taken:false},
  { id: "3", name: "Amoxicillin", dosage: "250mg", frequency: "Every 12 hours", nextDose: "10:00 AM", taken:false },
];

const prevMedications =[
  { id: "1", name: "Paracetamol", dosage: "500mg", frequency: "Every 8 hours", nextDose: "8:00 AM", taken:false  },
  { id: "2", name: "Vitamin C", dosage: "1000mg", frequency: "Once a day", nextDose: "9:00 AM", taken:false  },
  { id: "3", name: "Amoxicillin", dosage: "250mg", frequency: "Every 12 hours", nextDose: "10:00 AM", taken:false  },
  { id: "4", name: "Ibuprofen", dosage: "400mg", frequency: "Every 6 hours", nextDose: "11:00 AM", taken:false  },
  { id: "5", name: "Loratadine", dosage: "10mg", frequency: "Once a day", nextDose: "12:00 PM" , taken:false },
  { id: "6", name: "Metformin", dosage: "500mg", frequency: "Twice a day", nextDose: "1:00 PM", taken:false  },
  { id: "7", name: "Aspirin", dosage: "81mg", frequency: "Once a day", nextDose: "2:00 PM" , taken:false },
  { id: "8", name: "Cough Syrup", dosage: "10ml", frequency: "Every 4 hours", nextDose: "3:00 PM" , taken:false },
  { id: "9", name: "Multivitamins", dosage: "1 tablet", frequency: "Once a day", nextDose: "4:00 PM", taken:false  },
  { id: "10", name: "Omeprazole", dosage: "20mg", frequency: "Once a day", nextDose: "6:00 PM" , taken:false }
]

const missedDoses =[
  { id: "1", name: "Loratadine", dosage: "10mg", frequency: "Once a day", nextDose: "12:00 PM", taken:false  },
  { id: "2", name: "Metformin", dosage: "500mg", frequency: "Twice a day", nextDose: "1:00 PM" , taken:false },
  { id: "3", name: "Aspirin", dosage: "81mg", frequency: "Once a day", nextDose: "2:00 PM" , taken:false },
  { id: "4", name: "Cough Syrup", dosage: "10ml", frequency: "Every 4 hours", nextDose: "3:00 PM", taken:false  },
  { id: "5", name: "Multivitamins", dosage: "1 tablet", frequency: "Once a day", nextDose: "4:00 PM", taken:false  },
  { id: "6", name: "Omeprazole", dosage: "20mg", frequency: "Once a day", nextDose: "6:00 PM" , taken:false }
]
const MedicationCabinet = () => {
  const navigation = useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  const [selectedTab, setSelectedTab] = useState("Current Medications");
  const [meds, setMeds ] = useState(medications)

  const markAsTaken = (id: string) => {
    const updatedMeds = meds.map((med) => 
    med.id === id ? {...med, taken:true } : med 
  )
  setMeds(updatedMeds)
  }

  const progress = meds.filter((med)=> med.taken).length/meds.length

  return (
    <SafeAreaView className="flex-1 bg-white p-4 pt-6">
      <Text className="text-2xl font-semibold text-center mb-4" style={{fontFamily:'popSb'}}>Your Medication Cabinet</Text>
      <View className="items-center mb-4">
        <Progress.Bar progress={progress} width={300} color="green" />
        <Text className="text-gray-700 mt-2">{Math.round(progress * 100)}% completed</Text>
      </View>
      
      {/* Tabs */}
      <View className="flex-row justify-around mb-4">
        {["Current Medications", "Missed Doses", "Medication History"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text className={`text-xl ${selectedTab === tab ? "font-bold text-green-1" : "text-gray-500"}`} style={{fontFamily:'pop'}}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Medication List */}
      {selectedTab === 'Medication History' && (
        <FlatList
        data={prevMedications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-gray-100 p-4 mb-2 rounded-lg">
            <View className="flex flex-row justify-between items-center w-full">
              <View>
              <Text className="text-xl font-semibold" style={{fontFamily:'pop'}}>{item.name}</Text>
              </View>
              <View className="flex items-end">
              <Text className="text-sm text-gray-600" style={{fontFamily:'pop'}}>{item.dosage}</Text>
              <Text className="text-sm text-gray-800" style={{fontFamily:'pop'}}>{item.frequency}</Text>
              </View>
              <View className="flex-row gap-2">
              {!item.taken ? (
                <TouchableOpacity onPress={() => markAsTaken(item.id)}>
                  <CheckCircle size={24} color="green" />
                </TouchableOpacity>
              ) : (
                <Text className="text-green-600">Taken ✅</Text>
              )}
            </View>
              
            </View>
          </View>
        )}
      />)}
      {selectedTab === 'Missed Doses' && (
        <FlatList
        data={missedDoses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-gray-100 p-4 mb-2 rounded-lg">
            <View className="flex flex-row justify-between items-center w-full">
              <View>
              <Text className="text-2xl font-semibold" style={{fontFamily:'pop'}}>{item.name}</Text>
              </View>
              <View className="flex items-end">
              <Text className="text-sm text-gray-600" style={{fontFamily:'pop'}}>{item.dosage}</Text>
              <Text className="text-sm text-gray-800" style={{fontFamily:'pop'}}>{item.frequency}</Text>
              </View>
              
            </View>
          </View>
        )}
      />)}
       {selectedTab === 'Current Medications' && (
        <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-gray-100 p-4 mb-2 rounded-lg">
            <View>
              <Text className="text-lg font-semibold" style={{fontFamily:'pop'}}>{item.name}</Text>
              <Text className="text-sm text-gray-600" style={{fontFamily:'pop'}}>{item.dosage} • {item.frequency}</Text>
              <Text className="text-sm text-gray-800" style={{fontFamily:'pop'}}>Next: {item.nextDose}</Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity>
                <CheckCircle size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity>
                <XCircle size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />)}

      {/* Floating Action Button */}
      <TouchableOpacity className="absolute bottom-6 right-6 bg-green-1 p-4 rounded-full shadow-lg">
        <PlusCircle size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MedicationCabinet;
