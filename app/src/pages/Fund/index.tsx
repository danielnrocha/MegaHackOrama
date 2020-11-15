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
  ProfileButton,
  FundButton,
  FundText,
  Content,
} from './styles';
import arrowLeft from '../../assets/icons-assets/backarrow.png';

const ChooseProfile: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
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
              <TitleText>Órama Ouro Fim</TitleText>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <ProfileButton style={{ marginTop: 50 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 15,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>Mês</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>2020</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>12M</Text>
                    </View>
                  </View>
                </ProfileButton>

                <ProfileButton style={{ backgroundColor: 'white' }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 15,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>-5.30%</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>55.51%</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>63.87%</Text>
                    </View>
                  </View>
                </ProfileButton>

                <ProfileButton style={{ marginTop: 10 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 15,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ textAlign: 'center' }}>
                        Perfil de risco do fundo
                      </Text>
                    </View>
                  </View>
                </ProfileButton>

                <ProfileButton
                  style={{
                    marginTop: 10,
                    marginBottom: 25,
                    backgroundColor: 'white',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 15,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          top: -10,
                          color: 'green',
                          fontSize: 30,
                        }}
                      >
                        Médio
                      </Text>
                    </View>
                  </View>
                </ProfileButton>

                <FundButton>
                  <FundText>Prazo de cotização de resgate</FundText>
                </FundButton>
                <FundButton style={{ backgroundColor: 'white' }}>
                  <FundText>Ver prazo</FundText>
                </FundButton>
                <FundButton>
                  <FundText>Aplicação mínima</FundText>
                </FundButton>
                <FundButton style={{ backgroundColor: 'white' }}>
                  <FundText>R$ 0,00</FundText>
                </FundButton>
                <FundButton>
                  <FundText>Aplicação adicional</FundText>
                </FundButton>
                <FundButton style={{ backgroundColor: 'white' }}>
                  <FundText>R$ 0,00</FundText>
                </FundButton>
              </View>
            </Content>
          </ScrollView>
          <View
            style={{
              backgroundColor: '#5ce06e',
              width: 440,
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Aplicar</Text>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

export default ChooseProfile;

/*
              <TouchableOpacity style={{ marginTop: 50, bottom: 30 }}>
                <Text>Outros tipos de investimento</Text>
              </TouchableOpacity> */
