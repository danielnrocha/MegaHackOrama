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
  LoginText,
  LoginButton,
  LoginButtonText,
  Content,
} from './styles';
import arrowLeft from '../../assets/icons-assets/backarrow.png';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack('Home');
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />

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
            <LoginText>Log In</LoginText>

            <Input
              style={{ borderRadius: 10 }}
              name=""
              placeholder="joao@examplo.com"
            />
            <Input
              style={{ borderRadius: 10 }}
              name=""
              placeholder="********"
              secureTextEntry={true}
            />

            <LoginButton style={{ borderRadius: 10 }}>
              <LoginButtonText>Log In</LoginButtonText>
            </LoginButton>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

export default Login;
