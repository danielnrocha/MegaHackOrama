import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// eslint-disable-next-line camelcase
import { Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { useFonts } from 'expo-font';
import Routes from './src/routes/index';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
