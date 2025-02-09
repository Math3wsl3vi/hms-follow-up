import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Dates from '~/components/home/Dates';
import Illustration from '~/components/home/Illustration';
import RemindersList from '~/components/home/RemindersList';
import TopPart from '~/components/home/TopPart';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView className='p-2 bg-white h-screen'>
      {/* top part */}
      <TopPart/>
      {/* illustration */}
      <Illustration/>
      {/* calendar */}
      <Dates/>
      {/* reminders */}
      <RemindersList/>
    </ScrollView>
  );
};

export default Home;
