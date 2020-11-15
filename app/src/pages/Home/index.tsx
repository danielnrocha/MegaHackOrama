import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, ButtonsContainer } from './styles';
import logo from '../../assets/logo6.png';
import DarkButton from '../../components/DarkButton';
import { ButtonText } from '../../components/DarkButton/styles';
import LightButton from '../../components/LightButton';
import { ButtonTextLight } from '../../components/LightButton/styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleLogin(): void {
    navigation.navigate('ChooseProfile');
  }

  function handleRegister(): void {
    navigation.navigate('Wallet');
  }

  return (
    <React.Fragment>
      <StatusBar hidden />
      <Container>
        <View>
          <Logo source={logo} style={{ transform: [{ scale: 0.3 }] }} />
        </View>
      </Container>

      <ButtonsContainer>
        <LightButton onPress={handleLogin}>
          <ButtonTextLight>Log In</ButtonTextLight>
        </LightButton>

        <DarkButton>
          <ButtonText onPress={handleRegister}>Abrir Conta</ButtonText>
        </DarkButton>
      </ButtonsContainer>
    </React.Fragment>
  );
};

export default Home;
