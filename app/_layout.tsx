import { useColorScheme } from 'react-native';
import '../global.css';
import { useFonts } from 'expo-font'

import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    pop: require('../assets/fonts/Poppins-Regular.ttf'),
    popB: require('../assets/fonts/Poppins-Bold.ttf'),
    popSb: require('../assets/fonts/Poppins-SemiBold.ttf'),
    popI: require('../assets/fonts/Poppins-Italic.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
