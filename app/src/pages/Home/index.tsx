import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  ButtonsContainer,
  LogInButton,
  LogInButtonText,
  SignupButton,
  SignupButtonText,
} from './styles';
import logo from '../../assets/logo.png';

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
        <LogInButton onPress={handleLogin}>
          <LogInButtonText>Log In</LogInButtonText>
        </LogInButton>

        <SignupButton>
          <SignupButtonText>Abrir Conta</SignupButtonText>
        </SignupButton>
      </ButtonsContainer>
    </React.Fragment>
  );
};

export default Home;
