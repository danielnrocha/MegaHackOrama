import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, ButtonsContainer } from './styles';
import logo from '../../assets/logo.png';
import DarkButton from '../../components/DarkButton';
import { ButtonText } from '../../components/DarkButton/styles';
import LightButton from '../../components/LightButton';
import { ButtonTextLight } from '../../components/LightButton/styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleLogin(): void {
    navigation.navigate('Login');
  }

  return (
    <React.Fragment>
      <StatusBar hidden />
      <Container>
        <Logo source={logo} />
      </Container>

      <ButtonsContainer>
        <LightButton onPress={handleLogin}>
          <ButtonTextLight>Log In</ButtonTextLight>
        </LightButton>

        <DarkButton>
          <ButtonText>Abrir Conta</ButtonText>
        </DarkButton>
      </ButtonsContainer>
    </React.Fragment>
  );
};

export default Home;
