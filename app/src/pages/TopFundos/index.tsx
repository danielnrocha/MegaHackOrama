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

          <ScrollView>
            <Content>
              <TitleText>Top Fundos</TitleText>
              <BodyText>
                Estes são os fundos disponíveis. Escolha um e invista agora
                mesmo!
              </BodyText>

              <ProfileButton style={{ marginTop: 50 }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <ProfileButtonText
                    style={{
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    Órama Ouro FIM
                  </ProfileButtonText>
                  <ProfileButtonText style={{ flex: 1, textAlign: 'right' }}>
                    <Text></Text>
                  </ProfileButtonText>
                </View>
              </ProfileButton>

              <ProfileButton style={{ marginTop: 50 }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <ProfileButtonText
                    style={{
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    Órama Ouro FIM
                  </ProfileButtonText>
                  <ProfileButtonText style={{ flex: 1, textAlign: 'right' }}>
                    <Text></Text>
                  </ProfileButtonText>
                </View>
              </ProfileButton>

              <ProfileButton style={{ marginTop: 50 }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <ProfileButtonText
                    style={{
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    Órama Ouro FIM
                  </ProfileButtonText>
                  <ProfileButtonText style={{ flex: 1, textAlign: 'right' }}>
                    <Text></Text>
                  </ProfileButtonText>
                </View>
              </ProfileButton>

              <ProfileButton style={{ marginTop: 50 }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <ProfileButtonText
                    style={{
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    Órama Ouro FIM
                  </ProfileButtonText>
                  <ProfileButtonText style={{ flex: 1, textAlign: 'right' }}>
                    <Text></Text>
                  </ProfileButtonText>
                </View>
              </ProfileButton>

              <ProfileButton style={{ marginTop: 50 }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <ProfileButtonText
                    style={{
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    Órama Ouro FIM
                  </ProfileButtonText>
                  <ProfileButtonText style={{ flex: 1, textAlign: 'right' }}>
                    <Text></Text>
                  </ProfileButtonText>
                </View>
              </ProfileButton>

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
