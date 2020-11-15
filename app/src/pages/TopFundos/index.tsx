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
  ScrollView,
} from 'react-native';

import {
  Container,
  ArrowReturn,
  TitleText,
  BodyText,
  ProfileButton,
  ProfileButtonText,
  Content,
} from './styles';
import arrowLeft from '../../assets/icons-assets/backarrow.png';

const ChooseProfile: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleFund(): void {
    navigation.navigate('Fund');
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
          <View
            style={{
              marginTop: 24,
              paddingHorizontal: 15,
            }}
          >
            <TouchableOpacity onPress={handleBack}>
              <ArrowReturn source={arrowLeft} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <Content>
              <TitleText>Top Fundos</TitleText>
              <BodyText>
                Estes são os fundos disponíveis. Escolha um e invista agora
                mesmo!
              </BodyText>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                }}
              >
                <ProfileButton style={{ marginTop: 50 }} onPress={handleFund}>
                  <ProfileButtonText>
                    <Text
                      style={{
                        color: 'black',
                        position: 'relative',
                        lineHeight: 30,
                        textTransform: 'uppercase',
                      }}
                    >
                      Fundo 1{'\n'}
                    </Text>
                    <Text>
                      63.87%(12M){'\n'} Aplicação Mínima {'\n'}R$ 0,00
                    </Text>
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton style={{ marginTop: 50 }} onPress={handleFund}>
                  <ProfileButtonText>
                    <Text
                      style={{
                        color: 'black',
                        position: 'relative',
                        lineHeight: 30,
                        textTransform: 'uppercase',
                      }}
                    >
                      Fundo 1{'\n'}
                    </Text>
                    <Text>
                      63.87%(12M){'\n'} Aplicação Mínima {'\n'}R$ 0,00
                    </Text>
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton style={{ marginTop: 50 }} onPress={handleFund}>
                  <ProfileButtonText>
                    <Text
                      style={{
                        color: 'black',
                        position: 'relative',
                        lineHeight: 30,
                        textTransform: 'uppercase',
                      }}
                    >
                      Fundo 1{'\n'}
                    </Text>
                    <Text>
                      63.87%(12M){'\n'} Aplicação Mínima {'\n'}R$ 0,00
                    </Text>
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton style={{ marginTop: 50 }} onPress={handleFund}>
                  <ProfileButtonText>
                    <Text
                      style={{
                        color: 'black',
                        position: 'relative',
                        lineHeight: 30,
                        textTransform: 'uppercase',
                      }}
                    >
                      Fundo 1{'\n'}
                    </Text>
                    <Text>
                      63.87%(12M){'\n'} Aplicação Mínima {'\n'}R$ 0,00
                    </Text>
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton style={{ marginTop: 50 }} onPress={handleFund}>
                  <ProfileButtonText>
                    <Text
                      style={{
                        color: 'black',
                        position: 'relative',
                        lineHeight: 30,
                        textTransform: 'uppercase',
                      }}
                    >
                      Fundo 1{'\n'}
                    </Text>
                    <Text>
                      63.87%(12M){'\n'} Aplicação Mínima {'\n'}R$ 0,00
                    </Text>
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton style={{ marginTop: 50 }} onPress={handleFund}>
                  <ProfileButtonText>
                    <Text
                      style={{
                        color: 'black',
                        position: 'relative',
                        lineHeight: 30,
                        textTransform: 'uppercase',
                      }}
                    >
                      Fundo 1{'\n'}
                    </Text>
                    <Text>
                      63.87%(12M){'\n'} Aplicação Mínima {'\n'}R$ 0,00
                    </Text>
                  </ProfileButtonText>
                </ProfileButton>
              </View>

              <TouchableOpacity style={{ marginTop: 50, bottom: 30 }}>
                <Text>Outros tipos de investimento</Text>
              </TouchableOpacity>
            </Content>
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

export default ChooseProfile;
