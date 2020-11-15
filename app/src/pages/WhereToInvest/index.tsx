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
import money from '../../assets/icons-assets/money3.png';

const ChooseProfile: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleFund(): void {
    navigation.navigate('Fund');
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
            <TitleText>Por onde começar?</TitleText>
            <BodyText>
              Pedro, você escolheu o perfil Moderado. Te indicamos estes fundos
              de investimento.
            </BodyText>

            <ProfileButton onPress={handleFund}>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Órama Ouro FIM</ProfileButtonText>
            </ProfileButton>

            <ProfileButton>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Artesanal FIC FIM CP</ProfileButtonText>
            </ProfileButton>

            <ProfileButton>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Occam FI Cambial</ProfileButtonText>
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
