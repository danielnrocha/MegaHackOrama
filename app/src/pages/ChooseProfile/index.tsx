/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';

import {
  Container,
  ArrowReturn,
  TitleText,
  BodyText,
  ProfileButton,
  ProfileButtonText,
  Content,
  MoneyIcon,
} from './styles';
import arrowLeft from '../../assets/icons-assets/backarrow.png';
import money from '../../assets/icons-assets/money.png';

const ChooseProfile: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack('WhereToInvest');
  }

  function handleModerateProfile(): void {
    navigation.navigate('WhereToInvest');
  }

  function handleHowToInvest(): void {
    navigation.navigate('HowToInvest');
  }

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#5ce06e"
        translucent={true}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Container>
          <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
            <TouchableOpacity onPress={handleBack}>
              <ArrowReturn source={arrowLeft} />
            </TouchableOpacity>
          </View>

          <Content>
            <TitleText>Olá, Pedro!</TitleText>
            <BodyText>
              Você optou por desconsiderar o questionário, por isso você deve
              escolher seu perfil.
            </BodyText>

            <ProfileButton>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Conservador</ProfileButtonText>
            </ProfileButton>

            <ProfileButton onPress={handleModerateProfile}>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Moderado</ProfileButtonText>
            </ProfileButton>

            <ProfileButton>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Agressivo</ProfileButtonText>
            </ProfileButton>

            <TouchableOpacity
              style={{ bottom: -100, position: 'relative' }}
              onPress={handleHowToInvest}
            >
              <Text>Prefiro investir sozinho</Text>
            </TouchableOpacity>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

export default ChooseProfile;
