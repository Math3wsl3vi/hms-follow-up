import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dates from '~/components/home/Dates';
import Illustration from '~/components/home/Illustration';
import TopPart from '~/components/home/TopPart';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='p-2 bg-white h-screen'>
      {/* top part */}
      <TopPart/>
      {/* illustration */}
      <Illustration/>
      {/* calendar */}
      <Dates/>
      {/* reminders */}
    </SafeAreaView>
  );
};

export default Home;
