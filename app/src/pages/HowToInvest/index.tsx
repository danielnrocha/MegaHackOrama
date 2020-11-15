/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
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
import money from '../../assets/icons-assets/money4.png';

const ChooseProfile: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleTopFundos(): void {
    navigation.navigate('TopFundos');
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
            <TitleText>Onde investir?</TitleText>
            <BodyText>Escolha um tipo de investimento</BodyText>

            <ProfileButton>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Renda Fixa</ProfileButtonText>
            </ProfileButton>

            <ProfileButton onPress={handleTopFundos}>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Fundos</ProfileButtonText>
            </ProfileButton>

            <ProfileButton>
              <MoneyIcon source={money} style={{ alignSelf: 'flex-start' }} />
              <ProfileButtonText>Home broker</ProfileButtonText>
            </ProfileButton>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

export default ChooseProfile;
